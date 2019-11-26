import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class ShowTips extends Component<{name: string}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Here are some Tips</Text>
			</View>
		);
	}
}
