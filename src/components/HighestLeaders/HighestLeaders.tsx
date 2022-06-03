import React from 'react';
// IMG
import avatar from '../../img/avatar.svg';
import img from '../../img/business-people.svg';
// SCSS
import './HighestLeaders.scss';

const users = [
  {
    name: 'Nick',
    score: 20,
  },
  {
    name: 'Alan',
    score: 11,
  },
  {
    name: 'Chris',
    score: 8,
  },
  {
    name: 'Chris',
    score: 2,
  },
  {
    name: 'Chris',
    score: 2,
  },
];

const HighestLeaders = () => {
  return (
    <div className="leaders">
      <div className="leaders_container">
        <div className="leaders_box">
          <h3>All time Highest Scorers</h3>
          <div>
            <ul className="leaders_list list">
              {users?.map((user: any) => (
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

export default HighestLeaders;
