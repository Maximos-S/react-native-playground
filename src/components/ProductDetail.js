import React from 'react'
import { View, Text } from 'react-native'

export default function ProductDetail({product}) {
    console.log("prodcut", product)
    return (
        <View>
            <Text>{product}</Text>
            {/* { product && product.data.map((item, idx)=> <Text key={idx}>{item}</Text>)} */}
        </View>
    )
}
