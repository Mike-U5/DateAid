import React, { Component } from 'react';
import { StartupRegular } from './components/screens/StartupRegular';
import { PickActivity } from './components/screens/PickActivity';
import { SelectDateType } from './components/screens/SelectDateType';
import { Settings } from './components/screens/Settings';
import { Profile } from './components/screens/Profile';
import { ShowLocations } from './components/screens/ShowLocations';
import { ShowAdvice } from './components/screens/ShowAdvice';
import { ShowTips } from './components/screens/ShowTips';
import { SelectInterests } from './components/screens/SelectInterests';
import { createAppContainer, NavigationContainer, NavigationNavigator, NavigationState, NavigationProp } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Theme } from './helpers/Theme';
import { CommonStorage } from './helpers/CommonStorage';
import { ThemeSelect } from './components/screens/ThemeSelect';
import { Icebreakers } from './components/screens/Icebreakers';

class App extends Component<{}, {isReady: boolean}> {

	private appNavigator: NavigationContainer;
	private dateStackNavigator: any;
	private activityNavigator: NavigationNavigator<any, NavigationProp<NavigationState>>;
	private lesserActivityNavigator: NavigationNavigator<any, NavigationProp<NavigationState>>;
	private profileStackNavigator: any;
	private settingsAppNavigator: NavigationNavigator<any, any>;
	private mainDrawer: any;

	constructor(props: any) {
		super(props);
		this.state = {isReady: false};

		this.dateStackNavigator = createStackNavigator(
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
					headerTintColor: Theme.get().white,
					headerTitleStyle: {fontWeight: 'bold'},
				},
				headerLayoutPreset: 'center',
			}
		);

		this.activityNavigator = createMaterialTopTabNavigator(
			{
				Map: {screen: ShowLocations},
				Advice: {screen: ShowAdvice},
				Tips: {screen: ShowTips}
			},
			{
				tabBarPosition: 'bottom',
				swipeEnabled: true,
				tabBarOptions: {
						activeTintColor: Theme.get().black,
						labelStyle: {fontWeight: 'bold'},
						indicatorStyle: {
							borderBottomColor: Theme.get().white,
							borderBottomWidth: 4,
						},
						style: {backgroundColor: Theme.get().navbarColor},
				},
			}
		);

		this.lesserActivityNavigator = createMaterialTopTabNavigator(
			{
				Advice: {screen: ShowAdvice},
				Tips: {screen: ShowTips}
			},
			{
				tabBarPosition: 'bottom',
				swipeEnabled: true,
				tabBarOptions: {
						activeTintColor: Theme.get().black,
						labelStyle: {fontWeight: 'bold'},
						indicatorStyle: {
							borderBottomColor: Theme.get().white,
							borderBottomWidth: 4,
						},
						style: {backgroundColor: Theme.get().navbarColor},
				},
			}
		);

		this.profileStackNavigator = createStackNavigator({
				// Alternate Variation
				Home: {
					screen: StartupRegular,
					navigationOptions: {title: 'Home', header: null},
				},
				ThemeSelect: {
					screen: ThemeSelect,
					navigationOptions: {title: 'Select Theme', header: null},
				},
				SetDate: {
					screen: this.dateStackNavigator,
					navigationOptions: {header: null},
				},
				PickActivity: {
					screen: PickActivity,
					navigationOptions: {title: 'Pick Activity'},
				},
				ShowLocations: {
					screen: this.activityNavigator,
					navigationOptions: {},
				},
				ShowDateDetails: {
					screen: this.lesserActivityNavigator,
					navigationOptions: {},
				},
			},
			{
				initialRouteName: 'Home',
				defaultNavigationOptions: {
					headerTintColor: Theme.get().white,
					headerTitleStyle: {fontWeight: 'bold'},
				},
				headerLayoutPreset: 'center',
			}
		);

		this.settingsAppNavigator = createMaterialTopTabNavigator({
			App: {
				screen: this.profileStackNavigator, navigationOptions: {tabBarVisible: false}
			},
			Settings: {
				screen: Settings, navigationOptions: {tabBarVisible: false}
			},
			CreateProfile: {
				screen: Profile, navigationOptions: {tabBarVisible: false}
			},
		},
		{
			swipeEnabled: false,
		});

		this.mainDrawer = createDrawerNavigator({
			Home: this.settingsAppNavigator,
			Settings: Settings,
			Icebreakers: Icebreakers,
		});

		this.appNavigator = createAppContainer(this.settingsAppNavigator);

		// Fetch theme
		CommonStorage.themeId.get().then(async (id) => {
			Theme.setTheme(id);
			this.setState({isReady: true});
		});
	}

	render() {return <this.appNavigator/>}


} export default App;
