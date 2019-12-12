import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Theme } from './Theme';
import { NavIcons } from '../data/NavIcons';

const leftStyle = {width: 40, height: 40, marginStart: 25, padding: 10};
const rightStyle = {width: 40, height: 40, marginEnd: 25, padding: 10};
const imgEnabledStyle = {width: 20, height: 20, tintColor: Theme.getWhite()};
const imgDisabledStyle = {width: 20, height: 20, tintColor: Theme.getBlack()};

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
			<TouchableHighlight onPress={action} style={sideStyle} underlayColor={Theme.getTransparent()}>
				<Image source={icon} style={imgStyle}	/>
			</TouchableHighlight>
		);
	}

	public static defaults(leftAct: () => any, rightAct: () => any, leftIcon: NavIcons = NavIcons.Backward, rightIcon: NavIcons = NavIcons.Forward) {
		return {
			headerRight: NavHelper.getRight(rightIcon, leftAct),
			headerLeft: NavHelper.getLeft(leftIcon, rightAct),
			headerStyle: {backgroundColor: Theme.getNavbarColor()}
		}
	}

	public static navParams() {
		return ({ navigation }: any) => {
			const { params = {} } = navigation.state;
			return {
				headerLeft: NavHelper.getLeft(NavIcons.Backward, () => navigation.goBack()),
				headerRight: NavHelper.getRight(NavIcons.Refresh, params.loadActivities),
				headerStyle: {backgroundColor: Theme.getNavbarColor()}
			};
		}
	}

}
