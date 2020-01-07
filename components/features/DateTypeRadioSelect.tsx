/* perform necessary imports */
import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { DateTypeButtonCircle } from './DateTypeButtonCircle';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
		container: {
		width: screenWidth,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	}
});

/* Exports the Date Type Button */
export class DateTypeRadioSelect extends Component<{onChange: (a0: number) => void, baseValue: number}, {selectedIndex: number}>  {
	constructor(props: Readonly<{ onChange: (a0: number) => void; baseValue: number; }>) {
		super(props);
		this.state = {selectedIndex: this.props.baseValue};
	}
	renderButtons() {
		const buttons = [];
		const imgPath = '../../assets/datetypes/datetype_';
		const names = ['First Date', 'Couple', 'Anniversary'];
		const imgs = [require(imgPath + 'FirstDate.png'), require(imgPath + 'NewCouple.png') , require(imgPath + 'Anniversary.png')];
		for (let i = 0; i < 3; i++) {
			buttons.push(<DateTypeButtonCircle key={i} onPress={() => this.onPressBtn(i)} text={names[i]} img={imgs[i]} isSelected={this.state.selectedIndex === i}/>);
		}
		return buttons;
	}
	onPressBtn(index: number) {
		this.setState({selectedIndex: index});
		this.props.onChange(index);
	}
	render() {
		return (
			<View style={styles.container}>
				{this.renderButtons()}
			</View>
		);
	}
}
