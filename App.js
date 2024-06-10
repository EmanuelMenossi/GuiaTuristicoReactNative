import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import HistoricPointsScreen from './src/screens/HistoricPointsScreen.js';
import RecommendedRestaurantsScreen from './src/screens/RecommendedRestaurantsScreen.js';
import OutdoorActivitiesScreen from './src/screens/OutdoorActivitiesScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Historic Points" component={HistoricPointsScreen} />
        <Stack.Screen name="Recommended Restaurants" component={RecommendedRestaurantsScreen} />
        <Stack.Screen name="Outdoor Activities" component={OutdoorActivitiesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}