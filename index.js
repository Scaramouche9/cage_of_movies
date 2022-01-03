// importing express and morgan
const express = require('express');
  morgan = require('morgan');
  bodyParser = require('body-parser');
  uuid = require('uuid');

// defines variable to call on express
const app = express();

// invokes use of morgan middleware to log url requests
app.use(morgan('common'));
app.use(express.json());

// invokes use of bodyParser
app.use(bodyParser.json());

let topMovies = [
  {
    title: 'Pig',
    director: {
      name: 'Michael Sarnoski',
      bio: 'This is a bio',
      birth: '1900',
      death: 'NA'
    },
    genres: 'Drama, Thriller',
    year: '2021'
  },
  {
    title: 'Willy\s Wonderland',
    director:   {
      name: 'Kevin Lewis',
      bio: 'This is also a bio',
      birth: '1980',
      death: 'NA'
    },
    genres: 'Action, Comedy, Horror, Thriller',
    year: '2021'
  },
  {
    title: 'Prisoners of the Ghostland',
    director:   {
      name: 'Sion Sono',
      bio: 'This too, is a bio',
      birth: '1930',
      death: 'NA'
    },
    genres: 'Action, Sci-Fi, Thriller',
    year: '2021'
  },
  {
    title: 'Kick-Ass',
    director: {
      name: 'Matthew Vaughn',
      bio: 'here',
      birth: '1919',
      death: 'NA'
    },
    genres: 'Action, Comedy, Crime',
    year: '2010'
  },
  {
    title: 'The Wicker Man',
    director: {
      name: 'Neil LaBute',
      bio: 'this',
      birth: '1680',
      death: 'NA'
    },
    genres: 'Horror, Mystery, Thriller',
    year: '2016'
  },
  {
    title: 'The Weather Man',
    director: {
      name: 'Gore Verbinski',
      bio: 'something',
      birth: '1724',
      death: 'NA'
    },
    genres: 'Comedy, Drama',
    year: '2005'
  },
  {
    title: 'National Treasure',
    director: {
      name: 'Jon Turteltaub',
      bio: 'what',
      birth: '1822',
      death: 'NA'
    },
    genres: 'Action, Adventure, Mystery, Thriller',
    year: '2004'
  },
  {
    title: 'Matchstick Men',
    director: {
      name: 'Ridley Scott',
      bio: 'yep',
      birth: '1923',
      death: 'NA'
    },
    genres: 'Comedy, Crime, Drama, Thriller',
    year: '2003'
  },
  {
    title: 'Wild at Heart',
    director: {
      name: 'David Lynch',
      bio: 'whoa',
      birth: '231',
      death: 'NA'
    },
    genres: 'Comedy, Crime, Drama, Thriller',
    year: '1990'
  },
  {
    title: 'Raising Arizona',
    director: {
      name: 'Joel Coen, Ethan Coen',
      bio: 'two people!',
      birth: '2020',
      death: 'NA'
    },
    genres: 'Comedy, Crime',
    year: '1987'
  }
];

// serves documentation.html from "public" folder
app.use(express.static('public'));

// GET requests

// Welcome message
app.get('/', (req, res) => {
  res.send('Find your favorite Nicolas Cage movies here!');
});

// Returns list of ALL movies to the user
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

// Returns data about specific movies
app.get('/movies/:title', (req, res) => {
  res.status(200).json(topMovies.find((movie) => {
    return movie.title === req.params.title
  }));
});

// Returns data about genre by name
app.get('/genres/:genre', (req, res) => {
  res.status(200).json(topMovies.find((genre) => {
    return genre.genres === req.params.genre;
  }));
});

// Return data about a director by name 200 but wrong return
app.get('/directors/:directorName', (req, res) => {
  res.status(200).json(topMovies.filter((director) => {
    return director.director.name === req.params.directorName;
  }));
});

// POST requests

// Allow users to register
app.post('/users/:newUser', (req, res) => {
  res.send('You\'ve successfully registered, welcome!')
});

// Allow users to add a movie to their list of favorites, showing a text that a movie has been added 404
app.post('/favorite/:newFavorite', (req, res) => {
  res.send('You\'ve added a new movie to your favorites!')
});

// PUT requests

// Allow users to update their info
app.put('/users/:username', (req, res) => {
  res.send('You\'ve successfully updated your information!');
});

// DELETE requests

// Allow users to remove a movie from their favorites, showing a text that a movie has been removed
app.delete('/favorite/:deleteFavorite', (req, res) => {
  res.send('You\'ve successfully deleted a movie from your favorites');
});

// Allow existing users to deregister, showing a text that a user email has been removed
app.delete('/users/:username', (req, res) => {
  res.send('User account deleted, sorry to see you go!')
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