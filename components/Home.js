import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {

  return (
    <View style={styles.container}>
        <Text style={styles.funky}>Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: '10%',
    textAlign: 'left',
  },
});
