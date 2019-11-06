import React, {Component} from 'react';
import { Image, Text, StyleSheet, View, Slider, ImageSourcePropType, GestureResponderEvent } from 'react-native';
import { Colors } from '../../enums/Colors';

const styles = StyleSheet.create({
	slider: {
		width: 300
	},
	txt: {
		color: Colors.BgLight
	}
});

export class SmoothSlider extends Component<{onChange, text: string}> {
	private readonly thumbImg = require('../../assets/input/slider_thumb.png');

	render() {
		return (
			<View>
				<Text style={styles.txt}>{this.props.text}</Text>
				<Slider style={styles.slider} onValueChange={this.props.onChange} thumbImage={this.thumbImg}></Slider>
			</View>
		);
	}
}
