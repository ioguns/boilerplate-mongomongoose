require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

let personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
})

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  let person = new Person({
    name: 'ADA.LOVELACE',
    age: 20,
    favoriteFoods: ['eba', 'fufu']
  });

  person.save(function(err, data) {
    if (err) {
     return done(err);
    }
     done(null,data);
  });
};

const arrayOfPeople =[{
    name: 'name 0',
    age: 20,
    favoriteFoods: ['food 01', 'food 02']
  },
                     {
    name: 'name 1',
    age: 20,
    favoriteFoods: ['food 11', 'food 12']
  },
                     {
    name: 'name 2',
    age: 20,
    favoriteFoods: ['food 21', 'food 22']
  }];

const createManyPeople = (arrayOfPeople, done) => {
   Person.create(arrayOfPeople,function(err, people) {
    if (err) {
     return done(err);
    }
     done(null,people);
  });
};

const findPeopleByName = (personName, done) => {
 Person.find({name:personName},function(err, people) {
    if (err) {
     return done(err);
    }
     done(null,people);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food},function(err, person) {
    if (err) {
     return done(err);
    }
     done(null,person);
  });
};

const findPersonById = (personId, done) => {
  Person.findOne({_id:personId},function(err, person) {
    if (err) {
     return done(err);
    }
     done(null,person);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
