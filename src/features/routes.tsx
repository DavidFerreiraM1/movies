import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {routes as NameRoutes} from '../constants/router';
import {PrincialScreen} from './home';

const Stack = createStackNavigator();
const {root} = NameRoutes;

export function RootRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={root.HOME}>
        <Stack.Screen
          name={root.HOME}
          component={PrincialScreen}
          options={{
            title: 'Meus Filmes',
            headerTitleStyle: {
              color: '#ffffff',
            },
            headerStyle: {
              backgroundColor: '#000000',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
