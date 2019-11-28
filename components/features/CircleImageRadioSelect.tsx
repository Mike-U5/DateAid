import React, {Component} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import DateTypes from '../../data/DateTypes';
import { CircleImageButton } from '../elements/CircleImageButton';

const styles = StyleSheet.create({
		container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	}
});

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
			buttons.push(<CircleImageButton key={i} onPress={() => this.onPressBtn(i)} text={dt.name} img={dt.src} isSelected={this.state.selectedIndex === i}/>);
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
