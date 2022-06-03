import React from 'react';
// SCSS
import './LeaderList.scss';
import LeaderItem from './LeaderItem/LeaderItem';
import { useSelector } from 'react-redux';
import getLeaders from '../../store/appStores/leaderStore/selector';

const LeaderList = () => {
  const users = useSelector(getLeaders);

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
        {users?.map((user: any) => (
          <LeaderItem key={Math.random()} name={user.name} score={user.score} />
        ))}
      </ul>
    </div>
  );
};

export default LeaderList;
