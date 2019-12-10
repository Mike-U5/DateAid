import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../../enums/Colors';

const styles = StyleSheet.create({
	button: {
		marginTop: Math.round(Dimensions.get('window').height) * 0.07,
		alignItems: 'center',
		width: 30,
		height: 30,
	},
	img: {
		width: 30,
		height: 30,
		tintColor: Colors.White,
	},
});

export class TopNavigatorButton extends Component<{onPress: any, imageSource: any, margin: number}> {
	render() {
		return (
			<View style={styles.button}>
				<TouchableOpacity onPress={this.props.onPress}>
					<Image style={[styles.img, {marginLeft: Math.round(Dimensions.get('window').width) * this.props.margin}]} source={this.props.imageSource}></Image>
				</TouchableOpacity>
			</View>
		);
	}
}
