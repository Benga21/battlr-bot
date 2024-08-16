import React from 'react';

const BotCollection = ({ bots, onEnlist }) => {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>{bot.catchphrase}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => onEnlist(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
