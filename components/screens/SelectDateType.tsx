import React, { Component } from 'react';
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { CircleImageRadioSelect } from '../features/CircleImageRadioSelect';
import { Colors } from '../../enums/Colors';
import { HeaderText } from '../elements/HeaderText';

const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '100%'
	}
});

export class SelectDateType extends Component<{navigation: { navigate: (a0: string) => any; }}>  {
	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		/* remove this */
		headerRight: (
			<TouchableHighlight onPress={() => navigation.navigate('SetInterests')} style={{width: 40, height: 40, marginEnd: 25, padding: 10}}>
				<Image source={require('../../assets/material/right-arrow.png')} style={{width: 20, height: 20, tintColor: Colors.White}}	/>
			</TouchableHighlight>
		),
		headerLeft: (
			<TouchableHighlight onPress={() => navigation.navigate('Home')} style={{width: 40, height: 40, marginStart: 25, padding: 10}}>
				<Image source={require('../../assets/material/left-arrow.png')} style={{width: 20, height: 20, tintColor: Colors.White}}	/>
			</TouchableHighlight>
		),
	});

	render() {
		return (
			<View style={style.container}>
				<HeaderText text='Type of Date'/>
				<CircleImageRadioSelect/>
			</View>
		);
	}
}