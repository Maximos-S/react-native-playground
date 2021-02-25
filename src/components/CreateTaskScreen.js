import React, {useState} from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View , Form, Input, TextInput} from 'react-native'

export default function CreateTaskScreen() {
    const [taskName, setTaskName] = useState("")
    const [taskType, setTaskType] = useState("")



    return (
         <ScrollView >
             <View style={styles.container}>

             <TextInput style={styles.input} placeholder="task name" onChangeText={(text) => {setTaskName(text)}}/>
             <TextInput style={styles.input} placeholder="task category" onChangeText={(text) => {setTaskType(text)}}/>
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
})
