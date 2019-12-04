import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Theme } from '../../helpers/Theme';

const style = {
	txt: {
		fontSize: 40,
		color: Theme.get().white
	}
}

export class HeaderText extends Component<{text: String}> {

	render() {
		return (
			<View>
				<Text style={style.txt}>{this.props.text}</Text>
				<View />
			</View>
		);
	}
}
