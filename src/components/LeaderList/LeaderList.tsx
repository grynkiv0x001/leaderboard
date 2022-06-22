import React, { useState } from 'react';
// HOOKS
import { useSelector } from 'react-redux';
// REDUX
import getLeaders from '../../store/appStores/leaderStore/selector';
import leaderActions from '../../store/appStores/leaderStore/leaderAction';
// MODELS
import { User } from '../../models/models';
// COMPONENTS
import LeaderItem from './LeaderItem/LeaderItem';
import ModalFormCreate from './ModalFormCreate/ModalFormCreate';
// ICONS
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { BsCalendarPlus } from 'react-icons/bs';
import { BsSortAlphaUp } from 'react-icons/bs';

// SCSS
import './LeaderList.scss';

const LeaderList = () => {
  const [isOpen, setOpen] = useState(false);
  const [showStatistic, setShowStatistic] = useState(false);
  const users: Array<Array<User>> = useSelector(getLeaders);
  const [page, setPage] = useState(0);
  const currentUser = users[page];
  const getDifference = (array1: Array<User>, array2: Array<User>) => {
    const newArr = [];
    for (let i = 0; i < array1.length; i++) {
      newArr.push(array1[i].score - array2[i].score);
    }
    return newArr;
  };
  const newDay = () => {
    const lastDay = users[users.length - 1];
    const previousDay = users[users.length - 2];
    const sortedLastDay = [...lastDay].sort((a, b) => (a.name > b.name ? 1 : -1));
    const sortedPreviousDay = [...previousDay].sort((a, b) => (a.name > b.name ? 1 : -1));
    const different = getDifference(sortedPreviousDay, sortedLastDay);
    const newArr: Array<User> = [];
    lastDay.map((item, index) => newArr.push({ ...item, diff: different[index] }));
    users.splice(users.length - 1, 1, newArr);
    leaderActions.addDifference(newArr);
    leaderActions.loadLeaderBoard();
    setShowStatistic(true);
  };
  const sortByName = () => {
    const sorted = [...currentUser].sort((a, b) => (a.name > b.name ? 1 : -1));
    const arr = users;
    arr.splice(page, 1, sorted);
    leaderActions.setList(arr);
  };
  return (
    <div className="leaderList">
      <div className="leaderList_panel">
        <h3 className="leaderList_heading">Leaders table for this region</h3>
        <div className="leaderList_box box">
          <AiOutlineDoubleLeft
            className={`box_lineLeft ${page !== 0 ? '' : 'none'}`}
            onClick={() => setPage(page - 1)}
          />
          <AiOutlineDoubleRight
            className={`box_lineRight ${page + 1 !== users.length ? '' : 'none'}`}
            onClick={() => setPage(page + 1)}
          />
          <button className="box_button-filter" onClick={sortByName}>
            <span className="box_button-span">Filter by name</span>
            <span className="box_button-icon">
              <BsSortAlphaUp />
            </span>
          </button>
          <button className="box_button-newDay" onClick={newDay}>
            <span className="box_button-span">New day</span>
            <span className="box_button-icon">
              <BsCalendarPlus />
            </span>
          </button>
          <button className="box_button-newUser" onClick={() => setOpen(true)}>
            <span className="box_button-span">Add new user</span>
            <span className="box_button-icon">
              <BsFillPersonPlusFill />
            </span>
          </button>
        </div>
      </div>
      <ul className="leaderList_list">
        {currentUser?.map((user, index) => (
          <LeaderItem
            key={Math.random()}
            page={page}
            user={user}
            index={index}
            showStatistic={showStatistic}
          />
        ))}
      </ul>
      {isOpen && <ModalFormCreate setOpen={setOpen} page={page} />}
    </div>
  );
};

export default LeaderList;
