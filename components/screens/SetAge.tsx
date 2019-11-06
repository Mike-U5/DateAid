import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';

export class SetAge extends Component<{name: string, navigation: any}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Loading...</Text>
				<StartMenuButton onPress={() => this.props.navigation.navigate('SetInterests')} text='Go To Interests'/>
			</View>
		);
	}
}
