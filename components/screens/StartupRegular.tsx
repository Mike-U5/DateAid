import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';
import { TempStorage } from '../../helpers/TempStorage';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
});

export class StartupRegular extends Component<{ name: string, navigation: any }> {

	render() {
			// Logic
			const actEditProfile = function() {alert('Profile edit!')};
			// Resources
			const resLogo = require('../../assets/logo_shadow.png');

			return (
				<View style={styles.container}>
				<ImageBackground source={require('../../assets/gradient.png')} style={styles.container}>
				<Image style={{width: 150, height: 150}} source={resLogo}/>
				<StartMenuButton onPress={actEditProfile} text='Edit Profile'/>
				<StartMenuButton onPress={() => {this.props.navigation.navigate('PickActivity')}} text='Generate Date'/>
				<StartMenuButton onPress={() => {TempStorage.clearAll(); this.props.navigation.navigate('SetDate')}} text='One Time Use'/>
				</ImageBackground>
				</View>
			);
		}
}

//<StartMenuButton onPress={() => {TempStorage.clearAll(); this.props.navigation.navigate('SetDate')}} text='One Time Use'/>
