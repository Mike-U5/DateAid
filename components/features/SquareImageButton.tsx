import React, {Component} from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity, ImageSourcePropType, GestureResponderEvent } from 'react-native';
import { Colors } from '../../enums/Colors';

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: Colors.White,
		width: 100,
		height: 100,
		marginTop: 15,
		marginBottom: 15,
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
		color: Colors.BgLight
	}
});

export class SquareImageButton extends Component<{onPress: (event: GestureResponderEvent) => void, text: string, img: ImageSourcePropType, isSelected: boolean}> {
	constructor(props: Readonly<{ onPress: (event: GestureResponderEvent) => void; text: string; img: ImageSourcePropType; isSelected: boolean; }>) {
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
