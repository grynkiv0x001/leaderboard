import store from '../../store';
import axios from 'axios';
import { API_URL } from '../../../constant/API';
import { User } from '../../../models/models';
import { ADD_LIST, ADD_USER, EDD_DIFFERENCE, EDIT_USER, SET_LIST } from '../../../constant/TYPES';
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
        users.map((user) => {
          if (user.score == undefined) {
            user.score = 0;
          }
        });
        leaderActions.addList(users);
      });
    }
    return Promise.reject(error);
  }
);

const leaderActions = {
  loadLeaderBoard: async () => {
    await axios.get(API_URL).then((data) => {
      const users = sortByScore(data.data);
      users.map((user) => {
        if (user.score == undefined) {
          user.score = 0;
        }
      });
      leaderActions.addList(users);
    });
  },
  addList: async (data: Array<object>) => {
    dispatch({
      type: ADD_LIST,
      leaders: data,
    });
  },
  setList: async (page: Array<object>) => {
    dispatch({
      type: SET_LIST,
      leaders: page,
    });
  },
  addUser: async (user: Array<object>) => {
    dispatch({
      type: ADD_USER,
      leaders: user,
    });
  },
  editUser: async (user: Array<object>) => {
    dispatch({
      type: EDIT_USER,
      leaders: user,
    });
  },
  addDifference: async (arr: Array<object>) => {
    dispatch({
      type: EDD_DIFFERENCE,
      leaders: arr,
    });
  },
};

export default leaderActions;
