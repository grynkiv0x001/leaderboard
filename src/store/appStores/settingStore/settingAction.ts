import store from '../../store';
const { dispatch } = store;
import { SET_SORTING } from '../../../constant/TYPES';

const settingActions = {
  setSorting: async (data: string) => {
    dispatch({
      type: SET_SORTING,
      sorting: data,
    });
  },
};

export default settingActions;
