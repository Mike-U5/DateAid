import React, {Component} from 'react';
import { View, Dimensions } from 'react-native';
import { DateTypeButton } from './DateTypeButton';
import DateTypes from '../../data/DateTypes';

const screenWidth = Math.round(Dimensions.get('window').width);

export class CircleImageRadioSelect extends Component<{onChange: (a0: number) => void, baseValue: number}, {selectedIndex: number}> {
	constructor(props: Readonly<{ onChange: (a0: number) => void; baseValue: number; }>) {
		super(props);
		this.state = {selectedIndex: this.props.baseValue};
	}

	renderButtons() {
		const buttons = [];
		for (let i = 0; i < DateTypes.length; i++) {
			const dt = DateTypes[i];
			if (i !== 0) {
				buttons.push(<View key={'temp' + i} style={{width: (screenWidth / 20)}}/>);
			}
			console.log(this.state.selectedIndex + ' is ' + i);
			buttons.push(<DateTypeButton key={i} onPress={() => this.onPressBtn(i)} dateType={dt} />);
		}
		return buttons;
	}

	onPressBtn(index: number) {
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
