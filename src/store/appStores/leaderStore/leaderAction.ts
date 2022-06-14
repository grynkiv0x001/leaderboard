import store from '../../store';
import axios from 'axios';

const { dispatch } = store;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 500) {
      axios.get('http://coding-test.cube19.io/frontend/v1/starting-state').then((data) => {
        leaderActions.setList(data.data);
      });
    }
    return Promise.reject(error);
  }
);

const leaderActions = {
  loadLeaderBoard: async () => {
    await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state').then((data) => {
      leaderActions.setList(data.data);
    });
  },
  // TODO: postUser: async (user) => {
  //   await axios.post('')
  // },
  setList: async (data: Array<object>) => {
    dispatch({
      type: 'SET_LIST',
      leaders: data,
    });
  },
};

export default leaderActions;
