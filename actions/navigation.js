import * as actiontypes from '../actiontypes/navigation';

export const ShowTilbods= (showtilbod) => {
  console.log(showtilbod);
  return {
    type: actiontypes.SHOW_TILBODS,
    showtilbod: showtilbod
  }
}
