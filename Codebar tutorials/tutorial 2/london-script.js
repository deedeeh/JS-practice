// used in london.html
var london = {
  name: 'London',
  population: 8308369,
  tallestBuilding: {
    name: 'Shard',
    height: '310m'
  },
  numberOfUniversities: 43,
  averageRent: 1106,
  dailyTubePassengerJourney: 3500000,
  olympics: [1908, 1948, 2012],
  updatePopulation: function(newPopulation) {
    this.population = newPopulation;
  }
};

function displayName() {
  const cityName = document.createElement('p');
  const content = document.createTextNode('City: ' + london.name);
  cityName.appendChild(content);
  document.body.appendChild(cityName);
}

function displayPopulation() {
  const population = document.createElement('p');
  const content = document.createTextNode('Population: ' + london.population);
  population.appendChild(content);
  document.body.appendChild(population);
}

function displayTallestBuilding() {
  const tallestBuilding = document.createElement('p');
  const content = document.createTextNode('Tallest building: ' + london.tallestBuilding.name + ', ' + london.tallestBuilding.height);
  tallestBuilding.appendChild(content);
  document.body.appendChild(tallestBuilding);
}

function displayUniversities() {
  const numOfUniversities = document.createElement('p');
  const content = document.createTextNode('Number of universities: ' + london.numberOfUniversities);
  numOfUniversities.appendChild(content);
  document.body.appendChild(numOfUniversities);
}

function displayAverageRent() {
  const averageRent = document.createElement('p');
  const content = document.createTextNode('Average rent: ' + london.averageRent);
  averageRent.appendChild(content);
  document.body.appendChild(averageRent);
}

function displayTubeJouney() {
  const tubePassengerJourney = document.createElement('p');
  const content = document.createTextNode('Daily tube passenger journey: ' + london.dailyTubePassengerJourney);
  tubePassengerJourney.appendChild(content);
  document.body.appendChild(tubePassengerJourney);
}

function displayOlympics() {
  const olympics = document.createElement('p');
  const content = document.createTextNode('Olympics: ' + london.olympics[0] + ', ' + london.olympics[1] + ', ' + london.olympics[2]);
  olympics.appendChild(content);
  document.body.appendChild(olympics);
}

function displayInformations() {
  displayName();
  displayPopulation();
  displayTallestBuilding();
  displayUniversities();
  displayAverageRent();
  displayTubeJouney();
  displayOlympics();
}
