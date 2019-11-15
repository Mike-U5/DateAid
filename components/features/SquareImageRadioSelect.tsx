import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { SquareImageButton } from './SquareImageButton';
import DateTypes from '../../data/DateTypes';

const styles = StyleSheet.create({
		container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	}
});

export class SquareImageRadioSelect extends Component<{onChange: (a0: number) => void, baseValue: number}, {selectedIndex: number}> {
	constructor(props: Readonly<{ onChange: (a0: number) => void; baseValue: number; }>) {
		super(props);
		this.state = {selectedIndex: this.props.baseValue};
	}

	renderButtons() {
		const buttons = [];
		const imgPath = '../../assets/datetypes/datetype_';
		const names = ['First Date', 'New Couple', 'Anniversary'];
		const imgs = [require(imgPath + 'FirstDate.png'), require(imgPath + 'NewCouple.png') , require(imgPath + 'Anniversary.png')];
		for (let i = 0; i < 3; i++) {
			if (i !== 0) {
				buttons.push(<View key={'temp' + i} style={{width: '4%'}}/>);
			}
			buttons.push(<SquareImageButton key={i} onPress={() => this.onPressBtn(i)} text={names[i]} img={imgs[i]} isSelected={this.state.selectedIndex === i}/>);
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
