const player = {
  hunger: 100,
  sanity: 100,
  batteryCount: 5,
  foodCount: 0,
};

const batteryCountEl = document.querySelector('.battery .quantity');
const foodCountEl = document.querySelector('.food .quantity');
const sanityEl = document.querySelector('.sanity .quantity');
const hungerEl = document.querySelector('.hunger .quantity');

batteryCountEl.innerText = player.batteryCount;
foodCountEl.innerText = player.foodCount;
sanityEl.innerText = player.sanity;
hungerEl.innerText = player.hunger;
