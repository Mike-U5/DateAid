import React, { Component } from 'react';
import { Image, View, TouchableHighlight, ImageSourcePropType } from 'react-native';
import { Colors } from '../../enums/Colors';
import { NavButton } from '../../enums/NavButton';

const style = {
	touch: {
		width: 40,
		height: 40,
		marginStart: 0,
		marginEnd: 0,
		padding: 10
	},
	img: {
		width: 20,
		height: 20,
		tintColor: Colors.White
	}
}

export class NavHeader extends Component<{navAction: any, arrow: NavButton}> {

	render() {

		let imgSrc: ImageSourcePropType;
		let margin;
		switch (this.props.arrow) {
			case NavButton.BackWard: {
				imgSrc = require('../../assets/material/left-arrow.png');
				margin = {marginStart: 25};
				break;
			}
			case NavButton.Forward: {
				imgSrc = require('../../assets/material/right-arrow.png');
				margin = {marginEnd: 25};
				break;
			}
			default: {
				imgSrc = require('../../assets/material/check.png');
				margin = {marginEnd: 25};
				break;
			}
		}

		return (
			<View>
				<TouchableHighlight onPress={() => this.props.navAction} style={style.touch}>
					<Image source={imgSrc} style={[style.img, margin]}	/>
				</TouchableHighlight>
			</View>
		);
	}

}
