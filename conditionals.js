const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log('You\'re eligible to vote');
}

const temperature = 41;

if ((temperature < -40) || (temperature > 40)) {
  console.log('Maybe going outside isn\'t such a great idea...');
}

const raining = true;

if (!raining) {
  console.log('Leave your umbrella at home!');
}
