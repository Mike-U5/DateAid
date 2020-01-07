/* perform necessary imports for CircleImageButton */
import React, { Component } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Theme } from '../../helpers/Theme';

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: Theme.getWhite(),
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
		borderColor: Theme.getTransparent(),
		opacity: 0.75,
		borderRadius: 100
	},
	imgSelected: {
		borderColor: Theme.getBlack(),
		opacity: 1,
		borderRadius: 100
	},
	txt: {
		color: Theme.getBlack()
	}
});

export class CircleImageButton extends Component<{onPress: any, text: string, img: ImageSourcePropType, isSelected: boolean}> {

	constructor(props: Readonly<{ onPress: any, text: string; img: ImageSourcePropType; isSelected: boolean; }>) {
		super(props);
	}
	/* returns a TouchableOpacity that shows the Circle Image Button on the Date Type */
	render() {
		return (
			<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
				<Image style={[styles.img, this.props.isSelected ? styles.imgSelected : {}]} source={this.props.img}/>
				<Text style={styles.txt}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}
