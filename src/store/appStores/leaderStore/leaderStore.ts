import { initialStore } from '../../../models/models';

const INITIAL_STATE: initialStore = {
  leaders: [],
};

const leaderStoreReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_LIST':
      return {
        ...state,
        // leaders: action.payload.leaders,
        leaders: [...state.leaders, ...action.leaders],
      };
    default:
      return state;
  }
};

export default leaderStoreReducer;
