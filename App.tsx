import { StartupFirst } from './components/screens/StartupFirst';
import { StartupRegular } from './components/screens/StartupRegular';
import { PickActivity } from './components/screens/PickActivity';
import { SetType } from './components/screens/SetType';
import { Settings } from './components/screens/Settings';
import { ShowLocations } from './components/screens/ShowLocations';
import { ShowAdvice } from './components/screens/ShowAdvice';
import { ShowTips } from './components/screens/ShowTips';
import { SetInterests } from './components/screens/SetInterests';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Colors } from './enums/Colors';

const profile = true;

const DateStackNavigator = createStackNavigator(
	{
		SetType: {
			screen: SetType,
			navigationOptions: {title: 'Choose date'},
		},
		SetInterests: {
			screen: SetInterests,
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
			navigationOptions: {
			},
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

	const NoProfileStackNavigator = createStackNavigator(
		{
			// Alternate Variation
			Home: {
				screen: StartupFirst,
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
				navigationOptions: {
				},
			},
		},
		{
			initialRouteName: 'Home',
			defaultNavigationOptions: {
				headerStyle: {backgroundColor: Colors.BgLight},
				headerTintColor: Colors.White,
				headerTitleStyle: {fontWeight: 'bold'},
			},
			headerLayoutPreset: 'center',
		}
	);

	let ProfileStack;

	if (profile === true) {
			ProfileStack = ProfileStackNavigator;

	} else if (profile === false) {
			ProfileStack = NoProfileStackNavigator;
	}


	const SettingsAppNavigator = createMaterialTopTabNavigator({
		App: {
			screen: ProfileStack,
			navigationOptions: {
				tabBarVisible: false
		},
	},
		Settings: {
			screen: Settings,
			navigationOptions: {
				tabBarVisible: false
			},
		},
	},
	{
		swipeEnabled: false,
	});

const AppNavigator = createAppContainer(SettingsAppNavigator);

export default AppNavigator;
