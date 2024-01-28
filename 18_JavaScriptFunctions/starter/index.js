const movies = [
  { title: "Jaws", director: "Steven Spielberg", year: "1975" },
  { title: "Star Wars", director: "George Lucas", year: "1977" },
  {
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    year: "2018",
  },
  { title: "Top Gun", director: "Tony Scott", year: "1986" },
  { title: "Justice League", director: "Zack Snyder", year: "2017" },
];

function findMovie(movieTitle) {
  for (const movie of movies) {
    if (movie.title === movieTitle) {
      console.log(
        `${movie.title} directed by ${movie.director} in ${movie.year}`
      );
    }
  }
  console.log("Outside the loop: ", movie);
}

findMovie("Star Wars");

var movie = "Thor: Ragnarok";

console.log(movie);

findMovie(movie);
