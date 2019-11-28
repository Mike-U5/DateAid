import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TempStorage } from '../../helpers/TempStorage';
import { Interest } from '../../data/Interests';
import { CircleImageButton } from '../elements/CircleImageButton';

const screenWidth = (Math.round(Dimensions.get('window').width) / 3);

const styles = StyleSheet.create({
		container: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: screenWidth,
	}
});


class TouchableInterest extends Component<{interest: Interest}, {isSelected: boolean}> {

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
					onPress={() => this.saveInterest(this.props.interest.id)}
				/>
			</View>
		);
	}

	private saveInterest = (id: number) => {
		TempStorage.userInterests.get().then(async (data) => {
			// check if array already contains id, true: remove from array and update, false: add to array and update
			if (data.includes(id)) {
				const index = data.indexOf(id);

				// Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
				if (index > -1) {
					// Remove Border
					this.setState({isSelected: false})
					data.splice(index, 1);
					TempStorage.userInterests.set(data);
				}
			} else {
				// Add Border
				this.setState({isSelected: true})
				data.push(id);
				TempStorage.userInterests.set(data);
			}
		});
	}
}

export default TouchableInterest;
