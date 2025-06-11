import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function App()  {
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu texto aquí"
        value={texto}
        onChangeText={setTexto}
      />
      
      {texto.length > 50 && (
        <Text style={styles.advertencia}>¡Paraaaaaaaaa, estas escribiendo mucho!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  advertencia: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
});
