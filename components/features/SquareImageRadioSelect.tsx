import React, {Component} from 'react';
import { View } from 'react-native';
import { SquareImageButton } from './SquareImageButton';

// Logic
const actA = function() {alert('A!')};
const actB = function() {alert('B!')};
const actC = function() {alert('C!')};

// Resources
const imgPath = '../../assets/datetypes/datetype_';
const imgA = require(imgPath + 'FirstDate.png');
const imgB = require(imgPath + 'NewCouple.png');
const imgC = require(imgPath + 'Anniversary.png');

export class SquareImageRadioSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {isSelected: false};
	}

	render() {
		return (
			<View>
				<SquareImageButton onPress={actA} text='First Date' img={imgA}/>
				<SquareImageButton onPress={actB} text='New Couple' img={imgB}/>
				<SquareImageButton onPress={actC} text='Anniversary' img={imgC}/>
			</View>
		);
	}
}
