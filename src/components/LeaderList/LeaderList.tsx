import React, { useState } from 'react';
// HOOKS
import { useSelector } from 'react-redux';
// REDUX
import getLeaders from '../../store/appStores/leaderStore/selector';
import leaderActions from '../../store/appStores/leaderStore/leaderAction';
// MODELS
import { User } from '../../models/models';
// COMPONENTS
import LeaderItem from './LeaderItem/LeaderItem';
import ModalFormCreate from './ModalFormCreate/ModalFormCreate';
// ICONS
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';
// SCSS
import './LeaderList.scss';

const LeaderList = () => {
  const [isOpen, setOpen] = useState(false);
  const users: Array<Array<User>> = useSelector(getLeaders);
  const [page, setPage] = useState(0);
  const user = users[page];
  const newDay = () => {
    leaderActions.loadLeaderBoard();
  };
  const sortByName = () => {
    const sorted = [...user].sort((a, b) => (a.name > b.name ? 1 : -1));
    const arr = users;
    arr.splice(page, 1, sorted);
    leaderActions.setList(arr);
  };
  return (
    <div className="leaderList">
      <div className="leaderList_panel">
        <h3>Leaders table for this region</h3>
        <div className="leaderList_box box">
          <AiOutlineDoubleLeft
            className={`box_lineLeft ${page !== 0 ? '' : 'none'}`}
            onClick={() => setPage(page - 1)}
          />
          <AiOutlineDoubleRight
            className={`box_lineRight ${page + 1 !== users.length ? '' : 'none'}`}
            onClick={() => setPage(page + 1)}
          />
          <button className="box_button-filter" onClick={sortByName}>
            Filter by name
          </button>
          <button className="box_button-newDay" onClick={newDay}>
            New day
          </button>
          <button className="box_button-newUser" onClick={() => setOpen(true)}>
            Add new user
          </button>
        </div>
      </div>
      <ul className="leaderList_list">
        {user?.map((user, index) => (
          <LeaderItem
            key={Math.random()}
            page={page}
            index={index}
            name={user.name}
            score={user.score}
          />
        ))}
      </ul>
      {isOpen && <ModalFormCreate setOpen={setOpen} page={page} />}
    </div>
  );
};

export default LeaderList;
