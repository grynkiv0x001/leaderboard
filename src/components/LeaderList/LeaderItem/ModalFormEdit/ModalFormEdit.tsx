import React, { useState } from 'react';
// HOOKS
import { useSelector } from 'react-redux';
// REDUX
import getLeaders from '../../../../store/appStores/leaderStore/selectorLeaders';
import getSettings from '../../../../store/appStores/settingStore/selectorSettings';
import leaderActions from '../../../../store/appStores/leaderStore/leaderAction';
// ICONS
import { FiX } from 'react-icons/fi';
// MODELS
import { IModalFormEdit, User } from '../../../../models/models';
// SCSS
import '../../ModalFormCreate/ModalFormCreate.scss';

const ModalFormEdit = ({ setOpen, user, index, page }: IModalFormEdit) => {
  const users: Array<Array<User>> = useSelector(getLeaders);
  const sorting = useSelector(getSettings);
  const [name, setName] = useState(user.name);
  const [score, setScore] = useState(user.score);
  const editUser = () => {
    const newUser = { name: name, score: score };
    const arr = users;
    arr[page].splice(index, 1, newUser);
    if (sorting === 'name') {
      arr[page].sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      arr[page].sort((a, b) => (a.score < b.score ? 1 : -1));
    }
    leaderActions.editUser(arr);
    setOpen(false);
  };
  return (
    <div className="modal">
      <div className="modal_container">
        <h2 className="modal_heading">Edit user</h2>
        <button className="modal_closeBtn" onClick={() => setOpen(false)}>
          <FiX />
        </button>
        <div className="modal_box box">
          <input
            type="text"
            className="box_input"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="box_input"
            placeholder="Enter score"
            value={score}
            onChange={(e) => setScore(e.target.valueAsNumber)}
          />
        </div>
        <button className="modal_button" onClick={() => editUser()}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ModalFormEdit;
