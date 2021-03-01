import React from 'react'
import { Pressable, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import {COMPLETE_TASK} from '../store/index'


export default function TaskTile({task, navigation}) {

    console.log("navigation", navigation)
    const completed = useSelector(state => {
        let completedRes;
        state.tasks[task.category].forEach(task1 => {
            if (task1.title === task.title) {
                completedRes = task.completed
            }
        })

        return completedRes
    })

    const dispatch = useDispatch()

    const handlePress = e => {
        console.log("hello")
    }

    const taskComplete = e => {
        e.stopPropagation()

        dispatch({
            type: COMPLETE_TASK,
            payload: task
        })
    }


    return (
        <>
        { task.completed? <></> : 
            <Pressable  onPress={handlePress} style={task.category === "Daily" ? styles.dailyContainer: styles.weeklyContainer}>
                <Text style={styles.categoryText}>{task.category}</Text>
                <Text style={styles.titleText}>{task.title}</Text>
                <TouchableOpacity
                        style={styles.button}
                        onPress={taskComplete}
                >
                        <Text>{task.completed? "mark not completed" : "mark completed" }</Text>
                </TouchableOpacity>
            </Pressable>
        }
        </>
        
    )
}

const styles = StyleSheet.create({
    dailyContainer: {
        margin: 10,
        backgroundColor:  "tomato",
        width: 150,
        padding: 20,
        borderRadius: 10,
    },
    weeklyContainer: {
        margin: 10,
        backgroundColor:  "dodgerblue",
        width: 150,
        padding: 20,
        borderRadius: 10,
    },
    categoryText: {
        fontWeight: "bold",
        color: 'gold',
        fontSize: 20
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 15
    }
})
