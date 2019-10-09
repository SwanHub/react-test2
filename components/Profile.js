import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {

  return (
    <View style={styles.container}>
        <Text style={styles.funky}>Profile!</Text>
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
