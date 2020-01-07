import React, { Component } from 'react';
import { View } from 'react-native';
import { MenuButton } from '../elements/MenuButton';

/* exports the Clothing Advice */
export class Clothingadvice extends Component<{name: string, navigation: any}> {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<MenuButton text={'Your clothing advice right here!'} onPress={null} />
			</View>
		);
	}
}
