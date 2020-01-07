/* performs necessary imports */
import React, { Component } from 'react';
import { Slider, Text, StyleSheet, View } from 'react-native';
import { Theme } from '../../helpers/Theme';

const style = StyleSheet.create({
	slider: {width: 330}
});

/* exports the Smoothslider for setting the age */
export class SmoothSlider extends Component<{baseValue: number, onChange: (a0: number) => void, text: string}, {sliderVal: number}> {
	constructor(props: Readonly<{ baseValue: number; onChange: (a0: number) => void; text: string; }>) {
		super(props);
		this.state = {sliderVal: this.props.baseValue};
	}

/* renders the actual slider */
	render() {
		const displayValue = (this.state.sliderVal > 99) ? '99+' : this.state.sliderVal;
		return (
			<View>
				<Text style={{color: Theme.getBlack()}}>{this.props.text + ' '}</Text>
				<Text style={{color: Theme.getNavbarColor()}}>{displayValue}</Text>
				<Slider
					style={style.slider}
					thumbTintColor={Theme.getNavbarColor()}
					minimumTrackTintColor={Theme.getNavbarColor()}
					maximumTrackTintColor={Theme.getBlack()}
					step={1}
					minimumValue={18}
					maximumValue={100}
					onValueChange={(evt) => this.onChange(evt)}
					value={this.state.sliderVal}
				/>
			</View>
		);
	}

	/* function to set the new value of the changed slider value */
	private onChange(value: number) {
		this.setState({sliderVal: value});
		this.props.onChange(value);
	}
}
