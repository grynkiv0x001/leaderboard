import React, { useEffect, useState } from 'react';
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
  const users: Array<User> = useSelector(getLeaders);
  const [data, setData] = useState(users);
  console.log(users);
  useEffect(() => {
    if (users) {
      setData(users);
    }
  }, [users]);
  const newDay = () => {
    leaderActions.loadLeaderBoard();
  };
  const sortByName = () => {
    const sorted = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
    setData(sorted);
    leaderActions.setList(sorted);
  };
  return (
    <div className="leaderList">
      <div className="leaderList_panel">
        <h3>Leaders table for this region</h3>
        <div className="leaderList_box box">
          <AiOutlineDoubleLeft className="box_lineLeft" />
          <AiOutlineDoubleRight className="box_lineRight" />
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
        {data?.map((user, index) => (
          <LeaderItem key={Math.random()} index={index} name={user.name} score={user.score} />
        ))}
      </ul>
      {isOpen && <ModalFormCreate setOpen={setOpen} />}
    </div>
  );
};

export default LeaderList;
