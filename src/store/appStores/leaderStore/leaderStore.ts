import { IStore, IReducer } from '../../../models/models';

const INITIAL_STATE: IStore = {
  leaders: [],
};

const leaderStoreReducer = (state = INITIAL_STATE, action: IReducer) => {
  switch (action.type) {
    case 'SET_LIST':
      return {
        ...state,
        leaders: action.leaders,
        // TODO: leaders: [...state.leaders, ...action.leaders],
      };
    default:
      return state;
  }
};

export default leaderStoreReducer;
