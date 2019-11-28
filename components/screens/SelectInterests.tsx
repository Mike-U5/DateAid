import React, { Component } from 'react';
import { View, Image, TouchableHighlight, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import interests from '../../data/Interests';
import TouchableInterest from '../features/TouchableInterest';
import { TempStorage } from '../../helpers/TempStorage';

export class SelectInterests extends Component {

	protected readonly storageLocation = TempStorage.userInterests;
	private readonly screenWidth = Math.round(Dimensions.get('window').width);
	private readonly screenHeight = Math.round(Dimensions.get('window').height) * 0.9;

	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerRight: (
			<TouchableHighlight onPress={() => navigation.navigate('PickActivity')} style={{width: 40, height: 40, marginEnd: 25, padding: 10}}>
				<Image source={require('../../assets/material/check.png')} style={{width: 20, height: 20, tintColor: '#fff'}}	/>
			</TouchableHighlight>
		),
		headerLeft: (
			<TouchableHighlight onPress={() => navigation.goBack()} style={{width: 40, height: 40, marginStart: 25, padding: 10}}>
				<Image source={require('../../assets/material/left-arrow.png')} style={{width: 20, height: 20, tintColor: '#fff'}}	/>
			</TouchableHighlight>
		)
	})

	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<ScrollView style={{width: this.screenWidth, height: this.screenHeight}} contentContainerStyle={{flexGrow: 1}}>
					<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
						{this.renderInterests()}
					</View>
				</ScrollView>
			</View>
		);
	}

	private renderInterests() {
		const iconNames: JSX.Element[] = [];

		for (let i = 0; i < interests.length; i++) {
			const s = interests[i];
			iconNames.push(<TouchableInterest key={s.id} interest={s} storage={this.storageLocation}/>);
		}

		return iconNames;
	}
}
