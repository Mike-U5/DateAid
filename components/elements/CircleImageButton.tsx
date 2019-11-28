import React, {Component} from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Colors } from '../../enums/Colors';

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: Colors.White,
		width: 100,
		height: 100,
		marginTop: 15,
		marginBottom: 15,
		borderRadius: 100
	},
	img: {
		width: 100,
		height: 100,
		borderWidth: 4,
		borderColor: Colors.Transparent,
		opacity: 0.75,
		borderRadius: 100
	},
	imgSelected: {
		borderColor: Colors.LogoDark,
		opacity: 1,
		borderRadius: 100
	},
	txt: {
		color: Colors.LogoDark
	}
});

export class CircleImageButton extends Component<{onPress: any, text: string, img: ImageSourcePropType, isSelected: boolean}> {

	constructor(props: Readonly<{ onPress: any, text: string; img: ImageSourcePropType; isSelected: boolean; }>) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
				<Image style={[styles.img, this.props.isSelected ? styles.imgSelected : {}]} source={this.props.img}/>
				<Text style={styles.txt}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}
