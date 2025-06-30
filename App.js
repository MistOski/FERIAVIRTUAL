import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './screens/Inicio';
import PantallaP from './screens/PantallaP';
import Carrito from './screens/Carrito';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="PantallaP" component={PantallaP} />
        <Stack.Screen name="Carrito" component={Carrito} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}