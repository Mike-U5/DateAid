import React, { Component } from 'react';
import { View } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';

export class Icebreakers extends Component<{name: string, navigation: any}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<StartMenuButton text={'Lets check out some Icebreakers'} onPress={null} />
			</View>
		);
	}
}
