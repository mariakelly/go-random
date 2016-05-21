/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

var OneRandom = require('./OneRandom.ios.js');
var More      = require('./More.ios.js');
var Create    = require('./Create.ios.js');

class GoRandom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'one_random'
    };
  };

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'create_new'}
          systemIcon={'bookmarks'}
          onPress={() => {
              this.setState({
                  selectedTab: 'create_new',
              });
          }}>
            <Create/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'one_random'}
          systemIcon={'favorites'}
          onPress={() => {
              this.setState({
                  selectedTab: 'one_random',
              });
          }}>
            <OneRandom/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'more'}
          systemIcon={'more'}
          onPress={() => {
                this.setState({
                    selectedTab: 'more',
                });
          }}>
          <More/>
      </TabBarIOS.Item>
    </TabBarIOS>
  );


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          GoRandom!
        </Text>
        <Text style={styles.instructions}>
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 0,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GoRandom', () => GoRandom);
