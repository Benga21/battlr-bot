import React from 'react';
function YourBotArmy(props) {
  return (
    <div>
      {props.bots.map(function(bot) {
        return (
          <div key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button onClick={function() { props.onRelease(bot); }}>Release</button>
          </div>
        );
      })}
    </div>
  );
}
export default YourBotArmy;
