import { createSelector } from 'reselect';

const getSettings = createSelector([(state) => state.settingStore.sorting], (data) => data);

export default getSettings;
