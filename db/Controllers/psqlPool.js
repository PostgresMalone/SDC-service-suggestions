const pg = require('pg')
const config = require('./config.js');

const pool = new pg.Pool(config);

pool.on('error', (err) => {
  console.log('Error on database', err);
});

const getSuggestions = (id, callback) => {
  const searchQuery = `SELECT * FROM suggestions JOIN homes ON homes.home_id=suggestions.home_relation_id WHERE suggestions.home_relation_id=${id};`;

  pool.connect()
    .then(client => {
      return client.query(searchQuery)
        .then(res => {
          client.release();
          callback(res.rows);
        })
        .catch(err => {
          client.release();
          console.log(err, 'error in getSuggestions')
        });
    });
}

const addSuggestions = (suggestion_id, city, country, beds, relation_id, thumbnail_img, price, states) => {

  let searchQuery = `INSERT INTO suggestions (suggestion_id, city, country, home_beds, home_relation_id, home_thumbnail_img, home_price, states) VALUES (${suggestion_id}, '${city}', '${country}', '${beds}','${relation_id}', '${thumbnail_img}', ${price}, '${states}')`;

  pool.connect()
    .then(client => {
      return client.query(searchQuery)
        .then(() => {
          client.release();
          console.log('Successfully saved')
        })
        .catch(err => {
          client.release();
          console.log(err, 'Error saving ')
        });
    });
}

const modifySuggestions = (column, value, id) => {
  value = typeof value === 'string' ? `'${value}'` : value;

  let searchQuery = `UPDATE suggestions SET ${column}=${value} WHERE suggestion_id=${id}`;

  pool.connect()
    .then(client => {
      return client.query(searchQuery)
        .then(() => {
          client.release();
          console.log('Successfully modified')
        })
        .catch(err => {
          client.release();
          console.log(err, 'Error modifying');
        });
    });
}

module.exports = {
  getSuggestions,
  addSuggestions,
  modifySuggestions
}
