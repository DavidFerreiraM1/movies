import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {routes as NameRoutes} from '../constants/router';
import {PrincialScreen} from './home';
import {MovieListScreen} from './movie-list';

const HeaderNull = () => null;

const Stack = createStackNavigator();
const {root} = NameRoutes;

export function RootRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={root.HOME}>
        <Stack.Screen
          name={root.HOME}
          component={PrincialScreen}
          options={{header: HeaderNull}}
        />
        <Stack.Screen
          name={root.MOVIE_LIST_SCREEN}
          component={MovieListScreen}
          options={{header: HeaderNull}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
