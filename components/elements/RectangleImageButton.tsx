import React, { Component } from 'react';
import { Text, Dimensions, Image, StyleSheet, View, TouchableOpacity, ImageBackground, ImageSourcePropType } from 'react-native';
import { Colors } from '../../enums/Colors';

// Size variables to use in style
const activityWidth = Math.round(Dimensions.get('window').width) * 0.95;
const activityHeight = Math.round(Dimensions.get('window').height) * 0.26;
const textOffset = Math.round(activityWidth * 0.35);

const styles = StyleSheet.create({
	txtContainer: {
		position: 'absolute',
		top: 0,
		left: textOffset,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	txt: {
		color: Colors.White,
		fontSize: 25,
	},
	button: {
		alignItems: 'center',
		backgroundColor: Colors.White,
		width: activityWidth,
		height: activityHeight,
		marginTop: 5,
		marginBottom: 5
	},
	img: {
		width: activityWidth,
		height: activityHeight,
	},
	imgTint: {
		tintColor: Colors.BgLight,
		opacity: 0.9
	}
});

export class RectangleImageButton extends Component<{onPress: any, name: string, src: ImageSourcePropType}> {
	constructor(props: Readonly<{onPress: any; name: string, src: ImageSourcePropType}>) {
		super(props);
	}

	render() {
		return (
			<View>
				<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
					<ImageBackground style={[styles.img]} source={this.props.src}>
						<Image style={[styles.img, styles.imgTint]} source={require('../../assets/activities/activityGradient.png')}/>
						<View style={styles.txtContainer}>
							<Text style={styles.txt}>{this.props.name}</Text>
						</View>
					</ImageBackground>
				</TouchableOpacity>
			</View>
		);
	}
}
