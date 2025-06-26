import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ContadorPausaReanudacion ()  {
  const [contador, setContador] = useState(0);
  const [enPausa, setEnPausa] = useState(false);

  useEffect(() => {
    let intervalo;
    if (!enPausa) {
      intervalo = setInterval(() => {
        setContador((prevContador) => prevContador + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [enPausa]);

  const pausar = () => setEnPausa(true);
  const reanudar = () => setEnPausa(false);

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>{contador}</Text>
      <View style={styles.botonesContainer}>
        <Button title="Pausar" onPress={pausar} />
        <Button title="Reanudar" onPress={reanudar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contador: {
    fontSize: 48,
    marginBottom: 20,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
