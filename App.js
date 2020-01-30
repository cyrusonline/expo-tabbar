import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppContainer = createStackNavigator({
  default:createBottomTabNavigator({
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons name="ios-home" size={24} color={tintColor}></Ionicons>
      }
    },
    Post:{
      screen:PostScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons name="ios-add-circle" size={24} color={tintColor}></Ionicons>
      }
    },
    Profile:{
      screen:ProfileScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons name="ios-person" size={24} color={tintColor}></Ionicons>
      }
    },

  })
})


export default createAppContainer(AppContainer)


