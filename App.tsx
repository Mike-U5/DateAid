import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { StartupFirst } from './screens/StartupFirst';
import { StartupRegular } from './screens/StartupRegular';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
 	},
});

export default function App() {
	// Logic
	//const actCreateProfile = function() {alert('Create a Profile!')};
	//const actOneTimeUse = function() {alert('Just a side-ho eh?')};
	// Resources
	//const resLogo = require('./assets/logo_shadow.png');



	return (
		<View style={styles.container}>
      <StartupRegular name='Timo'/>
		</View>
	);
}
