import React from 'react';
// HOOKS
import { useSelector } from 'react-redux';
// REDUX
import getLeaders from '../../store/appStores/leaderStore/selectorLeaders';
// MODELS
import { User } from '../../models/models';
// IMG
import avatar from '../../img/avatar.svg';
import img from '../../img/business-people.svg';
// SCSS
import './TopLeaders.scss';

const TopLeaders = () => {
  const users: Array<Array<User>> = useSelector(getLeaders);
  const allUsers = users.flat(1);
  allUsers.sort((el) => (el.score ? 1 : -1));
  allUsers.sort((a, b) => (a.score < b.score ? 1 : -1));
  const leader = allUsers.slice(0, 4);
  return (
    <div className="leaders">
      <div className="leaders_container">
        <div className="leaders_box">
          <h3 className="leaders_heading">All time Highest Scorers</h3>
          <div>
            <ul className="leaders_list list">
              {leader?.map((user) => (
                <li key={Math.random()} className="list_item">
                  <div className="list_item-avatar">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div className="list_item-box">
                    <span className="list_item-name">{user.name}:</span>
                    <span className="list_item-score">{user.score}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="leaders_img">
          <img src={img} alt="business people" />
        </div>
      </div>
    </div>
  );
};

export default TopLeaders;
