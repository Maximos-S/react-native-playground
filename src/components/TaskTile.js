import React from 'react'
import { Pressable, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import {COMPLETE_TASK} from '../store/index'


export default function TaskTile({task, navigation, homeScreen}) {
    console.log(navigation)
    const completed = useSelector(state => {
        let completedRes;
        state.tasks[task.category].forEach(task1 => {
            if (task1.title === task.title) {
                completedRes = task.completed
            }
        })

        return completedRes
    })

    let tileStyle = "dailyStyle"

    if (task.category === "Weekly") {
        tileStyle = "weeklyStyle"
    } else if (task.category === "Monthly") {
        tileStyle = "monthlyStyle"
    }

    const dispatch = useDispatch()

    const handlePress = e => {
        navigation.navigate("TaskDetail", {task: task})
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
            {completed && homeScreen ?
                <></>
                :
                <View style={completed? styles.completed : styles.visible}>
                    <Pressable  
                        onPress={handlePress} 
                        style={styles[tileStyle]}>
                        <View style={styles.tileTitle}>
                            <Text style={tileStyle === "monthlyStyle" ? styles.monthlyText : styles.categoryText}>{task.category}</Text>
                            <Text numberOfLines={2} style={styles.titleText}>{task.title}</Text>
                        </View>
                        <View style={styles.tileButton}>
                            <TouchableOpacity
                                    style={styles.button}
                                    onPress={taskComplete}
                            >
                                    <Text>{task.completed? "mark not completed" : "mark completed" }</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    visible: {
        height: "90%",
    },
    completed: {
        // visibility: "none",
        opacity: 0.5,
        height: "90%",
    },
    dailyStyle: {
        height: "100%",
        margin: 10,
        backgroundColor:  "tomato",
        width: 130,
        borderRadius: 10,
    },
    weeklyStyle: {
        height: "100%",
        margin: 10,
        backgroundColor: "dodgerblue",
        width: 130,
        borderRadius: 10,
    },
    monthlyStyle: {
        height: "100%",
        margin: 10,
        backgroundColor:  "turquoise",
        width: 130,
        borderRadius: 10,
    },
    categoryText: {
        fontWeight: "bold",
        color: 'gold',
        fontSize: 20
    },
    monthlyText: {
        fontWeight: "bold",
        color: "tomato",
        fontSize: 20
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 25,
    },
    button: {
        height: "100%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: "100%",
        backgroundColor: "gold",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    tileTitle: {
        flex: 2,
        padding: 20,
        // backgroundColor: "blue",
    },
    tileButton: {
        flex: 1,
        // backgroundColor: "purple",
    }
})
