import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import categories_data from  '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

const categoriesScreen = () => {
  
  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} />
  )

  return(
    <>
    <Header title="Categorias" />
    <FlatList
         data={categories_data}
         renderItem={renderCategoryItem}
         keyExtractor={item=>item}
    />
    </>
  )
}

export default categoriesScreen

const styles = StyleSheet.create({
})