import React from 'react'
import { View, Text , StyleSheet, Button} from 'react-native'

export default function ProductDetail({product, history}) {
    const productReroute = () => {
        history.push(`/products/${product}`)
    }
    return (

        <View style={styles.item}>
            <Button title={product} onPress={productReroute}/>
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
    }
})
