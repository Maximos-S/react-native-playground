import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, ScrollView, StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const print = (e) => {
    console.log("hello")
    setModalVisible(!modalVisible)
  }
  const print2 = (e) => {
    alert("print2")
  }
  return (
    <View style={styles.container}>
      <View style={styles.navbar} onPress={print2}>
        <Text>Navbar</Text>
        <Button 
          onPress={print}
          title="Press Me"
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("modal has been closed");
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modal}>
          <Text>Modal</Text>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
        </View>
      </Modal>
      <ScrollView>
        <Text>This is Maximos' first mobile app!</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
    backgroundColor: "#00EAFF"
  },
  navbar: {
    backgroundColor: "#000",
    width: "100%",
    height: "15%",
    marginBottom: "10%"
  },
  button: {
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
});
