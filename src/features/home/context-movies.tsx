/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ComponentWithProps, ContextInterface} from './interfaces';

const ContextMovie = React.createContext<ContextInterface>({
  movieId: null,
  setMovieId: (id: number | null) => {},
});

export function ContextMoviesProvider(props: ComponentWithProps) {
  const [state, setState] = React.useState<{
    movieId: number | null;
  }>({
    movieId: null,
  });

  const setMovieId = (id: number | null) => {
    setState({
      ...state,
      movieId: id,
    });
  };

  return (
    <ContextMovie.Provider
      value={{
        ...state,
        setMovieId,
      }}>
      {props.children}
    </ContextMovie.Provider>
  );
}

export const useMovieContext = () => React.useContext(ContextMovie);
