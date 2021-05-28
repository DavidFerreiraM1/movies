import React from 'react';

export interface ComponentWithProps {
  children?: React.ReactNode;
}

export interface RenderItemParams {
  item: any;
  index: number;
}

export type FinderType = 'popular' | 'recommend';

export interface MovieDetailDialogRef {
  openDetail(item: number, finder: FinderType): void;
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
