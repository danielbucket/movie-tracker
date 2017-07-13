import { getImageURL } from '../utils/constants';

class Movie {
  constructor({ id, title, overview, release_date, poster_path, backdrop_path, vote_average }) {
    this.movie_id = id;
    this.title = title;
    this.overview = overview;
    this.release_date = release_date;
    this.poster_path = getImageURL(poster_path);
    this.backdrop_path = getImageURL(backdrop_path);
    this.vote_average = vote_average;
  }
}


// (movie_id, user_id, title, poster_path, release_date, vote_average, overview, backdrop_path)

export default Movie;
