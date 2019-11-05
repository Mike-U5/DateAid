import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StartupFirst } from './components/screens/StartupFirst';
import { StartupRegular } from './components/screens/StartupRegular';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
});

//export default function App() {
	// Logic
	//const actCreateProfile = function() {alert('Create a Profile!')};
	//const actOneTimeUse = function() {alert('Just a side-ho eh?')};
	// Resources
	//const resLogo = require('./assets/logo_shadow.png');

      //<StartupRegular name='Timo'/>
			// const RootStack = createStackNavigator(
			// {
			// 	First: { screen: StartupFirst },
			//   Regular: { screen: StartupRegular },
			// },
			// {
			//     initialRouteName: 'First',
			// }
			//
			// );
			//
			// const App = createAppContainer(RootStack);
			// export default App;
			const TabBarComponent = props => <BottomTabBar {...props} />;

			const TabScreens = createBottomTabNavigator(
			{
				First: { screen: StartupFirst },
				Regular: { screen: StartupRegular },
			},
			{
		    tabBarComponent: props => (
		      <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
		    ),
		  }

			);

			const App = createAppContainer(TabScreens);
			export default App;

		// return (
		// 	<View style={styles.container}>
		// 		<RootStack />
		// 	</View>
		// );
	//}
