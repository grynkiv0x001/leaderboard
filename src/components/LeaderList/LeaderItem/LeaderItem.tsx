import React from 'react';
// IMG
import img from '../../../img/avatar.svg';
import { IoMdCreate } from 'react-icons/io';
// SCSS
import './LeaderItem.scss';

const LeaderItem = ({ name, score }: any) => {
  console.log(name);
  console.log(score);
  return (
    <li className="leaderItem">
      <div className="leaderItem_container">
        <div className="leaderItem_img">
          <img src={img} alt="avatar" />
        </div>
        <div className="leaderItem_score">{score}</div>
        <div className="leaderItem_name">{name}</div>
        <div className="leaderItem_edit">
          <IoMdCreate />
        </div>
      </div>
    </li>
  );
};

export default LeaderItem;
