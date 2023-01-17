const findTheOldest = function(peopleArray) {

    const getOldest = function(accum, current) {
        const accumAge = getAge(accum.yearOfBirth, accum.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        if (currentAge > accumAge) {
            return current;
        } else {
            return accum;
        }
    }

    return peopleArray.reduce(getOldest);
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ];

// console.log(findTheOldest(people));

// findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
