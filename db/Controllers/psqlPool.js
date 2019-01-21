const pg = require('pg')
const config = require('./config.js');
const redis = require('../redisLayer.js')

const pool = new pg.Pool(config);
pool.connect()

pool.on('error', (err) => {
  console.log('Error on database', err);
});

const getSuggestions = (id, callback) => {
  const searchQuery = `SELECT * FROM suggestions WHERE home_relation_id=${id}`;

  redis.Get(id, (err, res) => {
    if (err || res === null) {
      pool.query(searchQuery, (error, response) => {
        if (error) {
          res.send(error, null);
        } else {
          redis.redisSet(id, response, callback);
        }
      })
    } else {
      callback(null, res.rows);
    }
  });
}

const addSuggestions = (suggestion_id, city, country, beds, relation_id, thumbnail_img, price, states) => {
  const searchQuery = `INSERT INTO suggestions (suggestion_id, city, country, home_beds, 
  home_relation_id, home_thumbnail_img, home_price, states) 
  VALUES (${suggestion_id}, '${city}', '${country}', '${beds}','${relation_id}', '${thumbnail_img}', ${price}, '${states}')`;

  pool.query(searchQuery, (err, res) => {
    if (err) {
      console.log(err, 'error')
    } else {
      console.log('Succesfully added');
    }
  });
}

const modifySuggestions = (column, value, id) => {
  value = typeof value === 'string' ? `'${value}'` : value;
  const searchQuery = `UPDATE suggestions SET ${column}=${value} WHERE suggestion_id=${id}`;

  pool.query(searchQuery, (err, res) => {
    if (err) {
      console.log(err, 'error modifying suggestion');
    } else {
      console.log('Succesfully modified');
    }
  })
}

module.exports = {
  getSuggestions,
  addSuggestions,
  modifySuggestions
}