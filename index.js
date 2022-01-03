// importing express and morgan
const express = require('express');
  const morgan = require('morgan');
  
// defines variable to call on express
const app = express();

// invokes use of morgan middleware to log url requests
app.use(morgan('common'));

let topMovies = [
  {
    title: 'Pig',
    director: 'Michael Sarnoski',
    genre: 'Drama, Thriller',
    year: '2021'
  },
  {
    title: 'Willy\s Wonderland',
    director: 'Kevin Lewis',
    genre: 'Action, Comedy, Horror, Thriller',
    year: '2021'
  },
  {
    title: 'Prisoners of the Ghostland',
    director: 'Sion Sono',
    genre: 'Action, Sci-Fi, Thriller',
    year: '2021'
  },
  {
    title: 'Kick-Ass',
    director: 'Matthew Vaughn',
    genre: 'Action, Comedy, Crime',
    year: '2010'
  },
  {
    title: 'The Wicker Man',
    director: 'Neil LaBute',
    genre: 'Horror, Mystery, Thriller',
    year: '2016'
  },
  {
    title: 'The Weather Man',
    director: 'Gore Verbinski',
    genre: 'Comedy, Drama',
    year: '2005'
  },,
  {
    title: 'National Treasure',
    director: 'Jon Turtletaub',
    genre: 'Action, Adventure, Mystery, Thriller',
    year: '2004'
  },
  {
    title: 'Matchstick Men',
    director: 'Ridley Scott',
    genre: 'Comedy, Crime, Drama, Thriller',
    year: '2003'
  },
  {
    title: 'Wild at Heart',
    director: 'David Lynch',
    genre: 'Comedy, Crime, Drama, Thriller',
    year: '1990'
  },
  {
    title: 'Raising Arizona',
    director: 'Joel Coen, Ethan Coen',
    genre: 'Comedy, Crime',
    year: '1987'
  }
];

// serves documentation.html from "public" folder
app.use(express.static('public'));

// GET requests
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/', (req, res) => {
  res.send('Find your favorite Nicolas Cage movies here!');
});


// handles errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('"It isn\'t lying! You just tell them what you did right, and you leave out the rest!" ...Okay, something went wrong though, bear with us');
})

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});