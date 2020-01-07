/* perform necessary imports */
import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Theme } from '../../helpers/Theme';

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		width: 30,
		height: 30,
	},
	img: {
		width: 30,
		height: 30,
		tintColor: Theme.getWhite(),
	},
});

/* exports the Settingsbutton to open up the settings screen */
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
