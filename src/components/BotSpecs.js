import React from 'react';

const BotSpecs = ({ bot, onEnlist }) => (
  <div>
    <h3>{bot.name}</h3>
    <img src={bot.avatar_url} alt={bot.name} />
    <p>Health: {bot.health}</p>
    <p>Damage: {bot.damage}</p>
    <p>Armor: {bot.armor}</p>
    <button onClick={() => onEnlist(bot)}>Enlist</button>
  </div>
);

export default BotSpecs;
