import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [ultimoClick, setUltimoClick] = useState(Date.now());
  
  useEffect(() => {
    const intervalo = setInterval(() => {
    if (Date.now() - ultimoClick > 5000) {
        setContador(0);
      }
    }, 1000);
    return () => clearInterval(intervalo);
  }, [ultimoClick]);
  function sumarContador() {
    setContador(contador + 1);
  }
  const Click = () => {
    setUltimoClick(Date.now());
    sumarContador();
  };
  return (
    <View style={styles.container}>
      <Text title={styles.texto} >{contador}</Text>
      <Button title='Sumar' onPress={Click} />
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
