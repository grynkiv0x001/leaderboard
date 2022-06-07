import store from '../../store';
import axios from 'axios';

const { dispatch } = store;

const leaderActions = {
  loadLeaderBoard: async () => {
    {
      /* TODO: const sortByScore = (arr: any) => {
          const newUsers = arr;
            newUsers.sort((a, b) => (a.score < b.score ? 1 : -1));
            return newUsers;
          };*/
    }
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
