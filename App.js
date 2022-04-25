import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from './src/components';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}> Hello</Text>
      <Button>HELLO</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
});

export default App;
