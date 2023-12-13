import { StyleSheet, Text, View, FlatList } from 'react-native'
import products_data from './data/products_data.json'
import ProductItem from '../components/ProductItem'

const ProductsByCategoryScreen = () => {
  
  const renderProductItem = ({item}) => (
      <ProductItem product={item} />
  )

  return (
      <FlatList
        data={products_data}
        renderItem= {renderProductItem}
        keyExtractor={item=>item.id}
    />
  )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({
  
})