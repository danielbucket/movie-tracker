import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';

export default class MovieList extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    const { user: { id }, location: { pathname } } = this.props;

    switch (pathname) {
      case '/favorites':
        this.props.fetchFavorites(id);
        break;
      default:
        this.props.fetchMovies();
    }
  }

  render() {
    console.log('looking for pathname :', this.props )
    let moviesArray;
    let toggleView;
    const { movies, isLoading, user, postFavorite, deleteFavorite, favorites, location: { pathname } } = this.props;

    if (isLoading) {
      return <div>loading...</div>
    }

    switch (pathname) {
      case '/favorites':
      toggleView = <Link to="/">Home</Link>
      moviesArray = favorites.map(movie =>
        <MovieCard
          deleteFavorite={deleteFavorite}
          key={movie.id}
          movie={movie}
          user={user}
          postFavorite={postFavorite}
        />);
        break;
      default:
      toggleView = <Link to="/favorites">Favorites</Link>
      console.log(movies)
      moviesArray = movies.map(movie =>
        <MovieCard
          key={movie.id}
          movie={movie}
          user={user}
          postFavorite={postFavorite}
        />);
    }

    return (
      <section className='movie-list'>
        {toggleView}
        {moviesArray}
      </section>
    )
  }
}
