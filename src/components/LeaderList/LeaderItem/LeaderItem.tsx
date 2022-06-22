import React, { useState } from 'react';
// IMG
import img from '../../../img/avatar.svg';
// COMPONENTS
import ModalFormEdit from './ModalFormEdit/ModalFormEdit';
// ICONS
import { IoMdCreate } from 'react-icons/io';
import { GoTriangleDown, GoTriangleUp, GoTriangleRight } from 'react-icons/go';
// MODELS
import { Leader } from '../../../models/models';
// SCSS
import './LeaderItem.scss';

const LeaderItem = ({ index, page, user, showStatistic }: Leader) => {
  const [Open, setOpen] = useState(false);

  const { score, name, diff } = user;

  return (
    <li className="leaderItem">
      <div className="leaderItem_container">
        <div className="leaderItem_box">
          <span className="leaderItem_span">{index + 1}</span>
          <img src={img} alt="avatar" className="leaderItem_img" />
          <span className="leaderItem_score">{score}</span>
          <span className="leaderItem_name">{name}</span>
        </div>
        {showStatistic && (diff || diff === 0) && (
          <div className="leaderItem_statistic statistic">
            {diff > 0 && (
              <div className="statistic_up">
                <GoTriangleUp className="statistic_arrow" />
                <span className="statistic_span">{`${diff} places`}</span>
              </div>
            )}
            {diff == 0 && (
              <div className="statistic_right">
                <GoTriangleRight className="statistic_arrow" />
                <span className="statistic_span">No change</span>
              </div>
            )}
            {diff < 0 && (
              <div className="statistic_down">
                <GoTriangleDown className="statistic_arrow" />
                <span className="statistic_span">{`${diff} places`}</span>
              </div>
            )}
          </div>
        )}
        <div onClick={() => setOpen(true)}>
          <IoMdCreate className="leaderItem_edit" />
        </div>
      </div>
      {Open && <ModalFormEdit setOpen={setOpen} page={page} index={index} user={user} />}
    </li>
  );
};

export default LeaderItem;
