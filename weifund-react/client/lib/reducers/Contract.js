import * as WeiFundContracts from '../contracts/sol-js/index';
import WeiFundContractsDetails from '../contracts/compiled/contracts.json!'

// Initial PROVIDERS state variables

const DEFAULT_CONTRACT_STATE = {
  contractsLoaded : undefined,
  contractsError : undefined,
  WeiFundContracts : {
    contracts : WeiFundContracts,
    details : WeiFundContractsDetails
  }
};


export default function CONTRACT(state = DEFAULT_CONTRACT_STATE, action){
  switch(action.type){
    case 'CONTRACT_PROVIDER_REQUEST':
      return {
        ...state,
        contractsLoaded : undefined,
        contractsError : undefined
      };
    case 'CONTRACT_PROVIDER_SUCCESS':
      return {
        ...state,
        contractsLoaded : action.result,
        contractsError : undefined
      };
    case 'CONTRACT_PROVIDER_FAILURE':
      return {
        ...state,
        contractsLoaded : undefined,
        contractsError : action.error
      };
    default:
      return state;
  }
}
