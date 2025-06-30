import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

export default function PantallaP() {
  const navigation = useNavigation(); // Obtén el objeto de navegación

  // operador ternario para nombre usuario o invitado
  return (
    <View style={estilos.contenedor}>

      <View style={estilos.encabezado}>
        <View style={estilos.circuloUsuario} />
        <Text style={estilos.nombre}>Ignacio Millapani</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
        {/* === MODIFICACIÓN AQUÍ: Botón del Carrito para navegar a Carrito.js === */}
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')}>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={estilos.buscadorContenedor}>
        <TextInput
          placeholder="Buscar"
          placeholderTextColor="#999"
          style={estilos.buscador}
        />
      </View>

      <TouchableOpacity style={estilos.filtrosContenedor}>
        <Ionicons name="filter" size={20} color="black" />
        <Text style={estilos.filtrosTexto}>Filtros</Text>
      </TouchableOpacity>


    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFD8AD',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  circuloUsuario: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#999',
  },
  nombre: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buscadorContenedor: {
    marginBottom: 10,
  },
  buscador: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 14,
  },
  filtrosContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  filtrosTexto: {
    marginLeft: 6,
    fontWeight: 'bold',
    fontSize: 14,
  },
});