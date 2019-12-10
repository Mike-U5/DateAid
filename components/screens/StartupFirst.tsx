import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { TempStorage } from '../../helpers/TempStorage';
import { Theme } from '../../helpers/Theme';
import { MenuButton } from '../elements/MenuButton';
import { TopNavigatorButton } from '../features/TopNavigatorButton';

///// unused?!?!?!?
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: Theme.get().black
	},
	container2: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export class StartupFirst extends Component<{ name: string, navigation: any }> {

		render() {
				const actCreateProfile = function() {alert('Create a new Profile!')};
				const resLogo = require('../../assets/logo_shadow.png');

			return (
				<View style={styles.container}>
					<ImageBackground source={require('../../assets/background.png')} style={styles.container}>
					<TopNavigatorButton margin={0.15} imageSource={require('../../assets/material/sidemenu.png')} onPress={() => {this.props.navigation.navigate('Drawer')}} />
					<TopNavigatorButton margin={0.05} imageSource={require('../../assets/material/settings.png')} onPress={() => {this.props.navigation.navigate('Settings')}} />
					<View style={styles.container2}>
						<Image style={{width: 150, height: 150}} source={resLogo}/>
						<MenuButton onPress={actCreateProfile} text='Create Profile'/>
						<MenuButton onPress={() => {TempStorage.clearAll(); this.props.navigation.navigate('SetDate')}} text='One Time Use'/>
					</View>
					</ImageBackground>
				</View>
		);
	}
}
