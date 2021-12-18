// Using the Express routing syntax, create an express GET route located at the endpoint "/movies" that returns a JSON object containing data about your top 10 movies

const express = require('express');
const app = express();

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