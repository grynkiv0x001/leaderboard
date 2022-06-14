import React, { useEffect } from 'react';
// HOOKS
import { useSelector } from 'react-redux';
// REDUX
import leaderActions from './store/appStores/leaderStore/leaderAction';
import getLeaders from './store/appStores/leaderStore/selector';
// COMPONENTS
import LeaderList from './components/LeaderList/LeaderList';
import HighestLeaders from './components/HighestLeaders/HighestLeaders';
// SCSS
import './App.scss';

const App = () => {
  const users = useSelector(getLeaders);

  useEffect(() => {
    leaderActions.loadLeaderBoard();
  }, [users]);

  return (
    <div className="app">
      <h1 className="app_heading">Leaderboard</h1>
      <HighestLeaders />
      <LeaderList />
    </div>
  );
};

export default App;
