import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class ShowLocations extends Component<{name: string, value: string, navigation: any}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Loading...</Text>
				<Text>{'All the '}{this.props.navigation.getParam.value}{ 'locations in Zwolle.'} </Text>
			</View>
		);
	}
}
