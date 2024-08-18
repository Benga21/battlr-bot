import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [myArmy, setMyArmy] = useState([]);
  const [availableBots, setAvailableBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setAvailableBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const handleEnlist = (bot) => {
    if (!myArmy.includes(bot)) {
      setMyArmy([...myArmy, bot]);
    }
  };

  const handleRelease = (bot) => {
    setMyArmy(myArmy.filter(b => b !== bot));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection bots={availableBots} onEnlist={handleEnlist} />
      <YourBotArmy bots={myArmy} onRelease={handleRelease} />
    </div>
  );
};

export default App;
