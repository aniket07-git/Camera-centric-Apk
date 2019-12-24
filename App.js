import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import CameraScreen from './screens/CameraScreen';

const MainNavigator = createStackNavigator(
    {
        Home :  {screen: Home},
        Camera: {screen: CameraScreen}
    },

    {
      defaultNavigationOptions: 
        {
            headerTintColor : "#FFF",
            headerStyle: {
              backgroundColor: "#b83227"
            },
            headerTitleStyle : {
              color: "#fff"
            }
        }

    }   
)

const App = createAppContainer(MainNavigator);
export default App;