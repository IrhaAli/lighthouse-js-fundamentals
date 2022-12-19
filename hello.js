const sayHello = function(name) {
  console.log('Hello ' + name);
};

const chooseStations = function(stations) {
  let goodStations = [];
  for (const element of stations) {
    if ((element[1] >= 20) && ((element[2] === 'school') || (element[2] === 'community centre'))) {
      goodStations.push(element[0]);
    }
  }
  return goodStations;
};

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));
