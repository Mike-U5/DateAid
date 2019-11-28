import React, { Component } from 'react';
import { View } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';

export class Settings extends Component<{name: string, navigation: any}> {


	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<StartMenuButton text={'Configure Interests'} onPress={null} />
			</View>
		);
	}
}
