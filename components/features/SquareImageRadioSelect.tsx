import React, {Component} from 'react';
import { View } from 'react-native';
import { SquareImageButton } from './SquareImageButton';

export class SquareImageRadioSelect extends Component<{onChange: (a0: number) => void, baseValue: number}, {selectedIndex: number}> {
	constructor(props) {
		super(props);
		this.state = {selectedIndex: this.props.baseValue};
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
