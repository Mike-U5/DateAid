import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StartupFirst } from './components/screens/StartupFirst';
import { SelectDateType } from './components/screens/SelectDateType';

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

//<StartupRegular name='Timo'/>

	return (
		<View style={styles.container}>
			<SelectDateType name='boi' />
		</View>
	);
}
