const mongoose = require('mongoose');
mongoose.connect('mongodb://172.17.0.2/airBNB');
// mongoose.connect('mongodb://localhost/airBNB');


let homeSchema = mongoose.Schema({
  id: {
    type: Number,
    min: 1,
    max: 100,
    unique: true
  },
  suggestions: Object
});

let favoritesSchema = mongoose.Schema({
  favorites: Object
});

let Home = mongoose.model('suggestions', homeSchema);
let Favorite = mongoose.model('favorites', favoritesSchema);

let saveHome = (obj) => {
  let newHome = new Home(obj);
  newHome.save((err, res) => {
    if (err) { console.log(err); }
  });
};

let findHome = (homeID) => {
  return new Promise((resolve, reject) => {
    resolve(Home.find({id: homeID}));
  });
};

let getFavorites = () => {
  return new Promise((resolve, reject) => {
    resolve(Favorite.find());
  });
};

let createFavoriteList = (name, callback) => {
  let data = {
    favorites: {}
  };
  data.favorites[name] = [];
  let newFavorite = new Favorite(data);
  newFavorite.save((err, res) => {
    if (err) { console.log(err); }
    callback();
  });
};

let updateFavorite = (listName, oldList, updatedList, callback) => {
  let searchDatabase = {
    favorites: {}
  };
  searchDatabase.favorites[listName] = oldList;
  let updateDatabase = {
    favorites: {}
  };
  updateDatabase.favorites[listName] = updatedList;
  Favorite.update(searchDatabase, updateDatabase, (err, res) => {
    if (err) { console.log('Error ', err); }
    callback(null);
  });
};

module.exports = {
  saveHome,
  findHome,
  getFavorites,
  createFavoriteList,
  updateFavorite
};
