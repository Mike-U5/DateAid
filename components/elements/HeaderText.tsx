import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Theme } from '../../helpers/Theme';

export class HeaderText extends Component<{text: String}> {

	render() {
		return (
			<View>
				<Text style={{fontSize: 40, color: Theme.get().navbarColor}}>{this.props.text}</Text>
				<View />
			</View>
		);
	}
}
