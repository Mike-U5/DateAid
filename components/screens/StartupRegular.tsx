import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
 	},
});

export class StartupRegular extends Component {
	static navigationOptions = {
	//title: "Regular"
	tabBarVisible: false
	}

		render() {
				// Logic
				const actContinueWithProfile = function() {alert('Let me give you a tip!')};
				const actEditProfile = function() {alert('Edit the existing Profile!')};
				const actOneTimeUse = function() {alert('Just one date?')};
				// Resources
				const resLogo = require('../../assets/logo_shadow.png');

				return (
					<View style={styles.container}>
						<ImageBackground source={require('../../assets/gradient.png')} style={styles.container}>
						<Image style={{width: 150, height: 150}} source={resLogo}/>
						<Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome back {this.props.name}!</Text>
						<StartMenuButton onPress={actContinueWithProfile} text='Coninue with Profile'/>
						<StartMenuButton onPress={actEditProfile} text='Edit Profile'/>
						<StartMenuButton onPress={actOneTimeUse} text='One Time Use'/>
						</ImageBackground>
					</View>
			);
  }
}
