import React from 'react';
// HOOKS
import { useSelector } from 'react-redux';
// REDUX
import getLeaders from '../../store/appStores/leaderStore/selector';
// COMPONENTS
import LeaderItem from './LeaderItem/LeaderItem';
// SCSS
import './LeaderList.scss';

const LeaderList = () => {
  const users = useSelector(getLeaders);
  console.log(users);

  return (
    <div className="leaderList">
      <div className="leaderList_panel">
        <h3>Leaders table for this region</h3>
        <div className="leaderList_box box">
          <button className="box_button1">New day</button>
          <button className="box_button2">Add new user</button>
        </div>
      </div>
      <ul className="leaderList_list">
        {users?.map((user: any, index: number) => (
          <LeaderItem key={Math.random()} index={index} name={user.name} score={user.score} />
        ))}
      </ul>
    </div>
  );
};

export default LeaderList;
