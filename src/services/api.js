const API_URL = 'http://localhost:8001/bots';

export async function fetchBots() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}
