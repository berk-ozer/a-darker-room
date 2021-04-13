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

setInterval(() => {
  if (player.hunger - 5 >= 0) {
    player.hunger -= 5;
    hungerEl.innerText = player.hunger;
  }
  if (player.sanity - 5 >= 0) {
    player.sanity -= 5;
    sanityEl.innerText = player.sanity;
  }
}, 500);