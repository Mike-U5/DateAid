import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../enums/Colors';

const style = {
	txt: {
		fontSize: 40,
		color: Colors.IkkonzomePink
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
