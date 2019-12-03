import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Colors } from '../enums/Colors';

const leftStyle = {width: 40, height: 40, marginStart: 25, padding: 10};
const rightStyle = {width: 40, height: 40, marginEnd: 25, padding: 10};
const imgEnabledStyle = {width: 20, height: 20, tintColor: Colors.White};
const imgDisabledStyle = {width: 20, height: 20, tintColor: Colors.BgDark};

export class NavHelper {

	public static getRight(icon: ImageSourcePropType, action: () => any, condition = true): JSX.Element {
		return this.getNav(icon, action, condition, false);
	}

	public static getLeft(icon: ImageSourcePropType, action: () => any, condition = true): JSX.Element {
		return this.getNav(icon, action, condition, true);
	}

	private static getNav(icon: ImageSourcePropType, action: () => any, condition: boolean, isLeft: boolean): JSX.Element {
		const imgStyle = (condition) ? imgEnabledStyle : imgDisabledStyle;
		const sideStyle = (isLeft) ? leftStyle : rightStyle;
		return (
			<TouchableHighlight onPress={action} style={sideStyle} underlayColor={Colors.Transparent}>
				<Image source={icon} style={imgStyle}	/>
			</TouchableHighlight>
		);
	}

}
