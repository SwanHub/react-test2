import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

import Home from './components/Home'
import Feed from './components/Feed'
import Profile from './components/Profile'

export default function App() {

  const createListElementsFromList = (list) => {
    return list.map((el, i) => {
      return <Text key={i}>{el}</Text>
    })
  }

  const groceryList = [
    "Banana",
    "Orange",
    "Mango",
    "Crumbs of Bacon",
  ]
  
  return (
    <View style={styles.container}>
      <View style={styles.groceryItems}>
        {createListElementsFromList(groceryList)}
        <Text style={styles.funky}>Here we are baby adding  YOOOOOO!!! more text!</Text>
      </View> 
      <Button title="First button" icon={{ name: 'code'}} />
      <Image style={styles.pic} source={require('./assets/slackspace.png')} />
      <Home />

      <Feed />
      <Profile />
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
  groceryItems: {
    textAlign: 'left',
    marginLeft: '5%',
  },
  funky: {
    color: 'red',
  },
  pic: {
    marginLeft: '20%',
    height: 100,
    width: 100,
  }
});
