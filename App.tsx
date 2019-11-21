import { StartupRegular } from './components/screens/StartupRegular';
import { PickActivity } from './components/screens/PickActivity';
import { SetType } from './components/screens/SetType';
import { ShowLocations } from './components/screens/ShowLocations';
//import { SetAge } from './components/screens/SetAge';
import { SetInterests } from './components/screens/SetInterests';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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

	const MainStackNavigator = createStackNavigator(
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
				screen: ShowLocations,
				navigationOptions: {
					title: 'Show Locations',
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
