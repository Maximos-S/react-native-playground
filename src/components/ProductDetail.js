import React, {useState, useEffect} from 'react'
import { View, Text , StyleSheet, Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from './ProductDetailScreen';
import {useDispatch, useSelector} from 'react-redux'

import {COMPLETE_TASK} from '../store/index'


export default function ProductDetail({product,navigation}) {
    const [detailRevealed, setDetailRevealed] = useState(false)
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


    // useEffect(()=> {
    //     console.log("switch")
    //     setCompleted(task.completed)
    // },[task])

    const dispatch = useDispatch()

    const productReroute = () => {
        setDetailRevealed(!detailRevealed)
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
            {detailRevealed && <ProductDetailScreen setDetailRevealed={setDetailRevealed} task={task}/>}
            <Button title={task.title} onPress={productReroute}/>
            <Button title={task.completed? "mark not completed" : "mark completed" } onPress={taskComplete}/>
            {/* { product && product.data.map((item, idx)=> <Text key={idx}>{item}</Text>)} */}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "goldenrod",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 20,
    },
    completed: {
        backgroundColor: "yellow",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 20,
    }
})
