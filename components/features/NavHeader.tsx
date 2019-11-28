import React, { Component } from 'react';
import { Image, View, TouchableHighlight, ImageSourcePropType, StyleSheet } from 'react-native';
import { Colors } from '../../enums/Colors';
import { NavButton } from '../../enums/NavButton';

const style = StyleSheet.create({
	touch: {
		width: 40,
		height: 40,
		padding: 10
	},
	img: {
		width: 20,
		height: 20,
		tintColor: Colors.White
	}
});

export class NavHeader extends Component<{navAction: any, arrow: NavButton}> {

	render() {

		let imgSrc: ImageSourcePropType;
		let margin;
		switch (this.props.arrow) {
			case NavButton.BackWard: {
				imgSrc = require('../../assets/material/left-arrow.png');
				margin = StyleSheet.create({base: {marginStart: 25}});
				break;
			}
			case NavButton.Forward: {
				imgSrc = require('../../assets/material/right-arrow.png');
				margin = StyleSheet.create({base: {marginEnd: 25}});
				break;
			}
			default: {
				imgSrc = require('../../assets/material/check.png');
				margin = StyleSheet.create({base: {marginEnd: 25}});
				break;
			}
		}

		console.log(margin);

		return (
			<View>
				<TouchableHighlight onPress={this.props.navAction} style={style.touch}>
					<Image source={imgSrc} style={[style.img, margin.base]}	/>
				</TouchableHighlight>
			</View>
		);
	}

}
