import React from 'react';
import BackgroundImage from '../../assets/svg/background-1.svg';
import {BackgroundRoot, RootScreen} from './styles';

export function MovieListScreen() {
  return (
    <RootScreen>
      <BackgroundRoot>
        <BackgroundImage height="100%" />
      </BackgroundRoot>
    </RootScreen>
  );
}
