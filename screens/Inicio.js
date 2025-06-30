import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function Inicio() {
  const nav = useNavigation();

  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  return (
    <SafeAreaView style={estilos.contenedor}>
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

        <TouchableOpacity style={estilos.botonIniciar}>
          <Text style={estilos.textoBotonIniciar}>Iniciar sesión</Text>
        </TouchableOpacity>

        {/* ✅ Navegación a la pantalla PantallaP */}
        <TouchableOpacity onPress={() => nav.navigate('PantallaP')}>
          <Text style={estilos.botonInvitado}>Entrar como invitado</Text>
        </TouchableOpacity>

        <Text style={estilos.textoRedes}>O inicia sesión con una red social</Text>

        <TouchableOpacity style={estilos.botonGoogle}>
          <Text style={estilos.textoGoogle}>Google</Text>
        </TouchableOpacity>

        <View style={estilos.opcionesFinales}>
          <Text style={estilos.textoOlvido}>¿Olvidaste tu contraseña? </Text>
          <TouchableOpacity>
            <Text style={estilos.textoRegistro}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFD8AD',
    alignItems: 'center',
    paddingHorizontal: 30,
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
  botonGoogle: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  textoGoogle: {
    fontWeight: 'bold',
    color: '#000',
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
});
