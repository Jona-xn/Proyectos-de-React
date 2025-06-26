import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [ultimoClick, setUltimoClick] = useState(Date.now());
  
  useEffect(() => {
    const intervalo = setInterval(() => {
    if (Date.now() - ultimoClick > 5000) { Alert.alert('Estas ahi???'); }
    }, 5000);
    
  return () => clearInterval(intervalo);
  }, [ultimoClick]);
  function Click() {
    setUltimoClick(Date.now());
  }
  return (
    <View style={styles.container}>
      <Text title={styles.texto}>Presiona el boton para evitar la alerta¡¡¡ xd</Text>
      <Button title='Click me' onPress={Click} />
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
