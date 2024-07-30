import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Calculadora from './src/components/Calculadora';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Calculadora />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  }
});
