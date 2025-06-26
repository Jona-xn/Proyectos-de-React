import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App()  {
  const [tiempo, setTiempo] = useState(10);
  const [terminado, setTerminado] = useState(false);

  useEffect(() => {
    if (tiempo > 0) {
      const intervalo = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo - 1);
      }, 1000);

      return () => clearInterval(intervalo);
    } else {
      setTerminado(true);
    }
  }, [tiempo]);

  return (
    <View style={styles.container}>
      {terminado ? (
        <Text style={styles.mensaje}>¡Tiempo terminado!</Text>
      ) : (
        <Text style={styles.temporizador}>{tiempo}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temporizador: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mensaje: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
});