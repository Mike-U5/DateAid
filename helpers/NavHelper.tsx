import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Colors } from '../enums/Colors';

const leftStyle = {width: 40, height: 40, marginStart: 25, padding: 10};
const rightStyle = {width: 40, height: 40, marginEnd: 25, padding: 10};
const imgStyle = {width: 20, height: 20, tintColor: Colors.White};

export class NavHelper {

	public static getRight(icon: ImageSourcePropType, action: () => any): JSX.Element {
		return (
			<TouchableHighlight onPress={action} style={rightStyle} underlayColor={Colors.Transparent}>
				<Image source={icon} style={imgStyle} />
			</TouchableHighlight>
		);
	}

	public static getLeft(icon: ImageSourcePropType, action: () => any): JSX.Element {
		return (
			<TouchableHighlight onPress={action} style={leftStyle} underlayColor={Colors.Transparent}>
				<Image source={icon} style={imgStyle}	/>
			</TouchableHighlight>
		);
	}

}
