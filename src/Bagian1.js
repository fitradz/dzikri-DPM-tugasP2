import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Bagian1 = () => {
  return <Text style={styles.text}>saya orang dengan nama dzikri fitra</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, 
  },
});

export default Bagian1;
