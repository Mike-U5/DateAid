import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { StartMenuButton } from '../features/StartMenuButton';

export class SetAge extends Component<{name: string, navigation: any}> {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: '#ffc0c0'
		}
	}

	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Loading...</Text>
			</View>
		);
	}
}
