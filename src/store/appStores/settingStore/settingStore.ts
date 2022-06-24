import { IReducerSettings, IStoreSettings } from '../../../models/models';
import { SET_SORTING } from '../../../constant/TYPES';

const INITIAL_STATE: IStoreSettings = {
  sorting: 'score',
};

const settingStoreReducer = (state = INITIAL_STATE, action: IReducerSettings) => {
  switch (action.type) {
    case SET_SORTING:
      return {
        ...state,
        sorting: action.sorting,
      };
    default:
      return state;
  }
};

export default settingStoreReducer;
