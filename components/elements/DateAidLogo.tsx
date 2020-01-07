/* perform necessary imports */
import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import { Theme } from '../../helpers/Theme';

/* returns the Date Aid Logo */
export class DateAidLogo extends Component {
	render() {
		return (
			<ImageBackground source={require('../../assets/logo_base.png')}>
				<Image source={require('../../assets/logo_colorable.png')} style={{tintColor: Theme.getWhite()}}/>
			</ImageBackground>
		);
	}
}
