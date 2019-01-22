const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../db/index.js');
const app = express();
const pgres = require('../db/Controllers/psqlPool.js');
const morgan = require('morgan')

app.use(morgan('tiny'));
app.use(bodyParser.json());

// Removed this '/homes/:id/suggestions',  in the beginning, and it shows the response in my browser
// Tried /homes/:id/ and it gets the same as the above, but doesnt show my response in the browser. 
// Current configuration only displays the homepage, with the ID being hard coded in without 

// This implementation shows the returned data that I get back from the server, but really slow
app.use('/homes/:id/suggestions/', express.static(__dirname + '/../public'));
//This shows the actual HTML page that I get back from the server
// app.use('/homes/:id/suggestions', express.static(__dirname + '/../public'));

// ------------------------------ MY ROUTES ------------------------------ //
app.get('/homes/:id', (req, res) => {
  const id = req.params.id;

  pgres.getSuggestions(id, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      console.log(response, 'Response in my server file from componentdidmount');
      res.send(response);
    }
  });
});

app.post('/homes/:id/suggestions', (req, res) => {
  const id = req.params.id;

  pgres.addSuggestions(id, (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('Successfully posted');
    }
  })
})

// ------------------------------ PREVIOUS ROUTES -------------------------- //

// app.get('/user/favorites', function (req, res) {
//   db.getFavorites()
//     .then((results) => {
//       res.status(200).send(results);
//     }).catch((error) => {
//       console.log(error);
//     });
// });

// app.post('/user/favorites', function (req, res) {
//   let listName = req.body.listName;
//   db.createFavoriteList(listName, () => {
//     res.status(201).send('List Added');
//   });
// });

// app.put('/user/updateFavorite', function (req, res) {
//   let listName = req.body.listName;
//   let oldList = req.body.oldList;
//   let updatedList = req.body.favList;

//   db.updateFavorite(listName, oldList, updatedList, () => {
//     res.status(201).send('List Updated');
//   });
// });

const port = 3050;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});