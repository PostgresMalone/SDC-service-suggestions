const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => console.log('connected'));

client.on('error', (err) => console.log('Error', err));

const Get = (id, callback) => {
  client.get(id, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, JSON.parse(response));
    }
  })
}

const Set = (id, data, callback) => {
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
  Set,
}