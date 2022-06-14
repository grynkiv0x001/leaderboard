import React from 'react';
// IMG
import img from '../../../img/avatar.svg';
// ICONS
import { IoMdCreate } from 'react-icons/io';
// MODELS
import { leaderItem } from '../../../models/models';
// SCSS
import './LeaderItem.scss';

const LeaderItem = ({ index, name, score }: leaderItem) => {
  return (
    <li className="leaderItem">
      <div className="leaderItem_container">
        <div className="leaderItem_box">
          <span className="leaderItem_span">{index + 1}</span>
          <img src={img} alt="avatar" className="leaderItem_img" />
          <span className="leaderItem_score">{score ? score : 0}</span>
          <span className="leaderItem_name">{name}</span>
        </div>
        <div className="leaderItem_edit">
          <IoMdCreate />
        </div>
      </div>
    </li>
  );
};

export default LeaderItem;
