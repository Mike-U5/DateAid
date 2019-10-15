import React, { Component } from 'react';
import { View, Text } from "react-native";

export class Greeting extends Component<{name: string}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Hello {this.props.name}, how are you doing?</Text>
			</View>
    );
  }
}
