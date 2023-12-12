import { StyleSheet, Text } from "react-native"
import Card from './Card'

const CategoryItem = ({category}) => {
  return (
    <Card style={styles.cardContainer}>
      <Text style={styles.text}>{category}</Text>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#E4DDDD",
    padding: 20,
    margin: 10,
  },
  text: {
    fontSize: 12
  }
})