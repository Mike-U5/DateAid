import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Theme } from '../../helpers/Theme';

const style = StyleSheet.create({
	button: {
		alignItems: 'center',
		width: 250,
		height: 50,
		borderRadius: 25,
		marginTop: 15,
		marginBottom: 15
	},
	buttonTxt: {
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		textAlignVertical: 'center',
		fontSize: 25
	}
});

export class ButtonDarkText extends Component<{onPress: () => any, text: string}> {
	render() {
		return (
			<View>
				<TouchableOpacity style={[style.button, {backgroundColor: Theme.getNavbarColor()}]} onPress={this.props.onPress}>
					<Text style={[style.buttonTxt, {color: Theme.getBlack()}]}> {this.props.text} </Text>
				</TouchableOpacity>
			</View>
		);
	}
}
