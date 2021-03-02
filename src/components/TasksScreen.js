import React, {useState, useEffect} from 'react';
import { Alert, ImageBackground, SectionList, ScrollView, SafeAreaView, StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';


import ProductDetail from './ProductDetail';
import TaskTile from './TaskTile';
export default function TasksScreen ({navigation}) {
  const DAILYDATA = useSelector(state => {return state.tasks.Daily})
  const WEEKLYDATA = useSelector(state => state.tasks.Weekly)
  const MONTHLYDATA = useSelector(state => state.tasks.Monthly)
  
  const d = useSelector(state => state.tasks.Daily.length)
  const w = useSelector(state => state.tasks.Weekly.length)
  const m = useSelector(state => state.tasks.Monthly.length)
  //quirks of working with a fake database ^

  
  const Item = ({ product,}) => (
    <ProductDetail style={styles.item} product={product} style={styles.title} navigation={navigation}/>
  );
    return (
      <View style={styles.container}>
          <ImageBackground style={styles.image} source={require("../../assets/background-image.jpg")} />
        <ScrollView horizontal={true}>
                {DAILYDATA.map((task,idx) => (
                  <TaskTile key={idx} task={task} navigation={navigation}/>
                ))}
        </ScrollView>
        <ScrollView horizontal={true}>
                {WEEKLYDATA.map((task,idx) => (
                  <TaskTile key={idx} task={task} navigation={navigation}/>
                ))}
        </ScrollView>
        <ScrollView horizontal={true}>
                {MONTHLYDATA.map((task,idx) => (
                  <TaskTile key={idx} task={task} navigation={navigation}/>
                ))}
        </ScrollView>
      </View>
    );



    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  SectionList: {
    width: "100%",
    padding: 0,
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
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
  createTask: {
    color: "red",
    fontSize: 30,
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
  },
  title: {
    padding: 20,
    fontSize: 24,
    backgroundColor: "dodgerblue",
  }
})