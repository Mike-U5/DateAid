import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Theme } from '../../helpers/Theme';

// Size variables to use in style


const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: Theme.get().white,
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
		borderColor: Theme.get().transparent,
		opacity: 0.75,
		borderRadius: 100
	},
	imgSelected: {
		borderColor: Theme.get().navbarColor,
		opacity: 1,
		borderRadius: 100
	},
	txt: {
		color: Theme.get().navbarColor
	}
});

export class DateTypeButtonCircle extends Component<{onPress: any, text: string, img: ImageSourcePropType, isSelected: boolean}> {

	constructor(props: Readonly<{onPress: any, text: string, img: ImageSourcePropType, isSelected: boolean}>) {
		super(props);
	}

	render() {
		return (
			<View>
			<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
				<Image style={[styles.img, this.props.isSelected ? styles.imgSelected : {}]} source={this.props.img}/>
				<Text style={styles.txt}>{this.props.text}</Text>
			</TouchableOpacity>
			</View>
		);
	}
}
