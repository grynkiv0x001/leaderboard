import React from 'react';
// REDUX
import leaderActions from './store/appStores/leaderStore/leaderAction';
// COMPONENTS
import LeaderList from './components/LeaderList/LeaderList';
import TopLeaders from './components/TopLeaders/TopLeaders';
// SCSS
import './App.scss';

const App = () => {
  leaderActions.loadLeaderBoard();
  return (
    <div className="app">
      <h1 className="app_heading">Leaderboard</h1>
      <TopLeaders />
      <LeaderList />
    </div>
  );
};

export default App;
