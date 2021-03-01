import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useParams } from 'react-router-native'
import {Icon} from 'react-native-elements'

export default function ProductDetailScreen({task, setDetailRevealed}) {
    const rerouteBack = () => {
        setDetailRevealed(false)
    }
    return (
        <View style={styles.container}>
            <View style={styles.backbutton}>
                <Pressable onPress={rerouteBack}>
                    <Icon name="arrow-left" type="font-awesome" color="#00aced" />
                </Pressable>
                <Text style={styles.title}>{task.title}</Text>
                <View>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/background-image.jpg")} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.productTitle}>{task.completed? "completed" : "not completed" }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: "100%",
        height: "100%",
        paddingTop: 80,
        backgroundColor: "dodgerblue",
        zIndex: 2,
        // position: "absolute",
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 200,
    },
    productTitle: {
        fontSize: 50,
    },
    backbutton: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "goldenrod",
        height: 60,
        padding: 5,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
    },
    infoContainer: {
        flex: 1,
    },
    image: {
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 25,
    }
})
