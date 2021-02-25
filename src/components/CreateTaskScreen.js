import React, {useState} from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View ,TextInput, Button} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import {useDispatch} from 'react-redux'
import {CREATE_TASK} from '../store/index'

export default function CreateTaskScreen({history}) {
    const [taskName, setTaskName] = useState("")
    const [taskType, setTaskType] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch({
            type: CREATE_TASK,
            payload: {taskName, taskType}
        })
        history.push("/products")
    }


    return (
         <ScrollView >
             <View style={styles.container}>
                 <View style={styles.formContainer}>
                    <TextInput style={styles.input} placeholder="task name" onChangeText={(text) => {setTaskName(text)}}/>
                    <RNPickerSelect 
                        style={styles.picker}
                        onValueChange={value => setTaskType(value)}
                        items={[
                            {label: "Daily", value: "Daily"},
                            {label: "Weekly", value: "Weekly"},
                            {label: "Monthly", value: "Monthly"},
                        ]}
                        />
                    <Button title="submit" onPress={handleSubmit}/>
                 </View>
             </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
    justifyContent: 'center',
  },
  input: {
    margin: 20,
    fontSize: 30
  },
  picker: {
    textAlign: "center",
    fontSize: 30,
  },
  formContainer: {
      width: "90%",
      height: "100%",
      borderRadius: 5,
      backgroundColor: "rgba(255,255,255, 0.5)"
  }
})
