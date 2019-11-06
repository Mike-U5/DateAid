import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../enums/Colors';
import { Slider } from 'react-native';

const styles = StyleSheet.create({
	slider: {
		width: 300
	},
	txt: {
		color: Colors.BgLight
	}
});

export class SmoothSlider extends Component<{onChange: (value: number) => void, text: string}> {
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
