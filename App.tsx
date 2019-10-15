import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { StartMenuButton } from './components/StartMenuButton';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E8B5C7',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
 	},
});

export default function App() {
	// Logic
	const actCreateProfile = function() {alert('Create a Profile!')};
	const actOneTimeUse = function() {alert('Just a side-ho eh?')};
	// Resources
	const resLogo = require('./assets/logo_shadow.png');

	return (
		<View style={styles.container}>
			<ImageBackground source={require('./assets/gradient.png')} style={styles.container}>
			<Image style={{width: 150, height: 150}} source={resLogo}/>
			<StartMenuButton onPress={actCreateProfile} text='Create Profile'/>
			<StartMenuButton onPress={actOneTimeUse} text='One Time Use'/>
			</ImageBackground>
		</View>
	);
}
