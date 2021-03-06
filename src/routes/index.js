import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Launcher from '../screens/launcher';
import WalkthroughOne from '../screens/walkthrough';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launcher">
        <Stack.Screen
          name="Launcher"
          component={Launcher}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Walkthrough"
          component={WalkthroughOne}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
