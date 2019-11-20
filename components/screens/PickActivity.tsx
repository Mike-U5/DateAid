import React, { Component } from 'react';
import Activities from '../features/Activities';
import { View, Image, TouchableHighlight } from 'react-native';
import { Colors } from '../../enums/Colors';

export class PickActivity extends Component<{name: string, navigation: any}> {
	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerLeft: (
			<TouchableHighlight onPress={() => navigation.goBack()} style={{width: 40, height: 40, marginStart: 25, padding: 10}}>
				<Image source={require('../../assets/material/left-arrow.png')} style={{width: 20, height: 20, tintColor: Colors.White}}	/>
			</TouchableHighlight>
		),
	})

	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Activities />
			</View>
		);
	}
}
