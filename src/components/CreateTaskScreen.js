import React from 'react'
import { SafeAreaView, StyleSheet, Text, View , Form, Input} from 'react-native'

export default function CreateTaskScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Form>
                <Input name="name" label="Name "/>
            </Form>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
  },
})
