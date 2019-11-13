import React, {Component} from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity, ImageSourcePropType, GestureResponderEvent } from 'react-native';
import { Colors } from '../../enums/Colors';

const styles = StyleSheet.create({
	container: {

	},
	button: {
		alignItems: 'center',
		backgroundColor: Colors.White,
		width: 100,
		height: 100,
		marginTop: 15,
		marginBottom: 15,
		marginLeft: 10,
	},
	img: {
		width: 100,
		height: 100,
		borderWidth: 2,
		borderColor: Colors.Transparent,
		opacity: 0.75
	},
	imgSelected: {
		borderColor: Colors.LogoDark,
		opacity: 1
	},
	txt: {
		color: Colors.LogoDark
	}
});

export class SquareImageButton extends Component<{onPress: any, text: string, img: ImageSourcePropType, isSelected: boolean}> {
	constructor(props: Readonly<{ onPress: (event: GestureResponderEvent) => void; text: string; img: ImageSourcePropType; isSelected: boolean; }>) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
					<Image style={[styles.img, this.props.isSelected ? styles.imgSelected : {}]} source={this.props.img}/>
					<Text style={styles.txt}>{this.props.text}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
