import React, { Component } from 'react';
import { View } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';
import { ProfileStorage } from '../../helpers/ProfileStorage';

export class CreateProfile extends Component<{navigation: any}> {

	makeProfile(){
		ProfileStorage.madeProfile.set(true);
	}


	render() {
		return (
			<View style={{alignItems: 'center'}}>

				<StartMenuButton text={'Save Profile'} onPress={() => this.makeProfile()} />
			</View>
		);
	}
}
