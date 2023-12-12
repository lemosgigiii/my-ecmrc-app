import { StyleSheet, Text, View, FlatList} from 'react-native'
import Header from '../screens/components/Header'
import categories_data from '../screens/data/categories_data.json'
import CategoryItem from '../screens/components/CategoryItem'

const categoriesScreen = ({item}) => {

    const renderCategoryItem = ({item}) => (
      <CategoryItem category={item} />
    )
  return (
    <>
    <Header title="Categories" />
    <FlatList
       data={categories_data}
       renderItem={renderCategoryItem}
       keyExtractor={item=>item}
       />
       </>
  )
}

export default categoriesScreen

const styles = StyleSheet.create({})