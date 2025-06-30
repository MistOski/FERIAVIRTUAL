Bienvenido a 'FERIAVIRTUAL', un proyecto enfocado en la compra y venta de productos artesanales de Chiloé.

En el desarrollo de la aplicación se hizo uso de Node.js y React Native.

Actualmente se encuentran disponibles los apartados de inicio de sesión (Inicio.js), página principal (PantallaP.js) y el carrito de compras (Carrito.js).

Se creo una carpeta llamada "PROYECTO", dentro de ella una carpeta con el nombre del proyecto la cual es "FERIAVIRTUAL" y dentro de este se muestran todos los archivos necesarios para su desarrollo y ejecucion:

C:\PROYECTO\FERIAVIRTUAL             
├── assets/                   # De momento no se han integrado imagenes  
│ 
├── screens/                  # Se creó una carpeta donde ubicar los diferentes apartados.
│ 
│   ├── Inicio.js             # Pantalla de inicio/login, se busca actualizar el apartado de Google por su imagen oficial.
│ 
│   ├── PantallaP.js          # Pantalla principal con las publicaciones.
│ 
│   ├── Carrito.js            # Pantalla del carrito.
│ 
├── App.js                    # El archivo de entrada principal donde se conectan los apartados y se carga el react native.
│ 
└── README.md                 # Archivo que muestra el texto actual.

Para iniciar el proyecto hay que ir al terminal y escribir:

npm install # Se obtienen los requisitos necesarios para la elaboración de la aplicación.

cd C:\PROYECTO\FERIAVIRTUAL # Para asegurarse de que se está ejecutando la ruta correcta.

npx expo start # Para que se ejecute el proyecto y el terminal muestre el código QR que permitirá ejecutar la aplicación a través del celular.

npx expo start --clear # En caso de cambios, con este comando se inicia limpiamente de nuevo el proyecto.


Por el momento se opto por hacer unicamente funcional el boton de "Entrar como invitado", una funcion que le permitira a los usuariosi hechar un vistazo a los productos disponibles, pero no podran comprar o acceder a los medios de comunicacion con los vendedores y otras funciones que requieran de un usuario registrado.

Una vez ingresado como invitado, se dirigirá al apartado principal donde se muestran las publicaciones, iconos de notificaciones, carrito y perfil del usuario, donde al presionar su nombre habrá un menú desplegable con opciones (aún no se ha implementado). Por ahora es accesible el carrito de compras; puede dirigirse a él presionando el icono del carrito dentro del mismo apartado principal en la parte superior a la derecha de la pantalla. Ahí se muestran los artículos que el usuario haya agregado para su compra. Hay una opción para ingresar la ubicación directamente y un apartado de productos que le puedan interesar al usuario. Se encuentra funcional el botón "Atrás" en la parte superior izquierda de la pantalla, el cual permite retroceder al apartado principal nuevamente.

Si bien no se han implementado sus respectivas funciones, a varios textos e iconos se les ha integrado la función "TouchableOpacity", la cual, al presionarlos, se obtiene una respuesta visual.

Se han importado diferentes requisitos para desarrollar debidamente la aplicación:

import { useNavigation } from '@react-navigation/native'; #permite la navegación entre pantallas, tal como el uso de GoBack, la cual permite retroceder al apartado anterior.

import { Ionicons } from '@expo/vector-icons'; # Se importan los iconos a usar (carrito de compras, notificaciones, etc.).

import { useState } from 'react'; # Permite el cambio de valores, como por ejemplo la contraseña al alternar entre mostrar/ocultar.

import React from 'react'; # Biblioteca esencial para el desarrollo de la interfaz.

import {
  SafeAreaView, # Permite que la interfaz se ajuste a la pantalla del usuario.
  StyleSheet, # Define los estilos de un objeto, permite que los estilos se creen una sola vez y se reutilicen.
  Text, # Muestra el texto.
  View, # Agrupa textos
  TouchableOpacity, # Agrega una respuesta visual al tacto del usuario.
  ScrollView, # Permite desplazarse dentro de la pantalla.
  TextInput, # Permite al usuario escribir dentro de la aplicación.  
  Image # Permite cargar imágenes
}

