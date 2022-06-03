import React from 'react';
// COMPONENTS
import LeaderList from './components/LeaderList/LeaderList';
import HighestLeaders from './components/HighestLeaders/HighestLeaders';
// SCSS
import './App.scss';
import leaderActions from './store/appStores/leaderStore/leaderAction';

const App = () => {
  leaderActions.loadLeaderBoard();

  return (
    <div className="app">
      <h1>Leaderboard</h1>
      <HighestLeaders />
      <LeaderList />
    </div>
  );
};

export default App;
