const findTheOldest = function (persons) {
  const currentYear = new Date().getFullYear();

  const totalAge = function (a) {
    if (!a.yearOfDeath) {
      return currentYear - a.yearOfBirth;
    } else {
      return a.yearOfDeath - a.yearOfBirth;
    }
  };

  for (let person of persons) {
    console.log(`${person.name}: ${totalAge(person)}`);
  }
  return persons.reduce(function (oldest, current) {
    const oldestAge = totalAge(oldest);
    const currentAge = totalAge(current);

    return currentAge > oldestAge ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
