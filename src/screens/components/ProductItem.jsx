import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProductItem = ({product}) => {
  return (
    <TouchableOpacity style={styles.containerProdcutItem}>
      <Text style={styles.productTitle}>{product.title}</Text>
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({})