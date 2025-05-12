
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  
  let result = array.map((movie) => {
    return movie.director;
  });
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => {
    return movie.director === director;
  });
  return result;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let director_movies = getMoviesFromDirector(array, director);
  let average = director_movies.reduce((acc, movie) => {
    return acc + movie.score;
  }
  , 0) / director_movies.length;
  return average;

  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let movies = array.map((movie) => {
    return movie.title;
  })
  let result = movies.sort();
  if (result.length > 20) {
    result = result.slice(0, 20);
  }
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return result;

}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
 
  let category_movies = array.filter((movie) => {
    return movie.genre.includes(category);
  });
  let average = category_movies.reduce((acc, movie) => {
    return acc + movie.score;
  }
  , 0) / category_movies.length;
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let result = movies.map((movie) => {
    let duration = movie.duration;
    let hours = 0;
    let minutes = 0;
    if (duration.includes('h')) {
      hours = parseInt(duration.split('h')[0]);
      duration = duration.split('h')[1];
    }
    if (duration.includes('min')) {
      minutes = parseInt(duration.split('min')[0]);
    }
    return {
      ...movie,
      duration: hours * 60 + minutes
    };
  }
  );
  return result;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let filteredFilmByYear = array.filter((movie) => movie.year == year)

  let bestFilm = filteredFilmByYear.sort((a, b) => {return  b.score - a.score } )

  return [bestFilm[0]]
    
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
