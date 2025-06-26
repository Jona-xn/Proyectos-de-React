import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [mensaje, setMensaje] = useState(true);

  useEffect (() =>{
    const Temporizador = setTimeout(() => {
      setMensaje(false);
    }, 5000);
    }, []);

  return (
    <View style={styles.container}>
     { mensaje && <Text style={styles.texto}>Bienvenido</Text>}
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});
