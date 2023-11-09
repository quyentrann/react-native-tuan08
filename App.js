import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/home/Home';
import Shop from './src/shop/Shop';
import Drink from './src/drinks/Drink';
import Order from './src/cart/Order';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={({route}) => ({
        headerShown : false
      })}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Shop' component={Shop}/>
        <Stack.Screen name='Drink' component={Drink}/>
        <Stack.Screen name='Order' component={Order}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

