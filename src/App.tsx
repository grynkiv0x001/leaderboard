import React from 'react';
// REDUX
import leaderActions from './store/appStores/leaderStore/leaderAction';
// COMPONENTS
import LeaderList from './components/LeaderList/LeaderList';
import HighestLeaders from './components/HighestLeaders/HighestLeaders';
// SCSS
import './App.scss';

const App = () => {
  leaderActions.loadLeaderBoard();
  return (
    <div className="app">
      <h1 className="app_heading">Leaderboard</h1>
      <HighestLeaders />
      <LeaderList />
    </div>
  );
};

export default App;
