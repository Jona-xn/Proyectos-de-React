import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(()=> {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(intervalo);
  })

  return (
    <View style={styles.container}>
      <Text title={styles.texto} >{hora}</Text>
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
