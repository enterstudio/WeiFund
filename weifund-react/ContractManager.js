var Promise = require('bluebird');
var solc = require('solc');
var fs = Promise.promisifyAll(require('fs'));
var jsonfile = require('jsonfile');
var path = require('path');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var async = require('async');
var Pudding = require('ether-pudding');
var PuddingGenerator = require('ether-pudding/generator');
var PuddingLoader = require('ether-pudding/loader');
var ContractDirectory = path.normalize(__dirname)+'/client/lib/contracts'
var SolidityDirectory = ContractDirectory+'/solidity';
var solJSDirectory = ContractDirectory+'/sol-js';
var WeiFundContracts = require(ContractDirectory+'/sol-js/index.cjs.js');
var compiledDirectory = ContractDirectory+'/compiled';
var ContractGenerator = new Object();



function CompileContracts(){
  return new Promise((resolve, reject) => {

    fs.readdirAsync(SolidityDirectory).then((contracts) => {
      // console.log('Compiling contracts and saving .sol.js files in contract folder. one second...');
      async.forEach(contracts, (contract, cb) => {
        fs.readFileAsync(SolidityDirectory+'/'+contract, 'utf8').then((source) => {
          var compiled = solc.compile(source, 1);
          if(!compiled.contracts){ throw compiled }
          async.forEach(Object.keys(compiled.contracts), (C, cb) => {
            var abi = JSON.parse(compiled.contracts[C].interface);
            var binary = compiled.contracts[C].bytecode;
            var gasEstimates = compiled.contracts[C].gasEstimates;

            ContractGenerator[C] = {
              abi : abi,
              binary : binary,
              gasEstimates : gasEstimates,
              address : undefined
            };
            cb();
          }, (error) => {
            if(error){throw error;}

            cb();
          });
        }).catch((error) => {
          throw error;
        });
      }, (error) => {
        if(error) throw error;
        PuddingGenerator.save(ContractGenerator, solJSDirectory);
        console.log(`.sol.js saved to directory: ${solJSDirectory}`);
        resolve(ContractGenerator);
      });
    }).catch((error) => {
      reject(error);
    });
  });
}

function DeployWeiFundContracts(){
  return new Promise((resolve, reject) => {

    var DeployedContracts = new Object();
    var WeiFundAddr;
    var SendFrom = {from: web3.eth.coinbase, gas : 3141592};
    Pudding.setWeb3(web3);

    CompileContracts().then((_CompiledContracts) => {

      console.log("Deploying WeiFund...");
      var WeiFund = WeiFundContracts.WeiFund;
      WeiFund.load(Pudding);
      return WeiFund.new(SendFrom);
    }).then((WeiFund) => {
      DeployedContracts['WeiFund'] = WeiFund;
      console.log(`Deployed WeiFund at: ${WeiFund.address}`);

      console.log("Deploying WeiHash...");
      var WeiHash = WeiFundContracts.WeiHash;
      WeiHash.load(Pudding);
      WeiFundAddr = WeiFund.address;
      return WeiHash.new(WeiFundAddr, SendFrom);
    }).then((WeiHash) => {

      DeployedContracts['WeiHash'] = WeiHash;
      console.log(`Deployed WeiHash at: ${WeiHash.address}`);
      return WeiHash.weifundAddr.call();

    }).then((WeiFundAddress) => {
      if(WeiFundAddress != WeiFundAddr){reject("WeiFund Address Was Not Set in WeiHash! Warning!!!")}

      console.log("Deploying CampaignAccountFactory...");

      var CampaignAccountFactory = WeiFundContracts.CampaignAccountFactory;
      CampaignAccountFactory.load(Pudding);
      return CampaignAccountFactory.new(WeiFundAddress, SendFrom);
    }).then((CampaignAccountFactory) => {
      DeployedContracts['CampaignAccountFactory'] = CampaignAccountFactory;
      console.log(`Deployed CampaignAccountFactory at: ${CampaignAccountFactory.address}`);

      return CampaignAccountFactory.weifund.call();
    }).then((WeiFundAddress) => {
      if(WeiFundAddress != WeiFundAddr){reject("WeiFund Address Was Not Set in CampaignAccountFactory! Warning!!!")}

      console.log("Deploying WeiControllerFactory...");
      var WeiControllerFactory = WeiFundContracts.WeiControllerFactory;
      WeiControllerFactory.load(Pudding);
      return WeiControllerFactory.new(WeiFundAddr, SendFrom);

    }).then((WeiControllerFactory) => {
      DeployedContracts['WeiControllerFactory'] = WeiControllerFactory;
      console.log(`Deployed WeiControllerFactory at: ${WeiControllerFactory.address}`);

      return WeiControllerFactory.weifund.call();
    }).then((WeiFundAddress) => {
      if(WeiFundAddress != WeiFundAddr){reject("WeiFund Address Was Not Set in WeiControllerFactory! Warning!!!")}

      console.log("Deploying PersonaRegistry...");
      var PersonaRegistry = WeiFundContracts.PersonaRegistry;
      PersonaRegistry.load(Pudding);
      return PersonaRegistry.new(WeiFundAddr, SendFrom);
    }).then((PersonaRegistry) => {
      DeployedContracts['PersonaRegistry'] = PersonaRegistry;
      console.log(`Deployed PersonaRegistry at: ${PersonaRegistry.address}`);
      return PersonaRegistry.previousPublishedVersion.call();

    }).then((WeiFundAddress) => {
      if(WeiFundAddress != WeiFundAddr){reject("WeiFund Address Was Not Set in PersonaRegistry! Warning!!!")}

      async.forEach(Object.keys(DeployedContracts), (contract, cb) => {
        ContractGenerator[contract].address = DeployedContracts[contract].address
        cb();
      }, (error) => {
        if(error){reject(error)}

        //  Save ContractGenerator JSON to file; we'll use it in the Dapp
        jsonfile.writeFileSync(compiledDirectory+'/contracts.json', ContractGenerator);
        console.log(`contracts.json saved to directory: ${compiledDirectory}`);
        resolve(ContractGenerator);
      });
    }).catch((error) => {
      reject(error);
    });
  });
}



DeployWeiFundContracts().then((ContractGenerator) => {
  console.log("WeiFund Contracts Deployed & Saved.");
}).catch((error) => {
  console.log("Error: "+error);
});
