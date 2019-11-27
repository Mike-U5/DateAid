import { StartupFirst } from './components/screens/StartupFirst';
import { PickActivity } from './components/screens/PickActivity';
import { SetType } from './components/screens/SetType';
import { ShowLocations } from './components/screens/ShowLocations';
import { ShowAdvice } from './components/screens/ShowAdvice';
import { ShowTips } from './components/screens/ShowTips';
//import { SetAge } from './components/screens/SetAge';
import { SetInterests } from './components/screens/SetInterests';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Colors } from './enums/Colors';

const DateStackNavigator = createStackNavigator(
	{
		SetType: {
			screen: SetType,
			navigationOptions: {title: 'General'},
		},
		SetInterests: {
			screen: SetInterests,
			navigationOptions: {title: 'Interests'},
		},
	},
	{
		initialRouteName: 'SetType',
		defaultNavigationOptions: {
			headerStyle: {backgroundColor: '#ffc0c0'},
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

	const MainStackNavigator = createStackNavigator(
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
				headerStyle: {backgroundColor: '#ffc0c0'},
				headerTintColor: '#fff',
				headerTitleStyle: {fontWeight: 'bold'},
			},
			headerLayoutPreset: 'center',
		}
	);


	const NavigationApp = createAppContainer(MainStackNavigator);

	export default NavigationApp;
