const findTheOldest = function(arr) {
  return arr.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
};

// Do not edit below this line
module.exports = findTheOldest;
