import React, {useState, useEffect} from 'react'
import { TouchableOpacity, View, Text , StyleSheet, Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from './ProductDetailScreen';
import {useDispatch, useSelector} from 'react-redux'

import {COMPLETE_TASK} from '../store/index'


export default function ProductDetail({product,navigation}) {
    // const [completed, setCompleted] = useState(false)
    const task = useSelector(state => {
        let taskRes;
        state.tasks[product.category].forEach(task => {
            if (task.title === product.title) {
                taskRes = task
            }
        })
        return taskRes
    })
    const completed = useSelector(state => {
        let completedRes;
        state.tasks[product.category].forEach(task => {
            if (task.title === product.title) {
                completedRes = task.completed
            }
        })
        
        return completedRes
    })

    const dispatch = useDispatch()

    const productReroute = () => {
        navigation.navigate("TaskDetail", {task})
    }
    const Stack = createStackNavigator()

    const taskComplete = e => {
        dispatch({
            type: COMPLETE_TASK,
            payload: task
        })
    }

    return (

        <View style={completed ? styles.completed : styles.item}>
             <TouchableOpacity
                    style={styles.button}
                    onPress={productReroute}
            >
                    <Text style={styles.buttonText}>{task.title}</Text>
            </TouchableOpacity>
             <TouchableOpacity
                    style={styles.button}
                    onPress={taskComplete}
            >
                    <Text>{task.completed? "mark not completed" : "mark completed" }</Text>
            </TouchableOpacity>
            {/* { product && product.data.map((item, idx)=> <Text key={idx}>{item}</Text>)} */}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "red",
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 20,
    },
    completed: {
        backgroundColor: "green",
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00eaFF',
        padding: 10
    },
    buttonText: {
        fontSize: 30,
    }
})
