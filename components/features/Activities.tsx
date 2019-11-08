import React, { Component } from 'react';
import {Dimensions, /*StyleSheet,*/ View, AsyncStorage, ScrollView} from 'react-native';
import Dates from '../../data/Dates';
import TouchableActivity from '../features/TouchableActivity';
//import { Colors } from '../../enums/Colors';

const screenWidth = Math.round(Dimensions.get('window').width) * 0.95;
const screenHeight = Math.round(Dimensions.get('window').height) * 0.9;

class Activities extends Component {
render() {
		return (
			<ScrollView style={{width: screenWidth, height: screenHeight, marginTop: 10}} contentContainerStyle={{flexGrow: 1}}>
				<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
					{this.generateRealContent()}
				</View>
			</ScrollView>
				);
		}

		generateRealContent = () => {
			const iconNames: Array<JSX.Element> = [];
			const Dates2 = Dates.slice(0, 3);

			for (const Date of Dates2) {
				iconNames.push(
					<TouchableActivity key={Date.id} activity={Date}> </TouchableActivity>
				)

			}
			return iconNames;
		}
		wipeSession = () => {
			AsyncStorage.clear();
		}
}

/*const styles = StyleSheet.create({
	main: {
		flex: 1
	},
	container: {
		flex: 1,
		backgroundColor: Colors.White,
		alignItems: 'center',
		paddingTop: 50
	},
});*/

export default Activities;
