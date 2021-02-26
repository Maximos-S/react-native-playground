import React, {useState} from 'react';
import { Alert, ImageBackground,  SafeView, ScrollView, StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import NavigationBar from 'react-native-navbar'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import dateFormat from 'dateformat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from './HomeScreen'
import TasksScreen from './TasksScreen'
import CreateTaskScreen from './CreateTaskScreen'


export default function NavBar ({}) {
  let now = new Date();

    const Tab = createBottomTabNavigator()

    
    return (
        <View style={styles.navbarContainer}>
          <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: "#00eaFF"
          }}
          >
            <Tab.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
              ),}}
            />
            <Tab.Screen name="Create Task" 
              component={CreateTaskScreen} 
              options={{
                  tabBarLabel: 'Create Task',
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="plus" color={color} size={size} />
                ),}}
            />
            <Tab.Screen 
              name="Tasks" 
              component={TasksScreen} 
              options={{
                tabBarLabel: 'Tasks',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="calendar-month" color={color} size={size} />
              ),}}
            />
          </Tab.Navigator>
          
        </View>
    );

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  navbarContainer: {
    width: "100%",
    height: "100%",
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
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }})