// src/components/YourBotArmy.js
import React from 'react';

const YourBotArmy = ({ bots, onRelease }) => (
  <div>
    {bots.map(bot => (
      <div key={bot.id}>
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <button onClick={() => onRelease(bot)}>Release</button>
      </div>
    ))}
  </div>
);

export default YourBotArmy;
