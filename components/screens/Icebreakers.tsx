/* perform necessary imports */
import React, { Component } from 'react';
import { ScrollView, Text, Picker, View} from 'react-native';
import { CustomStackHeader } from '../features/CustomStackHeader';
import icebreakers, {IcebreakerCategory} from '../../data/Icebreakers';

/* Exports all Icebreakers */
export class Icebreakers extends Component<{name: string, navigation: any}, {pickerSelection: any, icebreakers: any}> {

	constructor(props: Readonly<{ name: string; navigation: any; }>) {
		super(props);
		this.state = { pickerSelection: '', icebreakers: 0}
	}
	render() {
			return (
				<View>
					<CustomStackHeader navigation={this.props.navigation} text='Ice Breakers'/>
					<ScrollView>
					<Text> The Default value is {this.state.pickerSelection} </Text>
						<Picker
							selectedValue = {this.state.pickerSelection}
							onValueChange={(itemValue, itemIndex) =>
								this.filterContent(itemValue, itemIndex)
							}>
							{this.renderPickerItems()}
						</Picker>
						{this.renderIcebreakers()}
					</ScrollView>
				</View>
			);
	}

	/* handler that executes on dropdown button change */
	private filterContent = (pickerValue: any, pickerIndex: any) => {
		this.setState({pickerSelection: pickerValue, icebreakers: pickerIndex});
		this.renderIcebreakers();
	}

	/* generates the dropdown items based on the Enum IcebreakerCategory */
	private renderPickerItems = () => {
		const pickerItems: JSX.Element[] = [];
		for (let i = 0; i < Object.keys(IcebreakerCategory).length / 2; i++) {
			const s = IcebreakerCategory[i];
			pickerItems.push(<Picker.Item key={s} label={s} value={s}/>);
		}
		return pickerItems
	}

	/* 	function that gets executed when the filter changes and shows icebreakers on the screen	 */
	private renderIcebreakers = () => {
		const icebreakerValue: JSX.Element[] = [];
		if (this.state.icebreakers === IcebreakerCategory.All) {
			for (let i = 0; i < icebreakers.length; i++) {
				const s = icebreakers[i];
				icebreakerValue.push(<Text key={s.text}> {s.text} </Text>);
			}
		} else {
			for (let i = 0; i < icebreakers.length; i++) {
				const s = icebreakers[i];
				if (s.category === this.state.icebreakers) {
					icebreakerValue.push(<Text key={s.text}> {s.text} </Text>);
				}
			}
		}
		return icebreakerValue
	}
}
