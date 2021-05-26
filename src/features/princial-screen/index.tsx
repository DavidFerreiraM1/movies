/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import BackgroundImage from '../../assets/svg/background-1.svg';
import {popularMovieRequestAction} from '../../redux/movies/popular/action';

import {BackgroundRoot, CardContent, CardRoot, Root, styles} from './styles';
import {PopularMovieSection} from './popular-movie-section';

export function PrincialScreen() {
  const dispatchAction = useDispatch();

  React.useEffect(() => {
    dispatchAction(popularMovieRequestAction());
  }, []);

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
          <PopularMovieSection />
        </CardContent>
      </CardRoot>
    </Root>
  );
}
