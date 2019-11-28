import React, { Component } from 'react';
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { CircleImageRadioSelect } from '../features/CircleImageRadioSelect';
import { Colors } from '../../enums/Colors';
import { HeaderText } from '../elements/HeaderText';

const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '100%'
	}
});

export class SetType extends Component<{navigation: { navigate: (a0: string) => any; }}>  {
	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		/*
			remove this ?
			or make a better way to implement this without showing it on every page that needs navigation
		*/
		headerLeft: (
			<TouchableHighlight onPress={() => navigation.navigate('Home')} style={{width: 40, height: 40, marginStart: 25, padding: 10}}>
				<Image source={require('../../assets/material/left-arrow.png')} style={{width: 20, height: 20, tintColor: Colors.White}}	/>
			</TouchableHighlight>
		),
	});

	render() {
			return (
				<View style={style.container}>
					<CircleImageRadioSelect navigation={this.props.navigation} />
				</View>
		);
	}
}
