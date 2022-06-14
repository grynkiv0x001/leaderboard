import { combineReducers } from 'redux';

import leaderStoreReducer from '../appStores/leaderStore/leaderStore';

export default combineReducers({
  leaderStore: leaderStoreReducer,
});
