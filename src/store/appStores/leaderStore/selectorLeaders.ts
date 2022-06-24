import { createSelector } from 'reselect';

const getLeaders = createSelector([(state) => state.leaderStore.leaders], (data) => data);

export default getLeaders;
