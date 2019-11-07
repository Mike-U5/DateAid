import React, {Component} from 'react';
import { Slider, Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../enums/Colors';

const styles = StyleSheet.create({
	slider: {
		width: 330
	},
	txt: {
		color: Colors.BgLight
	}
});

export class SmoothSlider extends Component<{baseValue: number, onChange: (arg0: number) => void, text: string}, {sliderVal: number}> {
	constructor(props) {
		super(props);
		this.state = {sliderVal: this.props.baseValue};
	}

	private onChange(value: string) {
		const sliderVal = parseInt(value);
		this.setState({sliderVal: sliderVal});
		this.props.onChange(sliderVal);
	}

	render() {
		const displayValue = (this.state.sliderVal > 99) ? '99+' : this.state.sliderVal;
		return (
			<View>
				<Text style={styles.txt}>{this.props.text + ' '}</Text>
				<Text style={{color: Colors.LogoBright}}>{displayValue}</Text>
				<Slider
					style={styles.slider}
					thumbTintColor={Colors.LogoMed}
					minimumTrackTintColor={Colors.BgLight}
					maximumTrackTintColor={Colors.BgDark}
					step={1}
					minimumValue={18}
					maximumValue={100}
					onValueChange={this.onChange.bind(this)}
					value={this.state.sliderVal}
				/>
			</View>
		);
	}
}
