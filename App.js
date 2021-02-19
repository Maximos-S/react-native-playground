import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, ScrollView, StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import { NativeRouter, Switch, Route} from 'react-router-native'

import HomeScreen from './src/components/HomeScreen'
import NavBar from './src/components/NavBar';
import ProductScreen from './src/components/ProductScreen';

export default function App() {

  return (
    <NativeRouter>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/products" component={ProductScreen} />
        </Switch>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginTop: 22,
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