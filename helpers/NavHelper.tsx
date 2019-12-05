import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Theme } from './Theme';
import { NavIcons } from '../data/NavIcons';

const leftStyle = {width: 40, height: 40, marginStart: 25, padding: 10};
const rightStyle = {width: 40, height: 40, marginEnd: 25, padding: 10};
const imgEnabledStyle = {width: 20, height: 20, tintColor: Theme.get().white};
const imgDisabledStyle = {width: 20, height: 20, tintColor: Theme.get().black};

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
			<TouchableHighlight onPress={action} style={sideStyle} underlayColor={Theme.get().transparent}>
				<Image source={icon} style={imgStyle}	/>
			</TouchableHighlight>
		);
	}

	public static defaults(nav: any) {
		return ({
			headerRight: NavHelper.getRight(NavIcons.Check, () => nav.navigate('PickActivity')),
			headerLeft: NavHelper.getLeft(NavIcons.Backward, () => nav.goBack()),
			headerStyle: {backgroundColor: Theme.get().navbarColor}
		})
	}

}
