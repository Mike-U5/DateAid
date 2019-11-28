import React, { Component } from 'react';
import { Image, View, TouchableHighlight, ImageSourcePropType, StyleSheet } from 'react-native';
import { Colors } from '../../enums/Colors';
import { NavButton } from '../../enums/NavButton';

const style = StyleSheet.create({
	touch: {
		width: 40,
		height: 40,
		padding: 10,
	},
	img: {
		width: 20,
		height: 20,
		tintColor: Colors.White
	},
	posLeft: {
		marginStart: 25,
	},
	posRight: {
		marginEnd: 25
	}
});

export class NavHeader extends Component<{navAction: any, arrow: NavButton, aligntLeft: boolean}> {

	render() {
		let imgSrc: ImageSourcePropType;
		switch (this.props.arrow) {
			case NavButton.BackWard: {
				imgSrc = require('../../assets/material/left-arrow.png');
				break;
			}
			case NavButton.Forward: {
				imgSrc = require('../../assets/material/right-arrow.png');
				break;
			}
			default: {
				imgSrc = require('../../assets/material/check.png');
				break;
			}
		}

		return (
			<View>
				<TouchableHighlight onPress={this.props.navAction} style={style.touch}>
					<Image source={imgSrc} style={[style.img, (this.props.aligntLeft) ? style.posLeft : style.posRight]}	/>
				</TouchableHighlight>
			</View>
		);
	}

}
