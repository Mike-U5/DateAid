import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { Colors } from '../enums/Colors';

export class NavigationHelper {

	public static displayNavOptions({ navigation }: {navigation: any}) {
		const arrowRight = require('../../assets/material/right-arrow.png');
		const arrowLeft = require('../../assets/material/left-arrow.png');
		const styleImg = {width: 20, height: 20, tintColor: Colors.White};
		const styleTouch = {width: 40, height: 40, marginEnd: 25, padding: 10};

		return {
			headerRight: (
				<TouchableHighlight onPress={() => navigation.navigate('SetInterests')} style={styleTouch}>
					<Image source={arrowRight} style={styleImg}	/>
				</TouchableHighlight>
			),
			headerLeft: (
				<TouchableHighlight onPress={() => navigation.navigate('Home')} style={styleTouch}>
					<Image source={arrowLeft} style={styleImg}	/>
				</TouchableHighlight>
			),
		}
	}

	public static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerRight: (
			<TouchableHighlight onPress={() => navigation.navigate('SetInterests')} style={{width: 40, height: 40, marginEnd: 25, padding: 10}}>
				<Image source={require('../../assets/material/right-arrow.png')} style={{width: 20, height: 20, tintColor: Colors.White}}	/>
			</TouchableHighlight>
		),
		headerLeft: (
			<TouchableHighlight onPress={() => navigation.navigate('Home')} style={{width: 40, height: 40, marginStart: 25, padding: 10}}>
				<Image source={require('../../assets/material/left-arrow.png')} style={{width: 20, height: 20, tintColor: Colors.White}}	/>
			</TouchableHighlight>
		),
	});


}
