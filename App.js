import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ImageBackground, Alert, ScrollView, StyleSheet, Text, View, Button, Modal, Pressable, SafeAreaView } from 'react-native';
import { NativeRouter, Switch, Route} from 'react-router-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider, useDispatch} from 'react-redux'
import {createStore} from 'redux'
import 'react-native-gesture-handler'
import {NavigationContainer, } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import dateFormat from 'dateformat'

import HomeScreen from './src/components/HomeScreen'
import NavBar from './src/components/NavBar';
import ProductDetailScreen from './src/components/ProductDetailScreen';
import TasksScreen from './src/components/TasksScreen';
import CreateTaskScreen from './src/components/CreateTaskScreen';
import {tasksReducer, resetDaily, resetWeekly, resetMonthly} from './src/store/index'
import WeatherScreen from './src/components/WeatherScreen';

export default function App() {
  let now = new Date();
 
  const Stack = createStackNavigator();
  let name = `${dateFormat(now, "dddd, mmmm dS")}`
  const store = createStore(tasksReducer);
  return (
    <Provider store={store}>
      {}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={name} component={NavBar} />
          {/* <Stack.Screen name="Home2" component={HomeScreen} /> */}
          <Stack.Screen name="TaskDetail" component={ProductDetailScreen} />
          <Stack.Screen name="Weather" component={WeatherScreen} />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: -2,
  },
  navbarContainer: {
    width: "100%",
    // height: 500,
    backgroundColor: "tomato",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'dodgerblue',
  },
  navigation: {
    backgroundColor: "tomato"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    height: 'auto',

    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});