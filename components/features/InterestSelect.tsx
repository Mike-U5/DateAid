import React, { Component } from 'react';
import {Dimensions, View, ScrollView} from 'react-native';
import TouchableInterest from '../features/TouchableInterest';
import interests from '../../data/Interests';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height) * 0.9;

class InterestSelect extends Component {

	render() {
		return (
			<ScrollView style={{width: screenWidth, height: screenHeight}} contentContainerStyle={{flexGrow: 1}}>
				<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
					{this.renderInterests()}
				</View>
			</ScrollView>
		);
	}

	private renderInterests = () => {
		const iconNames: JSX.Element[] = [];

		for (let i = 0; i < interests.length; i++) {
			const s = interests[i];
			iconNames.push(<TouchableInterest key={s.id} interest={s}/>);
		}
		
		return iconNames;
	}
}

export default InterestSelect;
