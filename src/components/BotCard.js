export function createBotCard(bot, onEnlist) {
  // Create card element
  const card = document.createElement('div');
  card.className = 'bot-card'; 
  const name = document.createElement('h3');
  name.textContent = bot.name;
  card.appendChild(name);
  const img = document.createElement('img');
  img.src = bot.avatar_url;
  img.alt = bot.name;
  card.appendChild(img);
  const health = document.createElement('p');
  health.textContent = `Health: ${bot.health}`;
  card.appendChild(health);
  const button = document.createElement('button');
  button.textContent = 'Enlist';
  button.onclick = () => onEnlist(bot);
  card.appendChild(button);

  return card;
}
