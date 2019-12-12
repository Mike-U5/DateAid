import React, { Component } from 'react';
import { createAppContainer, NavigationContainer, NavigationNavigator, NavigationState, NavigationProp } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { StartupRegular } from './components/screens/StartupRegular';
import { PickActivity } from './components/screens/PickActivity';
import { SelectDateType } from './components/screens/SelectDateType';
import { Settings } from './components/screens/Settings';
import { Profile } from './components/screens/Profile';
import { ShowLocations } from './components/screens/ShowLocations';
import { ShowAdvice } from './components/screens/ShowAdvice';
import { ShowTips } from './components/screens/ShowTips';
import { SelectInterests } from './components/screens/SelectInterests';
import { ThemeSelect } from './components/screens/ThemeSelect';
import { Icebreakers } from './components/screens/Icebreakers';
import { DrawerIcon } from './components/elements/DrawerIcon';
import { Theme } from './helpers/Theme';
import { CommonStorage } from './helpers/CommonStorage';

class App extends Component<{}, {isReady: boolean}> {

	private appNavigator: NavigationContainer;
	private dateStackNavigator: any;
	private activityTabNavigator: NavigationNavigator<any, NavigationProp<NavigationState>>;
	private lesserActivityTabNavigator: NavigationNavigator<any, NavigationProp<NavigationState>>;
	private profileStackNavigator: any;
	private profileAppTabNavigator: NavigationNavigator<any, any>;
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
					headerTintColor: Theme.getWhite(),
					headerTitleStyle: {fontWeight: 'bold'},
				},
				headerLayoutPreset: 'center',
			}
		);

		this.activityTabNavigator = createMaterialTopTabNavigator(
			{
				Map: {screen: ShowLocations, navigationOptions: {swipeEnabled: false}},
				Advice: {screen: ShowAdvice},
				Tips: {screen: ShowTips},
			},
			{
				tabBarPosition: 'bottom',
				swipeEnabled: true,
				tabBarOptions: {
						activeTintColor: Theme.getBlack(),
						labelStyle: {fontWeight: 'bold'},
						indicatorStyle: {
							borderBottomColor: Theme.getWhite(),
							borderBottomWidth: 4,
						},
						style: {backgroundColor: Theme.getNavbarColor()},
				},
			}
		);

		this.lesserActivityTabNavigator = createMaterialTopTabNavigator(
			{
				Advice: {screen: ShowAdvice},
				Tips: {screen: ShowTips}
			},
			{
				tabBarPosition: 'bottom',
				swipeEnabled: true,
				tabBarOptions: {
						activeTintColor: Theme.getBlack(),
						labelStyle: {fontWeight: 'bold'},
						indicatorStyle: {
							borderBottomColor: Theme.getWhite(),
							borderBottomWidth: 4,
						},
						style: {backgroundColor: Theme.getNavbarColor()},
				},
			}
		);

		this.profileStackNavigator = createStackNavigator({
				// Alternate Variation
				Home: {
					screen: StartupRegular,
					navigationOptions: {title: 'Home', header: null},
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
					screen: this.activityTabNavigator,
					navigationOptions: {
						title: 'Locations',
						//headerStyle: {backgroundColor: Theme.getNavbarColor()}
					},
				},
				ShowDateDetails: {
					screen: this.lesserActivityTabNavigator,
					navigationOptions: {
						title: 'Details',
						headerStyle: {backgroundColor: Theme.getNavbarColor()},
					},
				},
			},
			{
				initialRouteName: 'Home',
				defaultNavigationOptions: {
					headerTintColor: Theme.getWhite(),
					headerTitleStyle: {fontWeight: 'bold'},
				},
				headerLayoutPreset: 'center',
			}
		);

		this.profileAppTabNavigator = createMaterialTopTabNavigator({
			App: {
				screen: this.profileStackNavigator, navigationOptions: {tabBarVisible: false}
			},
			Profile: {
				screen: Profile, navigationOptions: {tabBarVisible: false}
			},
			{
				swipeEnabled: false,
			}
		);

		this.mainDrawer = createDrawerNavigator({
			Home: { screen: this.profileAppTabNavigator, navigationOptions: {title: 'Home', drawerIcon: <DrawerIcon iconName='Home' iconSize={25} />} },
			Settings: { screen: Settings, navigationOptions: {title: 'Settings', drawerIcon: <DrawerIcon iconName='Settings' iconSize={25} />}  },
			Icebreakers: { screen: Icebreakers, navigationOptions: {title: 'Ice Breakers', drawerIcon: <DrawerIcon iconName='Icebreakers' iconSize={25} />}  },
		},
		{
			initialRouteName: 'Home',
		}
		);

		this.appNavigator = createAppContainer(this.mainDrawer);

		// Fetch theme
		CommonStorage.themeId.get().then(async (id) => {
			Theme.setTheme(id);
			this.setState({isReady: true});
		});
	}

	render() {return <this.appNavigator/>}


} export default App;
