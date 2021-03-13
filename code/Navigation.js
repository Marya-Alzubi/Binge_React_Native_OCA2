import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Category1 from './src/screens/Category1';
import Category2 from './src/screens/Category2';
import Category3 from './src/screens/Category3';
import Category4 from './src/screens/Category4';
import Movies2 from './src/screens/Category1';
import Movie from './src/screens/Movie';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const Navigation = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="Home" component={Home} options={{headerShown: false}} />
      <Screen name="Category1" component={Category1} options={{headerShown:  false}} />
      <Screen name="Category2" component={Category2} options={{headerShown:  false}} />
      <Screen name="Category3" component={Category3} options={{headerShown:  false}} />
      <Screen name="Category4" component={Category4} options={{headerShown:  false}} />
      <Screen name="Movie" component={Movie} options={{headerShown:  false}} />
    </Navigator>
  </NavigationContainer>
);

export default Navigation;
