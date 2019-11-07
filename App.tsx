//import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { StartupRegular } from './components/screens/StartupRegular';
import { PickActivity } from './components/screens/PickActivity';
import { SetType } from './components/screens/SetType';
//import { SetAge } from './components/screens/SetAge';
import { SetInterests } from './components/screens/SetInterests';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const DateStackNavigator = createStackNavigator(
	{
		// Alternate Variations
		SetType: {
			screen: SetType,
			navigationOptions: {
				title: 'General'},
		},
		SetInterests: {
			screen: SetInterests,
			navigationOptions: {
				title: 'Interests'},
		},
	},
	{
		initialRouteName: 'SetType',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#ffc0c0'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},

//		mode: 'modal',
//		headerBackTitleVisible: false,
//		headerTransitionPreset: 'fade-in-place',
		headerLayoutPreset: 'center',
//
	}
);

	const MainStackNavigator = createStackNavigator(
		{
			// Alternate Variations
			Home: {
				screen: StartupRegular,
				navigationOptions: {
					title: 'Home'},
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
			initialRouteName: 'Home',
			headerMode: 'none'

//			mode: 'modal',
//			headerBackTitleVisible: false,
//			headerTransitionPreset: 'fade-in-place',
//			headerLayoutPreset: 'left',
		}
	);

	// Link the back button on Android and manage the environment.

	const NavigationApp = createAppContainer(MainStackNavigator);

	// Export the App

	export default NavigationApp;

	//const AppContainer = createAppContainer(MainStackNavigator);

	//export default class App {
//		render() {
//		return <AppContainer />;
//		}
//	}
