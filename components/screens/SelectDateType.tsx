import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { CircleImageRadioSelect } from '../features/CircleImageRadioSelect';
import { NavHelper } from '../../helpers/NavHelper';
import { NavIcons } from '../../data/NavIcons';

const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '100%'
	}
});

export class SelectDateType extends Component<{navigation: { navigate: (a1: string) => any; }}>  {
	/** Navigation for this page **/
	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerRight: NavHelper.getRight(NavIcons.Forward, () => {navigation.navigate('SetInterests')}),
		headerLeft: NavHelper.getLeft(NavIcons.Backward, () => {navigation.navigate('Home')})
	});

	render() {
			return (
				<View style={style.container}>
					<CircleImageRadioSelect navigation={this.props.navigation} />
				</View>
		);
	}
}
