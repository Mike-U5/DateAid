import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { DateTypeButton } from './DateTypeButton';
import DateTypes from '../../data/DateTypes';
import { TempStorage } from '../../helpers/TempStorage';

const screenWidth = Math.round(Dimensions.get('window').width);

export class DateTypeButtonImplement extends Component<{navigation: any}> {
	/* render the buttons by making DateTypeButtons based on datetypes from data/DateTypes */
	renderButtons() {
		const buttons = [];
		for (let i = 0; i < DateTypes.length; i++) {
			const dt = DateTypes[i];
			if (i !== 0) {
				buttons.push(<View key={'temp' + i} style={{width: (screenWidth / 20)}}/>);
			}
			buttons.push(<DateTypeButton key={i} onPress={() => this.onPressBtn(i)} dateType={dt} />);
		}
		return buttons;
	}

	/* Save dateType in Local Storage on Button click */
	onPressBtn(index: number) {
		TempStorage.dateType.set(index);

		// Navigate to interests.
		this.props.navigation.navigate('SetInterests');
	}

	/* return all content */
	render() {
		return (
			<View>
				{this.renderButtons()}
			</View>
		);
	}
}
