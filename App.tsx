import React, { Component } from 'react';
import { StartupRegular } from './components/screens/StartupRegular';
import { PickActivity } from './components/screens/PickActivity';
import { SelectDateType } from './components/screens/SelectDateType';
import { Settings } from './components/screens/Settings';
import { Profile } from './components/screens/Profile';
import { Icebreakers } from './components/screens/Icebreakers';
import { ShowLocations } from './components/screens/ShowLocations';
import { ShowAdvice } from './components/screens/ShowAdvice';
import { ShowTips } from './components/screens/ShowTips';
import { SelectInterests } from './components/screens/SelectInterests';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Colors } from './enums/Colors';

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
			headerStyle: {backgroundColor: Colors.BgLight},
			headerTintColor: Colors.White,
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

				activeTintColor: Colors.IkkonzomePink,
				labelStyle: {
					fontWeight: 'bold',
				},
				indicatorStyle: {
					borderBottomColor: Colors.IkkonzomePink,
					borderBottomWidth: 4,
				},
				style: {
					backgroundColor: Colors.BgLight,
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
			headerStyle: {backgroundColor: '#ffc0c0'},
			headerTintColor: '#fff',
			headerTitleStyle: {fontWeight: 'bold'},
		},
		headerLayoutPreset: 'center',
	}
);

const SettingsAppNavigator = createMaterialTopTabNavigator({
	App: {
		screen: ProfileStackNavigator, navigationOptions: {tabBarVisible: false}
	},
	CreateProfile: {
		screen: Profile, navigationOptions: {tabBarVisible: false}
	},
},
{
	swipeEnabled: false,
});

const MainDrawer = createDrawerNavigator({
	Home: SettingsAppNavigator,
	Settings: Settings,
	Icebreakers: Icebreakers,
});

const AppNavigator = createAppContainer(MainDrawer);


class App extends Component<{}>{
	render() {
		return <AppNavigator/>
	}
} export default App;
