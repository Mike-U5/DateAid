import React, {Component} from 'react';
import { Slider, Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../enums/Colors';

const style = StyleSheet.create({
	slider: {
		width: 330
	}
});

export class SmoothSlider extends Component<{baseValue: number, onChange: (a0: number) => void, text: string}, {sliderVal: number}> {
	constructor(props: Readonly<{ baseValue: number; onChange: (a0: number) => void; text: string; }>) {
		super(props);
		this.state = {sliderVal: this.props.baseValue};
	}

	private onChange(value: number) {
		this.setState({sliderVal: value});
		this.props.onChange(value);
	}

	render() {
		const displayValue = (this.state.sliderVal > 99) ? '99+' : this.state.sliderVal;
		return (
			<View>
				<Text style={{color: Colors.LogoDark}}>{this.props.text + ' '}</Text>
				<Text style={{color: Colors.LogoBright}}>{displayValue}</Text>
				<Slider
					style={style.slider}
					thumbTintColor={Colors.BgLight}
					minimumTrackTintColor={Colors.BgLight}
					maximumTrackTintColor={Colors.BgDark}
					step={1}
					minimumValue={18}
					maximumValue={100}
					onValueChange={(evt) => this.onChange(evt)}
					value={this.state.sliderVal}
				/>
			</View>
		);
	}
}
