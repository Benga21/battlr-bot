import React from 'react';
import BotCollection from './BotCollection';

function BotsPage(props) {
  return (
    <div>
      <h2>Available Bots</h2>
      <BotCollection bots={props.bots} onEnlist={props.onEnlist} />
    </div>
  );
}

export default BotsPage;
