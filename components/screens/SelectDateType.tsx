/* perform necessary imports */
import React, { Component } from 'react';
import { View } from 'react-native';
import { NavHelper } from '../../helpers/NavHelper';
import { NavIcons } from '../../data/NavIcons';
import DateTypes from '../../data/DateTypes';
import { TempStorage } from '../../helpers/TempStorage';
import { RectangleImageButton } from '../elements/RectangleImageButton';
import { Theme } from '../../helpers/Theme';

export class SelectDateType extends Component<{navigation: { navigate: (a1: string) => any; }}>  {
	/** Navigation for this page **/
	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerLeft: NavHelper.getLeft(NavIcons.Backward, () => {navigation.navigate('Home')}),
		headerStyle: {backgroundColor: Theme.getNavbarColor()}
	});

	render() {
		return (<View>{this.renderButtons()}</View>);
	}

	/* render the buttons by making DateTypeButtons based on datetypes from data/DateTypes */
	private renderButtons() {
		const buttons = [];
		for (let i = 0; i < DateTypes.length; i++) {
			buttons.push(<RectangleImageButton
				key={i}
				onPress={() => this.onPressBtn(i)}
				name={DateTypes[i].name}
				src={DateTypes[i].src}
			/>);
		}
		return buttons;
	}

	/* Save the selected datetype and continue to interests */
	private onPressBtn(index: number) {
		TempStorage.dateType.set(index);
		this.props.navigation.navigate('SetInterests');
	}
}
