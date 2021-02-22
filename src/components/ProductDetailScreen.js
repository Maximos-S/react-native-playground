import React from 'react'
import { ImageComponent, StyleSheet, Text, View } from 'react-native'
import { useParams } from 'react-router-native'

export default function ProductDetailScreen({productName}) {
    const params = useParams()
    return (
        <View>
            {/* <ImageComponent /> */}
            <Text>{params.productName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
