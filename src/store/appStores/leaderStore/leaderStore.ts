import { IReducer, IStore } from '../../../models/models';

const INITIAL_STATE: IStore = {
  leaders: [],
};

const leaderStoreReducer = (state = INITIAL_STATE, action: IReducer) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        leaders: [...state.leaders, action.leaders],
      };
    case 'SET_LIST':
      return {
        ...state,
        leaders: [...action.leaders],
      };
    case 'ADD_USER':
      return {
        ...state,
        leaders: [...state.leaders],
      };
    case 'EDIT_USER':
      return {
        ...state,
        // leaders: [...state.leaders, ...action.leaders],
        leaders: [...action.leaders],
      };
    default:
      return state;
  }
};

export default leaderStoreReducer;
