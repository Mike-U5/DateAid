import React, { Component } from 'react';
import Interests from '../features/Interests';
import { View, Image, TouchableHighlight } from 'react-native';
import { TempStorage } from '../../helpers/TempStorage';

export class SetInterests extends Component<{name: string, navigation: any}> {

	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerRight: (
			<TouchableHighlight onPress={() => navigation.navigate('PickActivity')} style={{width: 40, height: 40, marginEnd: 25, padding: 10}}>
				<Image source={require('../../assets/material/check.png')} style={{width: 20, height: 20, tintColor: '#fff'}}	/>
			</TouchableHighlight>
		),
		headerLeft: (
			<TouchableHighlight onPress={() => navigation.goBack()} style={{width: 40, height: 40, marginStart: 25, padding: 10}}>
				<Image source={require('../../assets/material/left-arrow.png')} style={{width: 20, height: 20, tintColor: '#fff'}}	/>
			</TouchableHighlight>
		),
	})

	constructor(props: Readonly<{ name: string; navigation: any; }>) {
		super(props);
	}

	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Interests></Interests>
			</View>
		);
	}
}
