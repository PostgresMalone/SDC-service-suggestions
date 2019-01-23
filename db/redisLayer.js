const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => console.log('connected'));

client.on('error', (err) => console.log('Error', err));

const Get = (id, callback) => {
  client.get(id, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, JSON.parse(response)); //callback is not a function
    }
  })
}

const setItem = (id, data, callback) => {
  client.set(id, JSON.stringify(data.rows), 'EX', 6000, (err) => {
    if (err) {
      callback(err)
    } else {
      Get(id, callback)
    }
  });
}

module.exports = {
  Get,
  setItem,
}