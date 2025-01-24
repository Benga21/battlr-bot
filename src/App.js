import React, { useState, useEffect } from 'react';

const App = () => {
  const [myArmy, setMyArmy] = useState([]);
  const [availableBots, setAvailableBots] = useState([]);

  // Fetch bots from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched bots:', data);  // Debugging log to inspect fetched data
        setAvailableBots(data);  // Set the fetched bots in the state
      })
      .catch(error => console.error('Error fetching bots:', error));  // Error handling
  }, []);

  // Handle enlisting a bot to the army
  const handleEnlist = (bot) => {
    console.log('Enlisting bot:', bot);  // Debugging log before adding bot to the army
    setMyArmy(prevArmy => [...prevArmy, bot]);  // Add bot to the army
  };

  // Handle releasing a bot from the army
  const handleRelease = (bot) => {
    console.log('Releasing bot:', bot);  // Debugging log before removing bot from the army
    setMyArmy(prevArmy => prevArmy.filter(b => b !== bot));  // Remove bot from the army
  };

  return (
    <div>
      <h1>Bot Battlr</h1>

      {/* Display Available Bots */}
      <div>
        <h2>Available Bots</h2>
        {availableBots.length === 0 ? (
          <p>Loading bots...</p>  // Show loading message if no bots are available
        ) : (
          availableBots.map(bot => (
            <div key={bot.id}>
              <span>{bot.name}</span>  {/* Display bot name */}
              <button onClick={() => handleEnlist(bot)}>Enlist</button>  {/* Enlist button */}
            </div>
          ))
        )}
      </div>

      {/* Display Your Bot Army */}
      <div>
        <h2>Your Bot Army</h2>
        {myArmy.length === 0 ? (
          <p>Your army is empty. Enlist some bots!</p>  // Show message if army is empty
        ) : (
          myArmy.map(bot => (
            <div key={bot.id}>
              <span>{bot.name}</span>  {/* Display bot name */}
              <button onClick={() => handleRelease(bot)}>Release</button>  {/* Release button */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
