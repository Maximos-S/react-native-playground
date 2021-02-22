import React from 'react'
import { View, Text , StyleSheet} from 'react-native'

export default function ProductDetail({product}) {
    return (
        <View style={styles.item}>
            <Text>{product}</Text>
            {/* { product && product.data.map((item, idx)=> <Text key={idx}>{item}</Text>)} */}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "goldenrod",
        padding: 20,
        marginVertical: 8,
    }
})
