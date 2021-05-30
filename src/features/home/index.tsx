/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {popularMovieRequestAction} from '../../redux/movies/popular/action';

import {
  CardContent,
  CardRoot,
  MovieListButtonBox,
  MovieListButton,
  MovieScreenHeader,
  Root,
  styles,
} from './styles';
import {PopularMovieSection} from './popular-movie-section';
import {MovieDetailDialog} from './movie-detail-dialog-content';
import {FinderType, MovieDetailDialogRef} from './interfaces';
import {RecommendedMovieSection} from './recommended-movie-section';
import {recommendedMovieRequestAction} from '../../redux/movies/recommended/action';
import {TrendingMovieSection} from './trending-movie-section';
import {trendingMovieRequestAction} from '../../redux/movies/trending/action';
import {routes} from '../../constants/router';

import MovieListSvg from '../../assets/svg/list.svg';
import {useNavigation} from '@react-navigation/core';

export function PrincialScreen() {
  const dispatchAction = useDispatch();
  const {navigate} = useNavigation();

  const movieDetailDialogRef = React.createRef<MovieDetailDialogRef>();

  React.useEffect(() => {
    dispatchAction(popularMovieRequestAction());
    dispatchAction(recommendedMovieRequestAction());
    dispatchAction(trendingMovieRequestAction());
  }, []);

  const openMovieDetail = (finder: FinderType) => (item: number) => {
    movieDetailDialogRef.current?.openDetail(item, finder);
  };

  const navigateToListMovies = () => {
    navigate(routes.root.MOVIE_LIST_SCREEN);
  };

  return (
    <Root>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <MovieScreenHeader>
        <MovieListButtonBox>
          <MovieListButton onPress={navigateToListMovies}>
            <MovieListSvg height={48} width={48} />
          </MovieListButton>
        </MovieListButtonBox>
      </MovieScreenHeader>
      <CardRoot>
        <CardContent contentContainerStyle={styles.cardContentContainer}>
          <PopularMovieSection openDetail={openMovieDetail('popular')} />
          <RecommendedMovieSection openDetail={openMovieDetail('recommend')} />
          <TrendingMovieSection openDetail={openMovieDetail('trending')} />
        </CardContent>
      </CardRoot>
      <MovieDetailDialog ref={movieDetailDialogRef} />
    </Root>
  );
}
