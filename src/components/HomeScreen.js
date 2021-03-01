import React, {useState} from 'react';
import { Image,Alert,ImageBackground, ScrollView, StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import { image } from 'react-native-elements'

export default function HomeScreen ({history}) {
      const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.centeredView}>
          <ImageBackground style={styles.image} source={require("../../assets/background-image.jpg")} />
          <View style={styles.imageContainer} >
            <View style={styles.headerContainer} >
              <Image 
                source={require("../../assets/background-image.jpg")}
                style={{width: 100, height: 100, borderRadius: "50%"}}
              />
              <Text>Hello, Demo </Text>
            </View>
            <View style={styles.profileContainer} >
              <Image 
                source={{uri: image}}
                style={{width: 200, height: 200}}
              />
              <Text>Hello, Demo </Text>
            </View>
          </View>
          <View style={styles.taskContainer} >
          <Text>Hello, Demo </Text>
          </View>
        {/* <View style={styles.centeredView}>
        </View> */}
      </View>
    );

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    backgroundColor: "tomato",
    width: "100%",
    paddingTop: 20,
  },
  taskContainer: {
    flex: 1,
    backgroundColor: "dodgerblue",
    width: "100%",
    padding: 20,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "dodgerblue",
    width: "100%",
    padding: 20,
  },
  profileContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "gold",
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