import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { SquareImageButton } from './SquareImageButton';
import { Colors } from '../../enums/Colors';

// Logic
const actA = function() {alert('Pressed!')};

// Style
const styles = StyleSheet.create({
	btn: {
		borderWidth: 1,
		borderColor: Colors.BgDark
	},
	btnSelected: {
		borderWidth: 1,
		borderColor: Colors.Transparent
	}
});

export class SquareImageRadioSelect extends Component<{onChange: (a0: number) => void}, {selectedIndex: number}> {
	constructor(props) {
		super(props);
		this.state = {selectedIndex: -1};
	}

	renderButtons() {
		const buttons = [];
		const imgPath = '../../assets/datetypes/datetype_';
		const imgs = [require(imgPath + 'FirstDate.png'), require(imgPath + 'NewCouple.png') , require(imgPath + 'Anniversary.png')];
		for (let i = 0; i < 3; i++) {
			buttons.push(<SquareImageButton key={i} onPress={() => this.onPressBtn(i)} text='First Date' img={imgs[i]} isSelected={this.state.selectedIndex === i}/>);
		}
		return buttons;
	}

	onPressBtn(index: number) {
		console.log(index);
		this.setState({selectedIndex: index});
		this.props.onChange(index);
	}

	render() {
		return (
			<View>
				{this.renderButtons()}
			</View>
		);
	}
}
