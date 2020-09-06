import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'CHEEVO',
          headerStyle: {
            backgroundColor: '#73D676',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: 'bold',
          },
        }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
