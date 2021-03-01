import React, {useState} from 'react';
import { Image,Alert,ImageBackground, ScrollView, StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import { image } from 'react-native-elements'
import { useSelector } from 'react-redux'
import dateFormat from 'dateformat'
import TaskTile from './TaskTile';



export default function HomeScreen ({navigation}) {
      const [modalVisible, setModalVisible] = useState(false)

      let now = new Date();


      const DAILYDATA = useSelector(state => {return state.tasks.Daily})
      const WEEKLYDATA = useSelector(state => state.tasks.Weekly)
      const MONTHLYDATA = useSelector(state => state.tasks.Monthly)

      const mid = Math.floor(DAILYDATA.length /2)


      let taskList = [...DAILYDATA.slice(0,mid),WEEKLYDATA[0],...DAILYDATA.slice(mid),MONTHLYDATA[0]]

    return (

        <View style={styles.centeredView}>
          <ImageBackground style={styles.image} source={require("../../assets/background-image.jpg")} />
          <View style={styles.imageContainer} >
            <View style={styles.headerContainer} >
              <Image 
                source={require("../../assets/background-image.jpg")}
                style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}}
              />
              <View>
                <Text style={styles.header}>Hello, Demo </Text>
                <Text >{`${dateFormat(now, "dddd, mmmm dS")}`}</Text>
              </View>
            </View>
            <View style={styles.profileContainer} >
              <Text style={styles.header}>To Do:</Text>
              <ScrollView horizontal={true}>
                {taskList.map((task,idx) => (
                  <TaskTile key={idx} task={task} navigation={navigation}/>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.taskContainer} >
          <Text style={styles.header}>Notifications</Text>
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
    flex: 3,
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
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "dodgerblue",
    width: "100%",
    padding: 20,
  },
  profileContainer: {
    flex: 2,
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