const findTheOldest = function(arr) {
    let oldest = 0;
    let oldestPerson;
    arr.forEach(person => {
        let death = (new Date()).getFullYear();
        if (person.yearOfDeath) {
            death = person.yearOfDeath;
        }
        let age = death - person.yearOfBirth;
        if (age > oldest) {
            oldest = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
