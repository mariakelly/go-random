/**
 * Class to show One Random something.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

var moment = require('moment');
var Chance = require('chance');
var chance = new Chance();

var styles = StyleSheet.create({
	button: {
		backgroundColor: '#222',
		padding: 10,
		marginTop: 20,
	},
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  },
  description: {
    fontSize: 22,
    textAlign: 'center',
    color: '#ffffff'
  },
  resultDisplay: {
  	fontSize: 44,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#666',
  },
  picker: {
  	borderColor: 'red',
  	borderWidth: 3
  },
  buttonRow: {
    marginTop: 30,
    flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 340,
  },
  inputRow: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300,
  },
  input: {
    width:100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    padding: 5,
    alignSelf: 'center'
  },
  spacer: {
    height: 154
  },
  buttonRowButton: {
    marginRight:10,
    marginLeft:10,
    width:150,
    backgroundColor: '#555'
  },
  number: {
    fontSize: 80
  },
  activeButton: {
    backgroundColor: 'red'
  },
  mainContent: {
    marginTop: 30,
    flex: 4,
    flexDirection: 'column',
  },
  blockButton: {
    alignSelf: 'stretch',
    width: 300
  }
});

var OneRandom = React.createClass({
	getInitialState: function() {
    var initMin = 0;
    var initMax = 1000;

		return {
			mode: 'number',
			date: chance.date(),
			number: chance.integer({min:initMin,max:initMax}),
      minNumber: initMin,
      maxNumber: initMax
		};
	},
	getNewRandomValue: function(){
    var newRandom;
    switch (this.state.mode) {
      case 'number':
        newRandom = {
          number: chance.integer({min:this.state.minNumber,max:this.state.maxNumber})
        };
        break;
      case 'date':
        newRandom = {
    			date: chance.date()
    		};
        break;
      default:
        break;
    }
		this.setState(newRandom);
	},
	render: function () {
    var numberInputs = <View style={styles.spacer} />;
		if (this.state.mode == 'date') {
			var display = moment(this.state.date).format("MMMM Do");
		} else if (this.state.mode == 'number') {
			var display = this.state.number;
      numberInputs = (
        <View style={styles.inputRow}>
          <Text>Min:</Text>
          <TextInput
            keyboardType={'numeric'}
            style={styles.input}
            onChangeText={(text) => this.setState({minNumber: text})}
            value={this.state.minNumber+''}
          />
          <Text>Max:</Text>
          <TextInput
            keyboardType={'numeric'}
            style={styles.input}
            onChangeText={(text) => this.setState({maxNumber: text})}
            value={this.state.maxNumber+''}
          />
        </View>
      );
		}

		var type = this.state.mode.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableHighlight
            style={[styles.button, styles.buttonRowButton, (this.state.mode == 'date' ? styles.activeButton : {})]}
            onPress={() => { this.setState({mode: 'date'}); }}>
            <Text style={styles.buttonText}>Date</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.buttonRowButton, (this.state.mode == 'number' ? styles.activeButton : {})]}
            onPress={() => { this.setState({mode: 'number'}); }}>
            <Text style={styles.buttonText}>Number</Text>
          </TouchableHighlight>
        </View>
        {numberInputs}
				<View style={styles.mainContent}>
	        <Text style={[styles.description,styles.resultDisplay,(this.state.mode == 'number' ? styles.number : {})]}>
	        	{display}
	      	</Text>
		      <TouchableHighlight style={[styles.button,styles.blockButton]} onPress={this.getNewRandomValue}>
		      	<Text style={styles.description}>
		      		New Random {type}
	      		</Text>
	      	</TouchableHighlight>
      	</View>
      </View>
    );
	}
});

module.exports = OneRandom;
