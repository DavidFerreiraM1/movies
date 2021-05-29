import {
  PopularMovies,
  RecommendedMovies,
  TrendingMovies,
  // TrendingMovies,
} from '../../interfaces/movies';
import {AppStore} from '../../redux/interface';
import {MovieDetailStateData} from './interfaces';

export function popularFinder(
  movieId: number,
  {popularMovieReducer}: AppStore,
): MovieDetailStateData {
  const finder = ({ids}: PopularMovies) => ids.trakt === movieId;
  const movieFound: any = popularMovieReducer.list.find(finder);
  const {title, ids, posterUrl, overview}: PopularMovies = movieFound;
  return {
    id: ids.trakt.toString(),
    urlImg: posterUrl,
    title,
    description: overview,
  };
}

export function recommendFinder(
  movieId: number,
  {recommendedMovieReducer}: AppStore,
): MovieDetailStateData {
  const finder = ({movie}: RecommendedMovies) => movie.ids.trakt === movieId;
  const movieFound: any = recommendedMovieReducer.list.find(finder);
  const {movie, posterUrl}: RecommendedMovies = movieFound;
  return {
    id: movie.ids.trakt.toString(),
    urlImg: posterUrl,
    title: movie.title,
    description: movie.overview,
  };
}

export function trendingFinder(
  movieId: number,
  {trendingMovieReducer}: AppStore,
): MovieDetailStateData {
  const finder = ({movie}: TrendingMovies) => movie.ids.trakt === movieId;
  const movieFound: any = trendingMovieReducer.list.find(finder);
  const {movie, posterUrl}: TrendingMovies = movieFound;
  return {
    id: movie.ids.trakt.toString(),
    urlImg: posterUrl,
    title: movie.title,
    description: movie.overview,
  };
}
