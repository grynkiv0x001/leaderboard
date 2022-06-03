const INITIAL_STATE = {
  leaders: [],
};

const leaderStoreReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_LIST':
      return {
        ...state,
        leaders: action.leaders,
      };
    default:
      return state;
  }
};

export default leaderStoreReducer;
