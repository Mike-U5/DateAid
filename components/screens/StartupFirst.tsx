import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';
import { SettingsButton } from '../features/SettingsButton';
import { TempStorage } from '../../helpers/TempStorage';
import { Theme } from '../../helpers/Theme';

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
					<SettingsButton onPress={() => {this.props.navigation.navigate('Settings')}} />
					<View style={styles.container2}>
						<Image style={{width: 150, height: 150}} source={resLogo}/>
						<StartMenuButton onPress={actCreateProfile} text='Create Profile'/>
						<StartMenuButton onPress={() => {TempStorage.clearAll(); this.props.navigation.navigate('SetDate')}} text='One Time Use'/>
					</View>
					</ImageBackground>
				</View>
		);
	}
}
