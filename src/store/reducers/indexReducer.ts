import { combineReducers } from 'redux';

import leaderStoreReducer from '../appStores/leaderStore/leaderStore';
import settingStoreReducer from '../appStores/settingStore/settingStore';

export default combineReducers({
  leaderStore: leaderStoreReducer,
  settingStore: settingStoreReducer,
});
