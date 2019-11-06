import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SquareImageButton } from '../features/SquareImageButton';
import { SmoothSlider } from '../features/SmoothSlider';
import { StorageHelper } from '../../helpers/StorageHelper';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
	txt: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	slider: {
		width: '100%'
	}
});

export class SelectDateType extends Component {
	render() {
			// Logic
			const actA = function() {alert('A!')};
			const actB = function() {alert('B!')};
			const actC = function() {alert('C!')};

			// Resources
			const imgPath = '../../assets/datetypes/datetype_';
			const imgA = require(imgPath + 'FirstDate.png');
			const imgB = require(imgPath + 'NewCouple.png');
			const imgC = require(imgPath + 'Anniversary.png');

			// Testing
			StorageHelper.getUserAge().then((result) => {console.log(result)});
			StorageHelper.getPartnerAge().then((result) => {console.log(result)});

			return (
				<View style={styles.container}>
					<Text style={styles.txt}>~ Type of Date ~</Text>
					<SquareImageButton onPress={actA} text='First Date' img={imgA}/>
					<SquareImageButton onPress={actB} text='New Couple' img={imgB}/>
					<SquareImageButton onPress={actC} text='Anniversary' img={imgC}/>

					<SmoothSlider text='Own Age' onChange={StorageHelper.setUserAge}></SmoothSlider>
					<SmoothSlider text='Partners Age' onChange={StorageHelper.setPartnerAge}></SmoothSlider>
				</View>
		);
	}
}