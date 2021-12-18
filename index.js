// importing express and morgan
const express = require('express');
// defines variable to call on express
const app = express();

// invokes use of morgan middleware to log url requests
let topMovies = [
  {
    title: 'Pig',
    director: 'Michael Sarnoski',
    genre: 'Drama',
    year: '2021'
  },
  {
    title: 'Willy\s Wonderland',
    director: 'Kevin Lewis',
    genre: 'Action',
    year: '2021'
  },
  {
    title: 'Prisoners of the Ghostland',
    director: 'Sion Sono',
    genre: 'Action',
    year: '2021'
  },
  {
    title: 'Kick-Ass',
    director: 'Matthew Vaughn',
    genre: 'Action',
    year: '2010'
  },
  {
    title: 'The Wicker Man',
    director: 'Neil LaBute',
    genre: 'Horror',
    year: '2016'
  },
  {
    title: 'The Weather Man',
    director: 'Gore Verbinski',
    genre: 'Drama',
    year: '2005'
  },,
  {
    title: 'National Treasure',
    director: 'Jon Turtletaub',
    genre: 'Adventure',
    year: '2004'
  },
  {
    title: 'Matchstick Men',
    director: 'Ridley Scott',
    genre: 'Crime',
    year: '2003'
  },
  {
    title: 'Wild at Heart',
    director: 'David Lynch',
    genre: 'Drama',
    year: '1990'
  },
  {
    title: 'Raising Arizona',
    director: 'Joel Coen',
    genre: 'Comedy',
    year: '1987'
  }
];

// GET requests
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/', (req, res) => {
  res.send('Find your favorite Nicolas Cage movies here!');
});

// serves documentation.html from "public" folder
app.use(express.static('public'));

// handles errors
// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});