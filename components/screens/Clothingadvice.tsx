import React, { Component } from 'react';
import { View } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';

export class Clothingadvice extends Component<{name: string, navigation: any}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<StartMenuButton text={'Your clothing advice right here!'} onPress={null} />
			</View>
		);
	}
}
