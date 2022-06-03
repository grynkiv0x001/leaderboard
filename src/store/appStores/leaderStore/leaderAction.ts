import store from '../../store';
import axios from 'axios';

const { dispatch } = store;

const leaderActions = {
  loadLeaderBoard: async () => {
    const sortByScore = (arr: any) => {
      const newUsers = arr;
      newUsers.sort((a: any, b: any) => (a.score < b.score ? 1 : -1));
      return newUsers;
    };
    await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state').then((data: any) => {
      const users = sortByScore(data.data);
      leaderActions.setList(users);
    });
  },
  // postUser: async (user) => {
  //   await axios.post('')
  // },
  setList: async (data: any) => {
    dispatch({
      type: 'SET_LIST',
      leaders: data,
    });
  },
};

export default leaderActions;
