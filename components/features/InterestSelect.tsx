import React, { Component } from 'react';
import {Dimensions, View, AsyncStorage, ScrollView} from 'react-native';
import TouchableInterest from '../features/TouchableInterest';
import Interests from '../../data/Interests';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height) * 0.9;

class InterestSelect extends Component {
render() {
	return (
			<ScrollView style={{width: screenWidth, height: screenHeight}} contentContainerStyle={{flexGrow: 1}}>
				<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
					{this.generateRealContent()}
				</View>
			</ScrollView>
		);
	}

	private generateRealContent = () => {
		const iconNames: JSX.Element[] = [];

		for (let i = 0; i < Interests.length; i++) {
			const s = Interests[i];
			iconNames.push(
				<TouchableInterest key={s.id} interest={s} />
			)
		}
		return iconNames;
	}

	private wipeSession = () => {
		AsyncStorage.clear();
	}
}

export default InterestSelect;
