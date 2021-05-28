import React from 'react';

export interface ComponentWithProps {
  children?: React.ReactNode;
}

export interface RenderItemParams {
  item: any;
  index: number;
}

export interface MovieDetailDialogRef {
  openDetail(item: number): void;
}

export interface MovieSectionProps {
  openDetail(item: number): void;
}

export interface ContextInterface {
  movieId: number | null;
  setMovieId(id: number | null): void;
}
