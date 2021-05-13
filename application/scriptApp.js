"use strict";
alert('hello')

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gender: [],
    privat: false,
};
console.log(personalMovieDB);

const filmQuestion = 'Один из последних посмотренных фильмов?';
const filmRating = 'На сколько оцените его?';

const answers1 = prompt(filmQuestion);
const answers2 = prompt(filmRating, '');
const answers3 = prompt(filmQuestion);
const answers4 = prompt(filmRating, '');

personalMovieDB.movies[answers1] = answers2;
personalMovieDB.movies[answers3] = answers4;

console.log(personalMovieDB);