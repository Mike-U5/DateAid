import { StartupFirst } from './components/screens/StartupFirst';
import { StartupRegular } from './components/screens/StartupRegular';
import { PickActivity } from './components/screens/PickActivity';
import { SelectDateType } from './components/screens/SelectDateType';
import { Settings } from './components/screens/Settings';
import { ShowLocations } from './components/screens/ShowLocations';
import { ShowAdvice } from './components/screens/ShowAdvice';
import { ShowTips } from './components/screens/ShowTips';
import { SelectInterests } from './components/screens/SelectInterests';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Theme } from './helpers/Theme';

const profile = true;

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
				headerStyle: {backgroundColor: Theme.get().white},
				headerTintColor: Theme.get().white,
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
