import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';
//import Icon from '../../assets/material/right-arrow.png';


export class SetType extends Component<{name: string, navigation: any}> {
static navigationOptions = ({ navigation }) => ({
		headerRight: (
			<TouchableHighlight onPress={() => navigation.navigate('SetInterests')}>
				<Image source={require('../../assets/material/right-arrow.png')} style={{width: 20, height: 20, tintColor: '#fff', marginEnd: 25}}	/>
			</TouchableHighlight>
		),
	})

	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Loading...</Text>
				<StartMenuButton onPress={() => this.props.navigation.navigate('SetInterests')} text='Go To Interests'/>
			</View>
		);
	}
}
