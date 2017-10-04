import * as actiontypes from '../actiontypes/tilbod';
import * as navactiontypes from '../actiontypes/navigation';

const initialiseTilbodReducer = {
  ahatilbods: [],
  hopkauptilbods: [],
  showtilbod:""
}

export default function tilbod(state=initialiseTilbodReducer, action){
  console.log(action);
  switch(action.type){
    case actiontypes.FETCH_AHA_TILBOD:
      return {...state, ahatilbods: state.ahatilbods.concat(action.ahatilbods) };
    case actiontypes.FETCH_HOPKAUP_TILBOD:
      return {...state, hopkauptilbods: state.hopkauptilbods.concat(action.hopkauptilbods)};
     case navactiontypes.SHOW_TILBODS:
       return {...state, showtilbod:action.showtilbod};
     default:
      return state;
  }
}
