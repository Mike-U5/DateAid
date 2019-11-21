import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TempStorage } from '../../helpers/TempStorage';
import { CircleImageButton } from './CircleImageButton';
import { Interest } from '../../data/Interests';

const screenWidth = (Math.round(Dimensions.get('window').width) / 3);

const styles = StyleSheet.create({
		container: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: screenWidth,
	}
});


class Interests extends Component<{interest: Interest}, {isSelected: boolean}> {

	constructor(props: Readonly<{ interest: Interest; }>) {
		super(props);
		this.state = {isSelected: false};
	}

	render() {
		return (
			<View style={styles.container}>
				<CircleImageButton
					key={'twb' + this.props.interest.id}
					text={this.props.interest.name}
					img={this.props.interest.src}
					isSelected={this.state.isSelected}
					onPress={() => this.saveInterest(this.props.interest.id, this.props.interest.name)}
				/>
			</View>
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

export default Interests;
