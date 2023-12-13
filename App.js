import { ActivityIndicator } from 'react-native';
import CategoriesScreen from './src/screens/screens/CategoriesScreen'
import ProductsByCategoryScreen from './src/screens/screens/ProductsByCategoryScreen'
import {useFonts} from 'expo-font'

export default function App() {
     
  const [fontLoaded] = useFonts({
    'Alegreya-regular' : require('./assets/fonts/Alegreya-Regular.ttf'),
    'Alegreya-Bold' : require('./assets/fonts/Alegreya-Bold.ttf'),
 })

 if(!fontLoaded) return <ActivityIndicator />


  return (
    <ProductsByCategoryScreen /> 
  );
}

