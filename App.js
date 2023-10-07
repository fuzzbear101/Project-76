import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StarMapScreen from './screens/StarMap'
import SpaceCraftsScreen from './screens/SpaceCraft'
import DailyPicScreen from './screens/DailyPic' 
import HomeScreen from './screens/Home' 
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "SpaceCrafts" component={SpaceCraftsScreen}/>
        <Stack.Screen name = "DailyPic" component={DailyPicScreen}/>
        <Stack.Screen name = "StarMap" component={StarMapScreen}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
