import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Theme } from '../../helpers/Theme';

const viewWidth = Math.round(Dimensions.get('window').width) * 0.95;
const buttonWidth = viewWidth * 0.475;
const viewHeight = Math.round(Dimensions.get('window').height) * 0.95;
const buttonHeight = viewHeight * 0.45;
const textHeight = buttonHeight * 0.85;
const fontSize = (textHeight * 0.1) - 1;


const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: Theme.getNavbarColor(),
		width: buttonWidth,
		height: buttonHeight,
	},
	buttonTxt: {
		color: Theme.getBlack(),
		fontSize: fontSize,
		top: textHeight
	}
});

export class AdviceButton extends Component<{onPress: any, text: string}> {
	render() {
		return (
			<View>
				<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
					<Text style={styles.buttonTxt}> {this.props.text} </Text>
				</TouchableOpacity>
			</View>
		);
	}
}
