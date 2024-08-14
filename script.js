function findTheOldest(people) {
    let oldest = people[1];
    people.forEach(person => {
        if (Math.abs(person.yearOfBirth - person.yearOfDeath) > Math.abs(oldest.yearOfBirth - oldest.yearOfDeath)) {
            oldest = person;
        }
    });

    console.log(oldest);
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "PepitoElMayor",
        yearOfBirth: 1812,
        yearOfDeath: 1941,
    },
  ]

findTheOldest(people);
