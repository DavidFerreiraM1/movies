/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import BackgroundImage from '../../assets/svg/background-1.svg';
import {popularMovieRequestAction} from '../../redux/movies/popular/action';

import {BackgroundRoot, CardContent, CardRoot, Root, styles} from './styles';
import {PopularMovieSection} from './popular-movie-section';
import {renderWithContext} from '../../util/render-with-context';
import {ContextMoviesProvider} from './context-movies';
import {MovieDetailDialog} from './movie-detail-dialog-content';
import {FinderType, MovieDetailDialogRef} from './interfaces';
import {RecommendedMovieSection} from './recommended-movie-section';
import {recommendedMovieRequestAction} from '../../redux/movies/recommended/action';

export function PrincialScreenWithRef() {
  const dispatchAction = useDispatch();
  const movieDetailDialogRef = React.createRef<MovieDetailDialogRef>();

  React.useEffect(() => {
    dispatchAction(popularMovieRequestAction());
    dispatchAction(recommendedMovieRequestAction());
  }, []);

  const openMovieDetail = (finder: FinderType) => (item: number) => {
    movieDetailDialogRef.current?.openDetail(item, finder);
  };

  return (
    <Root>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <BackgroundRoot>
        <BackgroundImage height="100%" />
      </BackgroundRoot>
      <CardRoot>
        <CardContent contentContainerStyle={styles.cardContentContainer}>
          <PopularMovieSection openDetail={openMovieDetail('popular')} />
          <RecommendedMovieSection openDetail={openMovieDetail('recommend')} />
        </CardContent>
      </CardRoot>
      <MovieDetailDialog ref={movieDetailDialogRef} />
    </Root>
  );
}

export const PrincialScreen = renderWithContext(ContextMoviesProvider)(
  PrincialScreenWithRef,
);
