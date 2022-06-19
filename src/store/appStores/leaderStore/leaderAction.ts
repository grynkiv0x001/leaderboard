import store from '../../store';
import axios from 'axios';
import { API_URL } from '../../../constant/API';
import { User } from '../../../models/models';
const { dispatch } = store;

const sortByScore = (arr: Array<User>) => {
  arr.sort((el) => (el.score ? 1 : -1));
  arr.sort((a, b) => (a.score < b.score ? 1 : -1));
  return arr;
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 500) {
      axios.get(API_URL).then((data) => {
        const users = sortByScore(data.data);
        leaderActions.setList(users);
      });
    }
    return Promise.reject(error);
  }
);

const leaderActions = {
  loadLeaderBoard: async () => {
    await axios.get(API_URL).then((data) => {
      const users = sortByScore(data.data);
      leaderActions.setList(users);
    });
  },
  setList: async (data: Array<object>) => {
    dispatch({
      type: 'SET_LIST',
      leaders: data,
    });
  },
};

export default leaderActions;
