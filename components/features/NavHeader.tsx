import React, { Component } from 'react';
import { Image, View, TouchableHighlight, ImageSourcePropType } from 'react-native';
import { Colors } from '../../enums/Colors';

const style = {
	touch: {
		width: 40,
		height: 40,
		marginEnd: 25,
		padding: 10
	},
	img: {
		width: 20,
		height: 20,
		tintColor: Colors.White
	}
}

export class NavHeader extends Component<{imgSrc: ImageSourcePropType, navDest: any}> {

	render() {
		return (
			<View>
				<TouchableHighlight onPress={() => this.props.navDest} style={style.touch}>
					<Image source={this.props.imgSrc} style={style.img}	/>
				</TouchableHighlight>
			</View>
		);
	}
	
}
