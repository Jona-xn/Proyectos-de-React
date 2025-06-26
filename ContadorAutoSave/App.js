import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const cargarContador = async () => {
      try {
        const valorGuardado = await AsyncStorage.getItem('contador');
        if (valorGuardado !== null) {
          setContador(parseInt(valorGuardado));
        }
      } catch (error) {
        console.error('Error al cargar el contador:', error);
      }
    };

    cargarContador();
  }, []);

  useEffect(() => {
    const guardarContador = async () => {
      try {
        await AsyncStorage.setItem('contador', contador.toString());
      } catch (error) {
        console.error('Error al guardar el contador:', error);
      }
    };

    guardarContador();
  }, [contador]);

  const incrementar = () => {
    setContador(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={incrementar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});