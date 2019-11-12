import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, AsyncStorage, ScrollView} from 'react-native';
import TouchableInterest from '../features/TouchableInterest';
import { Colors } from '../../enums/Colors';
import Interests, {Interest} from '../../data/Interests';

const screenWidth = Math.round(Dimensions.get('window').width) * 0.95;
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

		generateRealContent = () => {
			const iconNames: Array<JSX.Element> = [];

			for (let i = 0; i < Interests.length; i++) {
				const s = Interests[i];
				iconNames.push(
					<TouchableInterest key={s.id} interest={s}> </TouchableInterest>
				)
			}
			return iconNames;
		}
		wipeSession = () => {
			AsyncStorage.clear();
		}
}

const styles = StyleSheet.create({
	main: {
		flex: 1
	},
	container: {
		flex: 1,
		backgroundColor: Colors.White,
		alignItems: 'center',
		paddingTop: 50
	},
});

export default InterestSelect;