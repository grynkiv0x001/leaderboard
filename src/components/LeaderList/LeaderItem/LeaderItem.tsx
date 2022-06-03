import React from 'react';
// SCSS
import './LeaderItem.scss';

const LeaderItem = ({ name, score }: any) => {
  console.log(name);
  console.log(score);
  return (
    <li className="leaderItem">
      <div>{name}</div>
      <div>{score}</div>
    </li>
  );
};

export default LeaderItem;
