import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image // Necesario para los placeholders de imagen
} from 'react-native';

export default function Carrito() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.contenedor}>
      {/* Encabezado con botón de retroceso */}
      <View style={estilos.encabezado}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={estilos.botonAtras}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={estilos.tituloPagina}>Mi Carrito</Text>
      </View>

      <ScrollView contentContainerStyle={estilos.scrollContenido}>
        {/* Contenido del carrito */}
        <Text style={estilos.tituloSeccion}>Carrito de Compras</Text>

        {/* --- Ítem de Producto 1 --- */}
        <View style={estilos.itemCarrito}>
          <View style={estilos.imagenPlaceholder} /> {/* Placeholder para la imagen */}
          <View style={estilos.infoItem}>
            <Text style={estilos.nombreProducto}>Nombre del Producto 1</Text>
            <Text style={estilos.descripcionProducto}>Descripción breve del producto 1. Color: Negro. Talla: L.</Text>
            <Text style={estilos.precioProducto}>$15.000</Text>
            <TouchableOpacity style={estilos.botonEliminar}>
              <Text style={estilos.textoEliminar}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* --- Ítem de Producto 2 --- */}
        <View style={estilos.itemCarrito}>
          <View style={estilos.imagenPlaceholder} /> {/* Placeholder para la imagen */}
          <View style={estilos.infoItem}>
            <Text style={estilos.nombreProducto}>Nombre del Producto 2</Text>
            <Text style={estilos.descripcionProducto}>Descripción breve del producto 2. Color: Blanco. Talla: M.</Text>
            <Text style={estilos.precioProducto}>$25.000</Text>
            <TouchableOpacity style={estilos.botonEliminar}>
              <Text style={estilos.textoEliminar}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* --- Ítem de Producto 3 --- */}
        <View style={estilos.itemCarrito}>
          <View style={estilos.imagenPlaceholder} /> {/* Placeholder para la imagen */}
          <View style={estilos.infoItem}>
            <Text style={estilos.nombreProducto}>Nombre del Producto 3</Text>
            <Text style={estilos.descripcionProducto}>Descripción breve del producto 3. Color: Rojo. Talla: S.</Text>
            <Text style={estilos.precioProducto}>$10.000</Text>
            <TouchableOpacity style={estilos.botonEliminar}>
              <Text style={estilos.textoEliminar}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de Ubicación */}
        <View style={estilos.seccionUbicacion}>
          <Text style={estilos.tituloUbicacion}>Ingresa tu ubicación</Text>
          <View style={estilos.contenedorInputUbicacion}>
            <Ionicons name="location-outline" size={20} color="#999" style={estilos.iconoUbicacion} />
            <TextInput
              placeholder="Escribe tu dirección"
              placeholderTextColor="#999"
              style={estilos.inputUbicacion}
            />
          </View>
        </View>

        {/* Botón de Proceder con la Compra */}
        <TouchableOpacity style={estilos.botonProceder}>
          <Text style={estilos.textoBotonProceder}>Proceder con la compra</Text>
        </TouchableOpacity>

        {/* Productos que te interesaron */}
        <Text style={estilos.tituloInteresados}>Productos que te interesaron</Text>
        <View style={estilos.contenedorSugerencias}>
          {/* Sugerencia 1 */}
          <View style={estilos.tarjetaSugerencia}>
            <View style={estilos.imagenSugerenciaPlaceholder} />
            <Text style={estilos.textoTituloSugerencia}>Producto Sugerido 1</Text>
            <Text style={estilos.textoPrecioSugerencia}>$X.XXX</Text>
          </View>
          {/* Sugerencia 2 */}
          <View style={estilos.tarjetaSugerencia}>
            <View style={estilos.imagenSugerenciaPlaceholder} />
            <Text style={estilos.textoTituloSugerencia}>Producto Sugerido 2</Text>
            <Text style={estilos.textoPrecioSugerencia}>$X.XXX</Text>
          </View>
          {/* Sugerencia 3 */}
          <View style={estilos.tarjetaSugerencia}>
            <View style={estilos.imagenSugerenciaPlaceholder} />
            <Text style={estilos.textoTituloSugerencia}>Producto Sugerido 3</Text>
            <Text style={estilos.textoPrecioSugerencia}>$X.XXX</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFD8AD', // Color de fondo de las otras pantallas
  },
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#FFD8AD',
  },
  botonAtras: {
    paddingRight: 10,
  },
  tituloPagina: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    flex: 1, // Para que el título ocupe el espacio restante
  },
  scrollContenido: {
    paddingHorizontal: 20,
    paddingBottom: 30, // Espacio al final del scroll
  },
  tituloSeccion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    marginBottom: 20,
  },
  itemCarrito: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  imagenPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#E0E0E0', // Gris claro para el placeholder de imagen
    borderRadius: 8,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  infoItem: {
    flex: 1,
  },
  nombreProducto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  descripcionProducto: {
    fontSize: 13,
    color: '#7A7A7A',
    marginBottom: 6,
  },
  precioProducto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6624', // Naranja para el precio
    marginBottom: 10,
  },
  botonEliminar: {
    backgroundColor: '#FF6624', // Naranja para el botón eliminar
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start', // Para que el botón no ocupe todo el ancho
  },
  textoEliminar: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  seccionUbicacion: {
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tituloUbicacion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  contenedorInputUbicacion: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 5,
  },
  iconoUbicacion: {
    marginRight: 10,
  },
  inputUbicacion: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  botonProceder: {
    backgroundColor: '#FF6624', // Naranja para el botón principal
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    shadowColor: '#FF6624',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  textoBotonProceder: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tituloInteresados: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  contenedorSugerencias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Para que las tarjetas se envuelvan si no caben
  },
  tarjetaSugerencia: {
    width: '32%', // Aproximadamente un tercio del ancho para 3 en una fila con espaciado
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  imagenSugerenciaPlaceholder: {
    width: '100%',
    height: 70,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  textoTituloSugerencia: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 4,
  },
  textoPrecioSugerencia: {
    fontSize: 12,
    color: '#FF6624',
    fontWeight: 'bold',
  },
});