import React from 'react';
import BotCollection from './BotCollection';
function BotsPage({ bots, onEnlist }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <BotCollection bots={bots} onEnlist={onEnlist} />
    </div>
  );
}
export default BotsPage;
