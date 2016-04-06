// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"_service","type":"address"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"services","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"weifund","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_service","type":"address"}],"name":"isService","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_token","type":"address"},{"name":"_tokenValue","type":"uint256"},{"name":"_autoDisperse","type":"bool"}],"name":"newWeiController","outputs":[{"name":"newController","type":"address"}],"type":"function"},{"inputs":[{"name":"_weifund","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_service","type":"address"},{"indexed":false,"name":"_sender","type":"address"}],"name":"ServiceAdded","type":"event"}],
    binary: "60606040819052600160025560208061085783395060806040525160018054600160a060020a031916821790555061081c8061003b6000396000f3606060405236156100565760e060020a600035046314afd79e811461005857806354fd4d501461007f5780636d966d01146100885780637cec2e15146100a9578063e9d8dbfd146100bb578063ea9fa768146100eb575b005b6101cc600435600160a060020a03808216600090815260208190526040902054165b919050565b6101e960025481565b6101cc600435600060208190529081526040902054600160a060020a031681565b6101cc600154600160a060020a031681565b600160a060020a036004358181166000908152602081905260408120546101e99316811461007a5750600161007a565b6101cc600435602435604435606435600154600090600160a060020a0316858585856060610621806101fb833990810195909552505050600160a060020a039081166080830152851660a082015260c0810184905260e0810183905260405190819003610100019082f090506101f38160408051600160a060020a038381166000818152602081815290859020805473ffffffffffffffffffffffffffffffffffffffff191633908117909155909216835292517f53080a697c71dfd33ddffeb9808c0f9c892d7ad88289d9f2ef5ae05b1ce3406b9281900390910190a250565b60408051600160a060020a03929092168252519081900360200190f35b6060908152602090f35b9493505050505660606040819052600160075560a08061062183396101006040529051608051915160c05160e05160018054600160a060020a03199081169095179055600280548516909517909455600380549093169091179091556005556006805460ff191690911790556105af806100726000396000f3606060405236156100ae5760e060020a60003504630508ed9081146100b05780631ec7e345146100dd57806327e235e3146100e657806348c54b9d146100fe57806349ed2fa91461011157806354fd4d501461011a5780635aa6cf97146101235780636dca35da1461014a5780637a3a0e84146101715780637cec2e151461017a5780638da5cb5b1461018c578063c40bc6401461019e578063e796a6eb146101aa578063fc0c546a146101d1575b005b6100ae60043560243560443560643560015460009033600160a060020a0390811691161461052157610002565b6101e360055481565b6101e360043560086020526000908152604090205481565b6100ae60065460ff16156102c957610002565b6101e360005481565b6101e360075481565b6100ae60043560243560015460009033600160a060020a0390811691161461020057610002565b6100ae60043560243560443560015433600160a060020a0390811691161461050857610002565b6101e360045481565b6101ed600154600160a060020a031681565b6101ed600254600160a060020a031681565b6101e360065460ff1681565b6100ae60043560243560443560015433600160a060020a039081169116146104f857610002565b6101ed600354600160a060020a031681565b6060908152602090f35b600160a060020a03166060908152602090f35b80548390811461020f57610002565b60035460e060020a6370a0823102606090815230600160a060020a03908116606452909116906370a082319060849060209060248188876161da5a03f1156100025750506040515160065490935060ff161590506102c3576040805160035460025460e060020a63a9059cbb028352600160a060020a03908116600484015260248301869052925192169163a9059cbb9160448181019260209290919082900301816000876161da5a03f115610002575050505b50505050565b600154600080547f2451a899000000000000000000000000000000000000000000000000000000006060908152606491909152600160a060020a039290921691632451a899916084916020916024908290876161da5a03f1156100025750506040515190508015610350575033600160a060020a0316600090815260086020526040812054115b156103c1576040805160035433600160a060020a039081166000818152600860209081528682205460e060020a63a9059cbb028752600487019390935260248601929092529451929091169363a9059cbb93604481810194929183900301908290876161da5a03f115610002575050505b60408051600154600080547ff41e349400000000000000000000000000000000000000000000000000000000845260048401529251600160a060020a03919091169263f41e3494926024818101936020939092839003909101908290876161da5a03f115610002575050604051519050801561044c5750600254600160a060020a0390811633909116145b156104f6576040805160025460035460e060020a6370a0823102835230600160a060020a03908116600485015293519084169363a9059cbb9392169184916370a082319160248181019260209290919082900301816000876161da5a03f11561000257505060408051805160e060020a63a9059cbb02825260048201949094526024810193909352516044838101936020935082900301816000876161da5a03f115610002575050505b565b600054839081146102c357610002565b6000811161051557610002565b60009290925550600455565b80548590811461053057610002565b600554600160a060020a0386168352600860205260409092209183049182905560065460ff16156105a75760035460e060020a63a9059cbb026060908152600160a060020a038781166064526084859052919091169063a9059cbb9060a4906020906044816000876161da5a03f115610002575050505b50505050505056",
    unlinked_binary: "60606040819052600160025560208061085783395060806040525160018054600160a060020a031916821790555061081c8061003b6000396000f3606060405236156100565760e060020a600035046314afd79e811461005857806354fd4d501461007f5780636d966d01146100885780637cec2e15146100a9578063e9d8dbfd146100bb578063ea9fa768146100eb575b005b6101cc600435600160a060020a03808216600090815260208190526040902054165b919050565b6101e960025481565b6101cc600435600060208190529081526040902054600160a060020a031681565b6101cc600154600160a060020a031681565b600160a060020a036004358181166000908152602081905260408120546101e99316811461007a5750600161007a565b6101cc600435602435604435606435600154600090600160a060020a0316858585856060610621806101fb833990810195909552505050600160a060020a039081166080830152851660a082015260c0810184905260e0810183905260405190819003610100019082f090506101f38160408051600160a060020a038381166000818152602081815290859020805473ffffffffffffffffffffffffffffffffffffffff191633908117909155909216835292517f53080a697c71dfd33ddffeb9808c0f9c892d7ad88289d9f2ef5ae05b1ce3406b9281900390910190a250565b60408051600160a060020a03929092168252519081900360200190f35b6060908152602090f35b9493505050505660606040819052600160075560a08061062183396101006040529051608051915160c05160e05160018054600160a060020a03199081169095179055600280548516909517909455600380549093169091179091556005556006805460ff191690911790556105af806100726000396000f3606060405236156100ae5760e060020a60003504630508ed9081146100b05780631ec7e345146100dd57806327e235e3146100e657806348c54b9d146100fe57806349ed2fa91461011157806354fd4d501461011a5780635aa6cf97146101235780636dca35da1461014a5780637a3a0e84146101715780637cec2e151461017a5780638da5cb5b1461018c578063c40bc6401461019e578063e796a6eb146101aa578063fc0c546a146101d1575b005b6100ae60043560243560443560643560015460009033600160a060020a0390811691161461052157610002565b6101e360055481565b6101e360043560086020526000908152604090205481565b6100ae60065460ff16156102c957610002565b6101e360005481565b6101e360075481565b6100ae60043560243560015460009033600160a060020a0390811691161461020057610002565b6100ae60043560243560443560015433600160a060020a0390811691161461050857610002565b6101e360045481565b6101ed600154600160a060020a031681565b6101ed600254600160a060020a031681565b6101e360065460ff1681565b6100ae60043560243560443560015433600160a060020a039081169116146104f857610002565b6101ed600354600160a060020a031681565b6060908152602090f35b600160a060020a03166060908152602090f35b80548390811461020f57610002565b60035460e060020a6370a0823102606090815230600160a060020a03908116606452909116906370a082319060849060209060248188876161da5a03f1156100025750506040515160065490935060ff161590506102c3576040805160035460025460e060020a63a9059cbb028352600160a060020a03908116600484015260248301869052925192169163a9059cbb9160448181019260209290919082900301816000876161da5a03f115610002575050505b50505050565b600154600080547f2451a899000000000000000000000000000000000000000000000000000000006060908152606491909152600160a060020a039290921691632451a899916084916020916024908290876161da5a03f1156100025750506040515190508015610350575033600160a060020a0316600090815260086020526040812054115b156103c1576040805160035433600160a060020a039081166000818152600860209081528682205460e060020a63a9059cbb028752600487019390935260248601929092529451929091169363a9059cbb93604481810194929183900301908290876161da5a03f115610002575050505b60408051600154600080547ff41e349400000000000000000000000000000000000000000000000000000000845260048401529251600160a060020a03919091169263f41e3494926024818101936020939092839003909101908290876161da5a03f115610002575050604051519050801561044c5750600254600160a060020a0390811633909116145b156104f6576040805160025460035460e060020a6370a0823102835230600160a060020a03908116600485015293519084169363a9059cbb9392169184916370a082319160248181019260209290919082900301816000876161da5a03f11561000257505060408051805160e060020a63a9059cbb02825260048201949094526024810193909352516044838101936020935082900301816000876161da5a03f115610002575050505b565b600054839081146102c357610002565b6000811161051557610002565b60009290925550600455565b80548590811461053057610002565b600554600160a060020a0386168352600860205260409092209183049182905560065460ff16156105a75760035460e060020a63a9059cbb026060908152600160a060020a038781166064526084859052919091169063a9059cbb9060a4906020906044816000876161da5a03f115610002575050505b50505050505056",
    address: "",
    generated_with: "2.0.6",
    contract_name: "WeiControllerFactory"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("WeiControllerFactory error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiControllerFactory error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiControllerFactory error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiControllerFactory error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.WeiControllerFactory = Contract;
  }

})();
