import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { NavHelper } from '../../helpers/NavHelper';
import { NavIcons } from '../../data/NavIcons';
import DateTypes from '../../data/DateTypes';
import { DateTypeButton } from '../features/DateTypeButton';
import { TempStorage } from '../../helpers/TempStorage';

const screenWidth = Math.round(Dimensions.get('window').width);

export class SelectDateType extends Component<{navigation: { navigate: (a1: string) => any; }}>  {
	/** Navigation for this page **/
	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerLeft: NavHelper.getLeft(NavIcons.Backward, () => {navigation.navigate('Home')})
	});

	render() {
			return (
				<View>
					{this.renderButtons()}
				</View>
		);
	}

	/* render the buttons by making DateTypeButtons based on datetypes from data/DateTypes */
	private renderButtons() {
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

	private onPressBtn(index: number) {
		TempStorage.dateType.set(index);

		//navigate to interests.
		this.props.navigation.navigate('SetInterests');
	}
}
