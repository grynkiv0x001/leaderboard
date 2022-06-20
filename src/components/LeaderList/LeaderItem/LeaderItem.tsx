import React, { useState } from 'react';
// HOOKS
import { useSelector } from 'react-redux';
// REDUX
import getLeaders from '../../../store/appStores/leaderStore/selector';
// IMG
import img from '../../../img/avatar.svg';
// COMPONENTS
import ModalFormEdit from './ModalFormEdit/ModalFormEdit';
// ICONS
import { IoMdCreate } from 'react-icons/io';
// MODELS
import { Leader, User } from '../../../models/models';
// SCSS
import './LeaderItem.scss';

const LeaderItem = ({ index, name, score, page }: Leader) => {
  const [Open, setOpen] = useState(false);
  const users: Array<Array<User>> = useSelector(getLeaders);
  const userName = users[page][index].name;
  const userScore = users[page][index].score;
  return (
    <li className="leaderItem">
      <div className="leaderItem_container">
        <div className="leaderItem_box">
          <span className="leaderItem_span">{index + 1}</span>
          <img src={img} alt="avatar" className="leaderItem_img" />
          <span className="leaderItem_score">{score ? score : 0}</span>
          <span className="leaderItem_name">{name}</span>
        </div>
        <div onClick={() => setOpen(true)}>
          <IoMdCreate className="leaderItem_edit" />
        </div>
      </div>
      {Open && (
        <ModalFormEdit
          setOpen={setOpen}
          page={page}
          index={index}
          userName={userName}
          userScore={userScore}
        />
      )}
    </li>
  );
};

export default LeaderItem;
