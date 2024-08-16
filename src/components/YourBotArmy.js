import React from 'react';
import './YourBotArmy.css';
const YourBotArmy = ({ bots, onRelease, onDelete }) => {
  return (
    <div className="your-bot-army-container">
      {bots.map(bot => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p><strong>Health:</strong> {bot.health}</p>
          <p><strong>Damage:</strong> {bot.damage}</p>
          <p><strong>Armor:</strong> {bot.armor}</p>
          <p><strong>Class:</strong> {bot.bot_class}</p>
          <div>
            <button onClick={() => onRelease(bot)}>Release</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default YourBotArmy;
