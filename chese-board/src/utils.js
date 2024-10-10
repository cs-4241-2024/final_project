const getToken = () => {
  let user = localStorage.getItem("user")
  if (user) {
    return JSON.parse(user).token
  }
}

const deckGroup1 = [];
for (let i = 1; i <= 14; i++) {
  deckGroup1.push(require(`./assets/images/decks/1-${i}.png`));
}

const deckGroup2 = [];
for (let i = 1; i <= 13; i++) {
  deckGroup2.push(require(`./assets/images/decks/2-${i}.png`));
}

// Group 3 (13 images)
const deckGroup3 = [];
for (let i = 1; i <= 13; i++) {
  deckGroup3.push(require(`./assets/images/decks/3-${i}.png`));
}

// Group 4 (12 images)
const deckGroup4 = [];
for (let i = 1; i <= 12; i++) {
  deckGroup4.push(require(`./assets/images/decks/4-${i}.png`));
}

// Group 5 (8 images)
const deckGroup5 = [];
for (let i = 1; i <= 8; i++) {
  deckGroup5.push(require(`./assets/images/decks/5-${i}.png`));
}

const deckData = [
  { title: 'Deck1', decks: deckGroup1 },
  { title: 'Deck2', decks: deckGroup2 },
  { title: 'Deck3', decks: deckGroup3 },
  { title: 'Deck4', decks: deckGroup4 },
  { title: 'Deck5', decks: deckGroup5 },
]

const strategems = []
for (let i = 0; i < 10; i++) {
  strategems.push({
    id: i,
    url: require(`./assets/images/stratagems/${i + 1}.webp`)
  })
}

const cheseboardGrids = []

for (let i = 0; i < 4; i++) {
  const item = []
  for (let j = 0; j < 7; j++) {
    item.push(j)
  }
  cheseboardGrids.push(item);
}

export {
  getToken,
  deckData,
  strategems,
  cheseboardGrids
}


