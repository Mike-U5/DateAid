import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../enums/Colors';

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: Colors.BgLight,
		width: 200,
		height: 50,
		borderRadius: 5,
		marginTop: 0,
		marginBottom: 20
		
	},
	buttonTxt: {
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		textAlignVertical: 'center',
		color: Colors.White,
		fontWeight: 'bold',
		fontSize: 17
	}
});

export class LoadActivitiesButton extends Component<{onPress: any, text: string}> {
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
