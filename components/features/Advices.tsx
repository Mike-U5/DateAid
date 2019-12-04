import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Theme } from '../../helpers/Theme';

const style = {
	txt: {
		fontSize: 20,
		color: Theme.get().white
	},
	view: {
		marginTop: 10,
	}
}

export class Advices extends Component<{text: String}> {

	render() {
		return (
			<View style={style.view}>
				<Text style={style.txt}>{this.props.text}</Text>
			</View>
		);
	}
}
