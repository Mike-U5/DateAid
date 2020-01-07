/* Import necessary modules */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Theme } from '../../helpers/Theme';

/* Shows a Text in a header font and size */
export class HeaderText extends Component<{text: String}> {
	render() {
		return (
			<View>
				<Text style={{fontSize: 40, color: Theme.getNavbarColor()}}>{this.props.text}</Text>
				<View />
			</View>
		);
	}
}
