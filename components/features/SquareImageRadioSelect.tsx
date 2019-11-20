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
		for (let i = 0; i < DateTypes.length; i++) {
			const dt = DateTypes[i];
			if (i !== 0) {
				buttons.push(<View key={'temp' + i} style={{width: '4%'}}/>);
			}
			buttons.push(<SquareImageButton key={i} onPress={() => this.onPressBtn(i)} text={dt.name} img={dt.src} isSelected={this.state.selectedIndex === i}/>);
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
