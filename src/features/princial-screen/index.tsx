import React from 'react';
import {StatusBar} from 'react-native';
import BackgroundImage from '../../assets/svg/background-1.svg';

import {
  BackgroundRoot,
  CardContent,
  CardRoot,
  Root,
  Section,
  styles,
} from './styles';

export function PrincialScreen() {
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
          <Section />
          <Section />
          <Section />
        </CardContent>
      </CardRoot>
    </Root>
  );
}
