import React from 'react';
import { View, StyleSheet } from 'react-native';

const Bagian2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'purple', 
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'turquoise', 
  },
});

export default Bagian2;
