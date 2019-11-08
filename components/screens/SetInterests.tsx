import React, { Component } from 'react';
import Interests from '../features/Interests';
import { View, Image, TouchableHighlight } from 'react-native';

export class SetInterests extends Component<{name: string, navigation: any}> {
static navigationOptions = ({ navigation }) => ({
	headerRight: (
		<TouchableHighlight onPress={() => navigation.navigate('PickActivity')} style={{width: 20, height: 20, marginEnd: 25}}>
			<Image source={require('../../assets/material/right-arrow.png')} style={{width: 20, height: 20, tintColor: '#fff'}}	/>
		</TouchableHighlight>
	),
	headerLeft: (
		<TouchableHighlight onPress={() => navigation.goBack()} style={{width: 20, height: 20, marginStart: 25}}>
			<Image source={require('../../assets/material/left-arrow.png')} style={{width: 20, height: 20, tintColor: '#fff'}}	/>
		</TouchableHighlight>
	),
})

render() {
	return (
		<View style={{alignItems: 'center'}}>
			<Interests></Interests>
		</View>
	);
}
}
