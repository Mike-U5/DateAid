import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { StartupRegular } from './components/screens/StartupRegular';
import { PickActivity } from './components/screens/PickActivity';
import { SetType } from './components/screens/SetType';
import { SetAge } from './components/screens/SetAge';
import { SetInterests } from './components/screens/SetInterests';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const DateStackNavigator = createStackNavigator(
	{
		// Alternate Variations
		SetType: {
			screen: SetType,
			navigationOptions: {
				title: 'SetType'},
		},
		SetAge: {
			screen: SetAge,
			navigationOptions: {
				title: 'SetAge'},
		},
		SetInterests: {
			screen: SetInterests,
			navigationOptions: {
				title: 'SetInterests'},
		},
	},
	{
		initialRouteName: 'SetType',
		mode: 'modal',
		headerBackTitleVisible: false,
		headerTransitionPreset: 'fade-in-place',
		headerLayoutPreset: 'left',
	}
);
//export default function App() {
	// Logic
	//const actCreateProfile = function() {alert('Create a Profile!')};
	//const actOneTimeUse = function() {alert('Just a side-ho eh?')};
	// Resources
	//const resLogo = require('./assets/logo_shadow.png');

	const MainStackNavigator = createStackNavigator(
		{
			// Alternate Variations
			Regular: {
				screen: StartupRegular,
				navigationOptions: {
					title: 'Reg 1'},
			},
			SetDate: {
				screen: DateStackNavigator
			},
			PickActivity: {
				screen: PickActivity,
				navigationOptions: {
					title: 'Pick Activity'},
			},
		},
		{
			initialRouteName: 'Regular',
			mode: 'modal',
			headerBackTitleVisible: false,
			headerTransitionPreset: 'fade-in-place',
			headerLayoutPreset: 'left',
		}
	);

	// Link the back button on Android and manage the environment.

	const NavigationApp = createAppContainer(MainStackNavigator);

	// Export the App

	export default NavigationApp;
