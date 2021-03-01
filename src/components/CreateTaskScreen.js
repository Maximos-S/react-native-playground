import React, {useState} from 'react'
import { SafeAreaView, ImageBackground,ScrollView, StyleSheet, Text, View ,TextInput, Button} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import {useDispatch} from 'react-redux'
import {CREATE_TASK} from '../store/index'

export default function CreateTaskScreen({navigation}) {
    const [taskName, setTaskName] = useState("")
    const [taskType, setTaskType] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch({
            type: CREATE_TASK,
            payload: {taskName, taskType}
        })
        navigation.navigate("Tasks")
    }


    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require("../../assets/background-image.jpg")} />
         {/* <ScrollView > */}

             {/* <View style={styles.scrollContainer}> */}
                 <View style={styles.formContainer}>
                    <TextInput style={styles.input} placeholder="task name" onChangeText={(text) => {setTaskName(text)}}/>
                    <RNPickerSelect 
                        style={pickerSelectStyles}
                        onValueChange={value => setTaskType(value)}
                        items={[
                            {label: "Daily", value: "Daily"},
                            {label: "Weekly", value: "Weekly"},
                            {label: "Monthly", value: "Monthly"},
                        ]}
                        />
                    <Button title="submit" onPress={handleSubmit}/>
                 </View>
             {/* </View> */}
        {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    scrollContainer: {
    width: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  input: {
    backgroundColor: "dodgerblue",
    margin: 20,
    fontSize: 30,
    borderRadius: 5,
    padding: 10,
    color: "white",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  formContainer: {
    padding: 20,
      width: "90%",
      height: "100%",
      borderRadius: 5,
      backgroundColor: "rgba(255,255,255, 0.5)"
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    margin: 20,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    backgroundColor: "dodgerblue",
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});