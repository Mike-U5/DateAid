import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Theme } from '../../helpers/Theme';

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: Theme.get().white,
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
		color: Theme.get().black,
		fontSize: 25
	}
});

export class StartMenuButton extends Component<{onPress: any, text: string}> {
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
