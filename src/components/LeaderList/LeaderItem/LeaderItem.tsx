import React, { useState } from 'react';
// IMG
import img from '../../../img/avatar.svg';
// COMPONENTS
import ModalFormEdit from './ModalFormEdit/ModalFormEdit';
// ICONS
import { IoMdCreate } from 'react-icons/io';
// MODELS
import { leaderItem } from '../../../models/models';
// SCSS
import './LeaderItem.scss';

const LeaderItem = ({ index, name, score }: leaderItem) => {
  const [Open, setOpen] = useState(false);
  return (
    <li className="leaderItem">
      <div className="leaderItem_container">
        <div className="leaderItem_box">
          <span className="leaderItem_span">{index + 1}</span>
          <img src={img} alt="avatar" className="leaderItem_img" />
          <span className="leaderItem_score">{score ? score : 0}</span>
          <span className="leaderItem_name">{name}</span>
        </div>
        <div>
          <IoMdCreate className="leaderItem_edit" onClick={() => setOpen(true)} />
        </div>
      </div>
      {Open && <ModalFormEdit setOpen={setOpen} />}
    </li>
  );
};

export default LeaderItem;
