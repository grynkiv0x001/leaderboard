import { IReducer, IStore } from '../../../models/models';

const INITIAL_STATE: IStore = {
  leaders: [],
};

const leaderStoreReducer = (state = INITIAL_STATE, action: IReducer) => {
  switch (action.type) {
    case 'SET_LIST':
      return {
        ...state,
        // leaders: action.leaders,
        leaders: [...state.leaders, action.leaders],
      };
    default:
      return state;
  }
};

export default leaderStoreReducer;
