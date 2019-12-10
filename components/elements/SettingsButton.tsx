import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../enums/Colors';

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		width: 30,
		height: 30,
	},
	img: {
		width: 30,
		height: 30,
		tintColor: Colors.White,
	},
});

export class SettingsButton extends Component<{onPress: any}> {
	render() {
		return (
			<View style={styles.button}>
				<TouchableOpacity onPress={this.props.onPress}>
					<Image style={styles.img} source={require('../../assets/material/settings.png')}></Image>
				</TouchableOpacity>
			</View>
		);
	}
}
