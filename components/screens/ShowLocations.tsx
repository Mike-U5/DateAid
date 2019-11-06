import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class ShowLocations extends Component<{name: string}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Loading...</Text>
			</View>
		);
	}
}
