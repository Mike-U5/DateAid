import React, {Component} from 'react';
import { Dimensions, Image, StyleSheet, View, TouchableOpacity, ImageSourcePropType, GestureResponderEvent } from 'react-native';
import { Colors } from '../../enums/Colors';

const styles = StyleSheet.create({
	container: {

	},
	button: {
		alignItems: 'center',
		backgroundColor: Colors.White,
		width: Math.round(Dimensions.get('window').width) * 0.95,
		height: Math.round(Dimensions.get('window').height) * 0.24,
		marginTop: 5,
		marginBottom: 5
	},
	img: {
		width: Math.round(Dimensions.get('window').width) * 0.95,
		height: Math.round(Dimensions.get('window').height) * 0.24,
		borderWidth: 2,
		borderColor: Colors.Transparent,
		opacity: 0.75
	},
	imgSelected: {
		borderColor: Colors.LogoDark,
		opacity: 1
	},
});

export class RectangleImageButton extends Component<{onPress: any, value: string, img: ImageSourcePropType, isSelected: boolean}> {
	constructor(props: Readonly<{ onPress: (event: GestureResponderEvent) => void; value: string; img: ImageSourcePropType; isSelected: boolean; }>) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
					<Image style={[styles.img, this.props.isSelected ? styles.imgSelected : {}]} source={this.props.img}/>
				</TouchableOpacity>
			</View>
		);
	}
}
