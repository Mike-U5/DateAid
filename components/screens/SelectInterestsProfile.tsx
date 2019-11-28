import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { ProfileStorage } from '../../helpers/ProfileStorage';
import { SelectInterests } from './SelectInterests';

export class SelectInterestsProfile extends SelectInterests {

	protected readonly storageLocation = ProfileStorage.userInterests;

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
}
