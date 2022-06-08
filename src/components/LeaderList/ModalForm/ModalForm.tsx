import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './ModalForm.scss';
import leaderActions from '../../../store/appStores/leaderStore/leaderAction';

const ModalForm = ({ setIsOpen }: any) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const createUser = () => {
    const newUser = { username: name, score };
    leaderActions.postUser(newUser);
    setIsOpen(false);
  };
  return (
    <div className="modal">
      <div className="modal_container">
        <h2 className="modal_heading">Add new user</h2>
        <button className="modal_closeBtn" onClick={() => setIsOpen(false)}>
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
        <button className="modal_button" onClick={createUser}>
          Create
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
