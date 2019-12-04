import React, { Component } from 'react';
import { StartupRegular } from './components/screens/StartupRegular';
import { PickActivity } from './components/screens/PickActivity';
import { SelectDateType } from './components/screens/SelectDateType';
import { Settings } from './components/screens/Settings';
import { CreateProfile } from './components/screens/CreateProfile';
import { ShowLocations } from './components/screens/ShowLocations';
import { ShowAdvice } from './components/screens/ShowAdvice';
import { ShowTips } from './components/screens/ShowTips';
import { SelectInterests } from './components/screens/SelectInterests';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Theme } from './helpers/Theme';

const DateStackNavigator = createStackNavigator(
	{
		SetType: {
			screen: SelectDateType,
			navigationOptions: {title: 'Choose date'},
		},
		SetInterests: {
			screen: SelectInterests,
			navigationOptions: {title: 'Choose interests'},
		},
	},
	{
		initialRouteName: 'SetType',
		defaultNavigationOptions: {
			headerStyle: {backgroundColor: Theme.get().navbarColor},
			headerTintColor: Theme.get().white,
			headerTitleStyle: {fontWeight: 'bold'},
		},
		headerLayoutPreset: 'center',
	}
);

const ActivityNavigator = createMaterialTopTabNavigator(
	{
		Map: {
			screen: ShowLocations,
		},
		Advice: {
			screen: ShowAdvice,
		},
		Tips: {
			screen: ShowTips,
		}
	},
	{
		tabBarPosition: 'bottom',
		swipeEnabled: true,
		tabBarOptions: {

				activeTintColor: Theme.get().white,
				labelStyle: {
					fontWeight: 'bold',
				},
				indicatorStyle: {
					borderBottomColor: Theme.get().white,
					borderBottomWidth: 4,
				},
				style: {
					backgroundColor: Theme.get().white,
				},
		},
	}
);

const ProfileStackNavigator = createStackNavigator(
	{
		// Alternate Variation
		Home: {
			screen: StartupRegular,
			navigationOptions: {title: 'Home', header: null},
		},
		SetDate: {
			screen: DateStackNavigator,
			navigationOptions: {header: null},
		},
		PickActivity: {
			screen: PickActivity,
			navigationOptions: {title: 'Pick Activity'},
		},
		ShowLocations: {
			screen: ActivityNavigator,
			navigationOptions: {},
		},
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			headerStyle: {backgroundColor: Theme.get().navbarColor},
			headerTintColor: Theme.get().white,
			headerTitleStyle: {fontWeight: 'bold'},
		},
		headerLayoutPreset: 'center',
	}
);

const SettingsAppNavigator = createMaterialTopTabNavigator({
	App: {
		screen: ProfileStackNavigator, navigationOptions: {tabBarVisible: false}
	},
	Settings: {
		screen: Settings, navigationOptions: {tabBarVisible: false}
	},
	CreateProfile: {
		screen: CreateProfile, navigationOptions: {tabBarVisible: false}
	},
},
{
	swipeEnabled: false,
});

const AppNavigator = createAppContainer(SettingsAppNavigator);


class App extends Component<{}>{

	render() {
		return <AppNavigator/>
	}

} export default App;
