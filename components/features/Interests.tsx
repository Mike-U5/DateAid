import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, AsyncStorage, ScrollView} from 'react-native';
import Interest_json from '../../files/json/interest_json';
import TouchableInterest from '../features/TouchableInterest';
import { Colors } from '../../enums/Colors';

const screenWidth = Math.round(Dimensions.get('window').width) * 0.95;
const screenHeight = Math.round(Dimensions.get('window').height) * 0.9;

class Interests extends Component {
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
			let iconNames = [];
				Interest_json.map((s) =>
					(
						iconNames.push(
							<TouchableInterest key={s.id} interest={s}> </TouchableInterest>
						)
					)
				)
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

export default Interests;
