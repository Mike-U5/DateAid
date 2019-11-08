import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

export class PickActivity extends Component<{name: string, navigation: any}> {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: (
			<TouchableHighlight onPress={() => navigation.goBack()} style={{width: 20, height: 20, marginStart: 25}}>
				<Image source={require('../../assets/material/left-arrow.png')} style={{width: 20, height: 20, tintColor: '#fff'}}	/>
			</TouchableHighlight>
		),
	})

	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Loading...</Text>
			</View>
		);
	}
}
