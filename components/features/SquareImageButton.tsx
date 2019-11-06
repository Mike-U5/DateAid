import React, {Component} from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../enums/Colors';

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: Colors.White,
		width: 100,
		height: 100,
		marginTop: 15,
		marginBottom: 15
	},
	img: {
		width: 100,
		height: 100
	}
});



export class SquareImageButton extends Component<{onPress: any, text: string, imgName: string}> {
	private readonly imgSrc;

	constructor(props) {
		super(props);
		this.imgSrc = require('../../assets/datetypes/datetype_FirstDate.png');
	}

	render() {
		return (
			<View>
				<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
					<Image style={styles.img} source={this.imgSrc}/>
					<Text>{this.props.text}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
