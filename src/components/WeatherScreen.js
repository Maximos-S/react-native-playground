import React from 'react'
import { StyleSheet, ImageBackground, Image, Text, View } from 'react-native'
import dateFormat from 'dateformat'


export default function WeatherScreen() {
    return (
       <View style={styles.centeredView}>
          <ImageBackground style={styles.image} source={require("../../assets/background-image.jpg")} />
          <View style={styles.imageContainer} >
            <View style={styles.headerContainer} >
              <Image 
                source={require("../../assets/demouser.png")}
                style={{width: 100, height: 100, borderRadius: 50, marginRight: 20, borderColor: "dodgerblue", borderWidth: 3,}}
              />
              <View>
                <Text style={styles.header}>Hello, Demo </Text>
                <Text >{`${dateFormat(now, "dddd, mmmm dS")}`}</Text>
              </View>
            </View>
            <View style={styles.profileContainer} >
              <View style={styles.titleContainer}>
                <Text style={styles.header}>To Do</Text>
              </View>
            </View>
          </View>
      </View>
    );

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    // backgroundColor: "tomato",
    width: "100%",
  },
  taskContainer: {
    flex: .3,
    // height: 200,
    justifyContent: "space-between",
    // backgroundColor: "dodgerblue",
    width: "100%",
    padding: 20,
  },
  titleContainer: {
    // margin: 5,
    backgroundColor: "gold",
    padding: 2,
    paddingLeft: 15,
    borderRadius: 20,
    width: "auto",
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',

  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "dodgerblue",
    width: "100%",
    padding: 20,
  },
  profileContainer: {
    flex: 2,
    // backgroundColor: "gold",
    width: "100%",
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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