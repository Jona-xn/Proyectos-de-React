import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  
  const nombres = ['Ana', 'Juan', 'Carlos', 'Lucía', 'Mario', 'Laura', 'Pedro', 'Juanita', 'Carmen'];

  const filtrarNombres = () => {
    return nombres.filter((nombre) =>
      nombre.toLowerCase().includes(texto.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe para buscar..."
        value={texto}
        onChangeText={setTexto}
      />
      
      <FlatList
        data={filtrarNombres()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
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
  item: {
    fontSize: 18,
    padding: 5,
  },
});