import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, ScrollView, StyleSheet, Text, View, Button, Modal, Pressable, SafeAreaView } from 'react-native';
import { NativeRouter, Switch, Route} from 'react-router-native'

import HomeScreen from './src/components/HomeScreen'
import NavBar from './src/components/NavBar';
import ProductDetailScreen from './src/components/ProductDetailScreen';
import ProductScreen from './src/components/ProductScreen';

export default function App() {
  const regex = /.+/;
  return (
    <NativeRouter>
      <SafeAreaView >
        <Route path="/" component={NavBar} />
      </SafeAreaView>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/products" component={ProductScreen} />
          <Route exact path="/products/:productName"component={ProductDetailScreen} />
          {/* <Route exact path={/\/products\/.+/ } component={ProductDetailScreen} /> */}
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