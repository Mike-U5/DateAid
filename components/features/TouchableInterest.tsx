import React, { Component } from 'react';
import {StyleSheet, ImageSourcePropType} from 'react-native';
import { TempStorage } from '../../helpers/TempStorage';
import { Colors } from '../../enums/Colors';
import { SquareImageButton } from './SquareImageButton';


class Interests extends Component<{interest: { id: number; name: string; src: ImageSourcePropType; }}, {isSelected: boolean}> {

	constructor(props: Readonly<{ interest: { id: number; name: string; src: ImageSourcePropType; }; }>) {
		super(props);
		this.state = {isSelected: false};
	}

	render() {
		return (
			<SquareImageButton
				key={'twb' + this.props.interest.id}
				text={this.props.interest.name}
				img={this.props.interest.src}
				isSelected={this.state.isSelected}
				onPress={() => this.saveInterest(this.props.interest.id, this.props.interest.name)}
			/>
				);
		}

		private saveInterest = (id: number, interest: string) => {
			TempStorage.userInterests.get().then(async (data) => {
			// check if array already contains id, true: remove from array and update, false: add to array and update
			if (data.includes(id)) {
				const index = data.indexOf(id);

				// Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
				if (index > -1) {
					// border verwijderen
					this.setState({isSelected: false})
					console.log(interest + ' verwijderd');
					data.splice(index, 1);
					TempStorage.userInterests.set(data);
				}
			} else {
				// border krijgen
				this.setState({isSelected: true})
				console.log(interest + ' toegevoegd');
				data.push(id);
				TempStorage.userInterests.set(data);
			}
			});
		}
}
const styles = StyleSheet.create({
	interestContainer: {
		marginLeft: 10,
		marginTop: 10,
		width: 100,
		height: 100,
		backgroundColor: Colors.BgDark
	},
	interestSelected: {
		marginLeft: 10,
		marginTop: 10,
		width: 100,
		height: 100,
		borderRadius: 10,
		borderWidth: 3,
		borderColor: '#d6d7da',
		backgroundColor: Colors.BgDark
	},
});

export default Interests;
