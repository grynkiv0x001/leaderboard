import React, { useState } from 'react';
// HOOKS
import { useSelector } from 'react-redux';
// REDUX
import getLeaders from '../../store/appStores/leaderStore/selector';
import leaderActions from '../../store/appStores/leaderStore/leaderAction';
// COMPONENTS
import LeaderItem from './LeaderItem/LeaderItem';
import ModalFormCreate from './ModalFormCreate/ModalFormCreate';
// ICONS
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';
// SCSS
import './LeaderList.scss';
import { Users } from '../../models/models';

const LeaderList = () => {
  const [isOpen, setOpen] = useState(false);
  const users: Array<Users> = useSelector(getLeaders);
  // TODO: console.log(users);
  const newDay = () => {
    leaderActions.loadLeaderBoard();
  };
  return (
    <div className="leaderList">
      <div className="leaderList_panel">
        <h3>Leaders table for this region</h3>
        <div className="leaderList_box box">
          <AiOutlineDoubleLeft className="box_lineLeft" />
          <AiOutlineDoubleRight className="box_lineRight" />
          <button className="box_button1" onClick={newDay}>
            New day
          </button>
          <button className="box_button2" onClick={() => setOpen(true)}>
            Add new user
          </button>
        </div>
      </div>
      <ul className="leaderList_list">
        {users?.map((user, index) => (
          <LeaderItem key={Math.random()} index={index} name={user.name} score={user.score} />
        ))}
      </ul>
      {isOpen && <ModalFormCreate setOpen={setOpen} />}
    </div>
  );
};

export default LeaderList;
