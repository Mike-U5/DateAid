import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import { Colors } from '../../enums/Colors';

export class DateAidLogo extends Component {
	render() {
		return (
			<ImageBackground source={require('../../assets/logo_base.png')}>
				<Image source={require('../../assets/logo_colorable.png')} style={{tintColor: Colors.IkkonzomePink}}/>
			</ImageBackground>
		);
	}
}
