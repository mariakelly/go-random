/**
 * Class to show One Random something.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  PickerIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var moment = require('moment');
var Chance = require('chance');
var chance = new Chance();

var PickerIOSItem = PickerIOS.Item;

var styles = StyleSheet.create({
	button: {
		backgroundColor: '#222',
		padding: 10,
		marginTop: 20,
	},
  description: {
    fontSize: 22,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  dateDisplay: {
  	fontSize: 34,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  }
});

var OneRandom = React.createClass({
	getInitialState: function() {
		return {
			mode: 'date',
			date: chance.date(),
			number: 0
		};
	},
	getNewRandomNumber: function(){
		this.setState({
			date: chance.integer()
		});
	},
	getNewRandomDate: function(){
		this.setState({
			date: chance.date()
		});
	},
	render: function () {
		if (this.state.mode == 'date') {
			var display = moment(this.state.date).format("MMMM Do");	
		} else if (this.state.mode == 'number') {
			var display = this.state.number;	
		}
		/*
			Trying to get a picker to display...
		    <View style={{backgroundColor: '#ffffff'}}>
		      <PickerIOS
					  selectedValue={this.state.mode}
					  onValueChange={(md) => this.setState({mode: md})}>
					  <PickerIOSItem key="date" label="Date" value="date" />
					  <PickerIOSItem key="number" label="Number" value="number" />
					</PickerIOS>
				</View>
		 */

    return (
      <View style={styles.container}>
        <Text style={[styles.description,styles.dateDisplay]}>
        	{display}
      	</Text>
	      <TouchableHighlight style={styles.button} onPress={this.getNewRandomDate}>
	      	<Text style={styles.description}>
	      		New Random Date
      		</Text>
      	</TouchableHighlight>
      </View>
    );
	}
});

module.exports = OneRandom;