import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Theme } from '../../helpers/Theme';

export class ColoredButton extends Component<{onPress: () => any, text: string}> {
	private readonly style: any;

	constructor(props: Readonly<{ onPress: () => any; text: string; }>) {
		super(props);

		this.style = StyleSheet.create({
			button: {
				alignItems: 'center',
				backgroundColor: Theme.getNavbarColor(),
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
				color: Theme.getBlack(),
				fontSize: 25
			}
		});
	}

	render() {
		return (
			<View>
				<TouchableOpacity style={this.style.button} onPress={this.props.onPress}>
					<Text style={this.style.buttonTxt}> {this.props.text} </Text>
				</TouchableOpacity>
			</View>
		);
	}
}
