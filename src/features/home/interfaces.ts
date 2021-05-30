import React from 'react';
import {MovieListType} from '../../interfaces/movies';

export interface ComponentWithProps {
  children?: React.ReactNode;
}

export interface RenderItemParams {
  item: any;
  index: number;
}

export interface MovieDetailDialogRef {
  openDetail(item: number, finder: MovieListType): void;
}

export interface MovieSectionProps {
  openDetail(item: number): void;
}

export interface ContextInterface {
  movieId: number | null;
  setMovieId(id: number | null): void;
}

export interface MovieDetailStateData {
  id: string;
  urlImg: string;
  title: string;
  description: string;
}

export interface DialogMovieDetailProps {
  setMovieOnPersonalList(movieListType: MovieListType): void;
}
