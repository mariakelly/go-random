/**
 * Class to show Create Tab.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
 
var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#765432'
  }
});
 
class Create extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Create Go Random fx
        </Text>
      </View>
    );
  }
}
 
module.exports = Create;