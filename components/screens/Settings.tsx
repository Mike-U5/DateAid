import React, { Component } from 'react';
import { View } from 'react-native';
import { MenuButton } from '../elements/MenuButton';
import { ColoredButton } from '../elements/ColoredButton';

export class Settings extends Component<{name: string, navigation: any}> {


	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<MenuButton text={'Configure Interests'} onPress={null} />
				<ColoredButton text={'Edit Profile'} onPress={() => this.props.navigation.navigate('Profile')}/>
			</View>
		);
	}
}
