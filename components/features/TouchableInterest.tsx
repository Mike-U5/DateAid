import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TempStorage } from '../../helpers/TempStorage';
import { Interest } from '../../data/Interests';
import { CircleImageButton } from '../elements/CircleImageButton';
import { StorableNumberArray } from '../../helpers/Storeables';

const screenWidth = (Math.round(Dimensions.get('window').width) / 3);

const styles = StyleSheet.create({
		container: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: screenWidth,
	}
});


class TouchableInterest extends Component<{interest: Interest, storage: StorableNumberArray}, {isSelected: boolean}> {

	constructor(props: Readonly<{ interest: Interest, storage: StorableNumberArray }>) {
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

	// Save the interest
	private saveInterest (id: number) {
		this.props.storage.get().then(async (data) => {
			// Check if array already contains id, true: remove from array and update, false: add to array and update
			if (data.includes(id)) {
				// Remove Border
				this.setState({isSelected: false})
				data.splice(data.indexOf(id), 1);
				this.props.storage.set(data);
			} else {
				// Add Border
				this.setState({isSelected: true})
				data.push(id);
				this.props.storage.set(data);
			}
		});
	}
}

export default TouchableInterest;
