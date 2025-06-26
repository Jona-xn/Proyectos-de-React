import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function App()  {
  const [color, setColor] = useState('#ffffff');
  const [intervaloActivo, setIntervaloActivo] = useState(true);

  const coloresAleatorios = [
    '#FF6347', '#3CB371', '#1E90FF', '#FFD700', '#8A2BE2', '#FF1493',
    '#00CED1', '#FF8C00', '#ADFF2F', '#F08080'
  ];

  const cambiarColor = () => {
    const colorAleatorio = coloresAleatorios[Math.floor(Math.random() * coloresAleatorios.length)];
    setColor(colorAleatorio);
  };

  const detenerCambios = () => {
    setIntervaloActivo(false);
  };

  useEffect(() => {
    if (intervaloActivo) {
      const intervalo = setInterval(cambiarColor, 3000);
      return () => clearInterval(intervalo);
    }
  }, [intervaloActivo]);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Button title="Detener cambios" onPress={detenerCambios} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

