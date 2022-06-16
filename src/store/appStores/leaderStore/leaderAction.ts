import store from '../../store';
import axios from 'axios';
import { API_URL } from '../../../constant/API';
const { dispatch } = store;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 500) {
      axios.get(API_URL).then((data) => {
        leaderActions.setList(data.data);
      });
    }
    return Promise.reject(error);
  }
);

const leaderActions = {
  loadLeaderBoard: async () => {
    await axios.get(API_URL).then((data) => {
      leaderActions.setList(data.data);
    });
  },
  setList: async (data: Array<object> | null) => {
    dispatch({
      type: 'SET_LIST',
      leaders: data,
    });
  },
};

export default leaderActions;
