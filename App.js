import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaP from './screens/PantallaP';
import Inicio from './screens/Inicio';
import Carrito from './screens/Carrito';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="PantallaP" component={PantallaP} />
        <Stack.Screen name="Carrito" component={Carrito} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}