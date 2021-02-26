import React, {useState} from 'react'
import { View, Text , StyleSheet, Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from './ProductDetailScreen';



export default function ProductDetail({product,navigation}) {
    const [detailRevealed, setDetailRevealed] = useState(false)
    const productReroute = () => {
        setDetailRevealed(!detailRevealed)
    }
      const Stack = createStackNavigator()

    return (

        <View style={styles.item}>
            {detailRevealed && <ProductDetailScreen setDetailRevealed={setDetailRevealed} product={product}/>}
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
