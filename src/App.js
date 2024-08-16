import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import { fetchBots, deleteBot } from './services/api';
import './App.css';

const App = () => {
  const [myArmy, setMyArmy] = useState([]);
  const [availableBots, setAvailableBots] = useState([]);

  useEffect(() => {
    const getBots = async () => {
      try {
        const data = await fetchBots();
        setAvailableBots(data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    getBots();
  }, []);

  const handleEnlist = (bot) => {
    if (!myArmy.find(b => b.id === bot.id)) {
      setMyArmy([...myArmy, bot]);
    }
  };

  const handleRelease = (bot) => {
    setMyArmy(myArmy.filter(b => b.id !== bot.id));
  };

  const handleDischarge = async (bot) => {
    try {
      await deleteBot(bot.id);
      setMyArmy(myArmy.filter(b => b.id !== bot.id));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection bots={availableBots} onEnlist={handleEnlist} />
      <YourBotArmy bots={myArmy} onRelease={handleRelease} onDischarge={handleDischarge} />
    </div>
  );
};

export default App;

      