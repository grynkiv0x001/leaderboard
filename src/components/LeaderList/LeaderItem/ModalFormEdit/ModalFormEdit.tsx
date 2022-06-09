import React, { useState } from 'react';
// HOOKS
// import { useSelector } from 'react-redux';
// REDUX
// import leaderActions from '../../../../store/appStores/leaderStore/leaderAction';
// import getLeaders from '../../../../store/appStores/leaderStore/selector';
// ICONS
import { FiX } from 'react-icons/fi';
// SCSS
import '../../ModalFormCreate/ModalFormCreate.scss';

const ModalFormEdit = ({ setOpen }: any) => {
  // const users = useSelector(getLeaders);
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  // TODO: const createUser = () => {
  //   const arr = [...users];
  //
  //   arr.push({
  //     name: name,
  //     score: score,
  //   });
  //   leaderActions.setList(arr);
  //   setOpen(false);
  // };
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
        <button className="modal_button">
          {/* TODO: <button className="modal_button" onClick={createUser}>*/}
          Edit
        </button>
      </div>
    </div>
  );
};

export default ModalFormEdit;
