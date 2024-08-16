import React from 'react';
import './BotCard.css';
const BotCard = ({ bot, onEnlist }) => {
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
};
export default BotCard;
