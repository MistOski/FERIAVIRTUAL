import { Ionicons } from '@expo/vector-icons';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PantallaP() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.contenedorSafeArea}>
      <ScrollView contentContainerStyle={estilos.scrollContent}>
        <View style={estilos.encabezado}>
          <TouchableOpacity
            style={estilos.perfilTrigger}
          >
            <View style={estilos.circuloUsuario} />
            <Text style={estilos.nombre}>Ignacio Millapani</Text>
          </TouchableOpacity>

          <View style={estilos.iconosDerecha}>
            <TouchableOpacity style={estilos.iconoBtn}>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={estilos.iconoBtn}>
              <Ionicons name="cart-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
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

        <Text style={estilos.tituloSeccion}>Últimas Publicaciones</Text>
        <View style={estilos.publicacionPlaceholder} />
        <View style={estilos.publicacionPlaceholder} />
        <View style={estilos.publicacionPlaceholder} />
        <View style={estilos.publicacionPlaceholder} />
        <View style={estilos.publicacionPlaceholder} />

      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedorSafeArea: {
    flex: 1,
    backgroundColor: '#FFD8AD',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  perfilTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  iconosDerecha: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconoBtn: {
    marginLeft: 15,
    padding: 5,
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
    color: '#000',
  },
  filtrosContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  filtrosTexto: {
    marginLeft: 6,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  publicacionPlaceholder: {
    width: '100%',
    height: 180,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#CCC',
  },
});