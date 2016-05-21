/**
 * Class to show More Tab.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
 
var styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#654987'
  }
});
 
class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          About GoRandom
        </Text>
        <Text style={styles.description}>
          GoRandom was created to keep things interesting.
        </Text>
      </View>
    );
  }
}
 
module.exports = More;