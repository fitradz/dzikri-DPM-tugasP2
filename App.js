import React from 'react';
import { View, StyleSheet } from 'react-native';
import Bagian1 from './src/Bagian1';
import Bagian2 from './src/Bagian2'; 

const App = () => {
  return (
    <View style={styles.container}>
      <Bagian1 />
      <Bagian2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
