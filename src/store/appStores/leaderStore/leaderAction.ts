import store from '../../store';
import axios from 'axios';

const { dispatch } = store;

// axios.interceptors.request.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 500) {
//       axios.post('http://coding-test.cube19.io/frontend/v1/process-user');
//     }
//     return Promise.reject(error);
//   }
// );

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

  postUser: async (user: object) => {
    console.log(user);
    await axios
      .post('http://coding-test.cube19.io/frontend/v1/process-user', user)
      .then((response) => {
        console.log(response.data);
        // leaderActions.setList(newUser);
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
