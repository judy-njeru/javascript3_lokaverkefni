import * as actiontypes from '../actiontypes/tilbod';

export const fetchAhaTilbod = (ahatilbods) => {
  return {
    type: actiontypes.FETCH_AHA_TILBOD,
    ahatilbods: ahatilbods
  }
}

export const fetchHopkaupTilbod = (hopkauptilbods) => {
  return {
    type: actiontypes.FETCH_HOPKAUP_TILBOD,
    hopkauptilbods: hopkauptilbods
  }
}
