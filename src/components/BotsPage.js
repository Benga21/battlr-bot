import React from 'react';
import BotCollection from './BotCollection';
import './BotsPage.css';

const BotsPage = ({ bots, onEnlist }) => {
  return (
    <div className="bots-page">
      <h2>Available Bots</h2>
      <BotCollection bots={bots} onEnlist={onEnlist} />
    </div>
  );
};
export default BotsPage;
