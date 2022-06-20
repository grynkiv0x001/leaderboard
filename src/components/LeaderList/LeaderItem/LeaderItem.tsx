import React, { useState } from 'react';
// IMG
import img from '../../../img/avatar.svg';
// COMPONENTS
import ModalFormEdit from './ModalFormEdit/ModalFormEdit';
// ICONS
import { IoMdCreate } from 'react-icons/io';
// MODELS
import { Leader } from '../../../models/models';
// SCSS
import './LeaderItem.scss';

const LeaderItem = ({ index, page, user }: Leader) => {
  const [Open, setOpen] = useState(false);
  return (
    <li className="leaderItem">
      <div className="leaderItem_container">
        <div className="leaderItem_box">
          <span className="leaderItem_span">{index + 1}</span>
          <img src={img} alt="avatar" className="leaderItem_img" />
          <span className="leaderItem_score">{user.score ? user.score : 0}</span>
          <span className="leaderItem_name">{user.name}</span>
        </div>
        <div onClick={() => setOpen(true)}>
          <IoMdCreate className="leaderItem_edit" />
        </div>
      </div>
      {Open && <ModalFormEdit setOpen={setOpen} page={page} index={index} user={user} />}
    </li>
  );
};

export default LeaderItem;
