import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { TempStorage } from '../../helpers/TempStorage';
import { Theme } from '../../helpers/Theme'
import { ProfileStorage } from '../../helpers/ProfileStorage';
import { CommonStorage } from '../../helpers/CommonStorage';
import { MenuButton } from '../elements/MenuButton';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: Theme.get().white
	},
	container2: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export class ThemeSelect extends Component<{ navigation: any }, {isReady: boolean}> {
	private currentTheme = 0;

	constructor(props: Readonly<{navigation: any }>) {
		super(props);
		this.state = {isReady: false};
		CommonStorage.themeId.get().then(async (id) => {
			this.currentTheme = id;
			this.setState({isReady: true});
		});
	}

	render() {
		return (
			<View style={styles.container}>
			<ImageBackground source={require('../../assets/background.png')} style={styles.container}>
				<MenuButton onPress={() => {this.selectTheme(0)}} text='Default'/>
				<MenuButton onPress={() => {this.selectTheme(1)}} text='Eiffel'/>
			</ImageBackground>
			</View>
		);
	}

	private selectTheme(id: number) {
		if (id !== this.currentTheme) {
			CommonStorage.themeId.set(id);
		}
		this.props.navigation.navigate('Home');
	}
}
