import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
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


class TouchableInterest extends Component<{interest: Interest, storage: StorableNumberArray, onClick: (a: number, b: number[]) => boolean}, {isSelected: boolean}> {

	constructor(props: Readonly<{ interest: Interest; storage: StorableNumberArray; onClick: (a: number, b: number[]) => boolean; }>) {
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
					onPress={() => this.clickAction(this.props.interest.id)}
				/>
			</View>
		);
	}

	private clickAction = (id: number) => {
		this.props.storage.get().then(async (data) => {
			const result = this.props.onClick(id, data);
			this.setState({isSelected: result})
		});
	}
}

export default TouchableInterest;
