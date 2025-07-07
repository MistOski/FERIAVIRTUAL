import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CartProvider } from './context/ContenidoCarrito';

import Inicio from './screens/Inicio';
import PantallaP from './screens/PantallaP';
import Carrito from './screens/Carrito';
import Opciones from './screens/Opciones';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PantallaP" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="PantallaP" component={PantallaP} />
          <Stack.Screen name="Carrito" component={Carrito} />
          <Stack.Screen name="Opciones" component={Opciones} />
          <Stack.Screen name="Inicio" component={Inicio} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}