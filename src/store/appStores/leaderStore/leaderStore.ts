import { IReducerLeaders, IStoreLeaders } from '../../../models/models';
import { ADD_LIST, ADD_USER, EDD_DIFFERENCE, EDIT_USER, SET_LIST } from '../../../constant/TYPES';

const INITIAL_STATE: IStoreLeaders = {
  leaders: [],
};

const leaderStoreReducer = (state = INITIAL_STATE, action: IReducerLeaders) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        leaders: [...state.leaders, action.leaders],
      };
    case SET_LIST:
      return {
        ...state,
        leaders: [...action.leaders],
      };
    case ADD_USER:
      return {
        ...state,
        leaders: [...state.leaders],
      };
    case EDIT_USER:
      return {
        ...state,
        leaders: [...action.leaders],
      };
    case EDD_DIFFERENCE:
      return {
        ...state,
        leaders: [...state.leaders],
      };
    default:
      return state;
  }
};

export default leaderStoreReducer;
