import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Loading extends Component<{name: string}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Loading...</Text>
			</View>
		);
	}
}
