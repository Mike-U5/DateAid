import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class ShowAdvice extends Component<{name: string}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Advice boiiii</Text>
			</View>
		);
	}
}
