import React, { Component } from 'react';
import { Image, View, TouchableHighlight, ImageSourcePropType } from 'react-native';
import { Colors } from '../../enums/Colors';
import { Direction } from '../../enums/Direction';

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

export class NavHeader extends Component<{dest: string, nav: any, arrow: Direction}> {

	render() {
		const img = (Direction.Forward === Direction.Forward) ? require('../../assets/material/right-arrow.png') : require('../../assets/material/left-arrow.png');
		return (
			<View>
				<TouchableHighlight onPress={() => this.props.nav.navigate(this.props.dest)} style={style.touch}>
					<Image source={img} style={style.img}	/>
				</TouchableHighlight>
			</View>
		);
	}

}
