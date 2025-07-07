import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image
} from 'react-native';

import { useCart } from '../context/ContenidoCarrito';
import productsData from '../utils/products.json';

export default function Inicio() {
  const nav = useNavigation();
  const { addToCart } = useCart();

  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const productos = productsData;

  return (
    <SafeAreaView style={estilos.contenedor}>
      <ScrollView contentContainerStyle={estilos.scrollContent}>
        <View style={estilos.espacioLogo} />

        <Text style={estilos.título}>Iniciar sesión</Text>

        <View style={estilos.formulario}>
          <Text style={estilos.etiqueta}>Correo electrónico</Text>
          <TextInput
            style={estilos.entrada}
            placeholder="ejemplo@gmail.com"
            placeholderTextColor="#7A7A7A"
            value={correo}
            onChangeText={setCorreo}
          />

          <Text style={estilos.etiqueta}>Contraseña</Text>
          <View style={estilos.contenedorContraseña}>
            <TextInput
              style={estilos.entradaContraseña}
              placeholder="••••••••"
              placeholderTextColor="#7A7A7A"
              secureTextEntry={!mostrarContraseña}
              value={contraseña}
              onChangeText={setContraseña}
            />
            <TouchableOpacity onPress={() => setMostrarContraseña(!mostrarContraseña)}>
              <Text style={estilos.botonMostrar}>
                {mostrarContraseña ? 'Ocultar' : 'Mostrar'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={estilos.botonIniciar} onPress={() => {
            nav.navigate('PantallaP');
          }}>
            <Text style={estilos.textoBotonIniciar}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => nav.navigate('PantallaP')}>
            <Text style={estilos.botonInvitado}>Entrar como invitado</Text>
          </TouchableOpacity>

          <Text style={estilos.textoRedes}>O inicia sesión con una red social</Text>

          <View style={estilos.botonGooglePlaceholder} />
          <Text style={estilos.textoGoogle}>Google</Text>

          <View style={estilos.opcionesFinales}>
            <Text style={estilos.textoOlvido}>¿Olviaste tu contraseña? </Text>
            <TouchableOpacity>
              <Text style={estilos.textoRegistro}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={estilos.tituloProductos}>Explora nuestros productos</Text>
        <View style={estilos.contenedorProductos}>
          {productos.map(producto => (
            <View key={producto.id} style={estilos.tarjetaProducto}>
              <View style={estilos.imagenProductoPlaceholder} />
              <Text style={estilos.nombreProducto}>{producto.nombre}</Text>
              <Text style={estilos.precioProducto}>{producto.precio}</Text>
              <TouchableOpacity
                style={estilos.botonAnadir}
                onPress={() => addToCart()}
              >
                <Text style={estilos.textoBotonAnadir}>Añadir al carrito</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFD8AD',
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  espacioLogo: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
  título: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
  },
  formulario: {
    width: '100%',
    marginBottom: 30,
  },
  etiqueta: {
    color: '#FF6624',
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 12,
  },
  entrada: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 10,
    paddingVertical: 6,
    color: '#000',
  },
  contenedorContraseña: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 6,
  },
  entradaContraseña: {
    flex: 1,
    color: '#000',
  },
  botonMostrar: {
    color: '#7A7A7A',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  botonIniciar: {
    backgroundColor: '#FF6624',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 25,
    alignItems: 'center',
  },
  textoBotonIniciar: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botonInvitado: {
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
    fontWeight: 'bold',
  },
  textoRedes: {
    textAlign: 'center',
    color: '#000',
    marginVertical: 20,
  },
  botonGooglePlaceholder: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    width: '100%',
    height: 40,
    marginBottom: 10,
  },
  textoGoogle: {
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
  },
  opcionesFinales: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  textoOlvido: {
    color: '#7A7A7A',
  },
  textoRegistro: {
    color: '#FF6624',
    fontWeight: 'bold',
  },
  tituloProductos: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  contenedorProductos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  tarjetaProducto: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  imagenProductoPlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  nombreProducto: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#000',
  },
  precioProducto: {
    fontSize: 14,
    color: '#FF6624',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  botonAnadir: {
    backgroundColor: '#FF6624',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  textoBotonAnadir: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});