/* perform necessary imports */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
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

class TouchableInterest extends Component<{interest: Interest, onClick: (a: number) => void, setSelected: (a: number) => boolean}, {isSelected: boolean}> {
	constructor(props: Readonly<{ interest: Interest; onClick: (a: number) => void; setSelected: (a: number) => boolean; }>) {
		super(props);
		this.state = {isSelected: this.props.setSelected(this.props.interest.id)};
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
		this.props.onClick(id);
		this.setState({isSelected: this.props.setSelected(id)});
	}
}

export default TouchableInterest;
