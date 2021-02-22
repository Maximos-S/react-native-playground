import React, {useState} from 'react';
import { Alert, SafeView, ScrollView, StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import NavigationBar from 'react-native-navbar'


export default function NavBar ({history}) {
    const print = (e) => {
        console.log("hello")
        setModalVisible(!modalVisible)
    }
    const titleConfig = {
        title: "Home",
    }
    const profileConfig = {
        title: "Profile",
        handler: () => {
            console.log("history", history)
            history.push("/products")
        }
    }
    const productsConfig = {
        title: "Products",
        handler: () => {
            console.log("history", history)
            history.push("/")
        }
    }
    return (
        <View style={styles.navbarContainer}>
            <NavigationBar
                style={styles.navigation}
                title={titleConfig}
                leftButton={profileConfig}
                rightButton={productsConfig}
            />
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
  }})