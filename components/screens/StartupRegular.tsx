import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';
import { SettingsButton } from '../features/SettingsButton';
import { TempStorage } from '../../helpers/TempStorage';
import { Theme } from '../../helpers/Theme';
import { CommonStorage } from '../../helpers/CommonStorage';
import { Loading } from './Loading';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: Theme.get().black
	},
	container2: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export class StartupRegular extends Component<{ name: string, navigation: any }, {isReady: boolean}> {

	constructor(props: Readonly<{ name: string; navigation: any; }>) {
		super(props);
		this.state = {isReady: false};
	}

	componentDidMount() {
		CommonStorage.themeId.get().then(async (data) => {
			console.log('RELOAD: ' + data);
			Theme.reload();
			this.setState({isReady: true});
		});
	}

	render() {
		// Wait for component to be ready
		if (!this.state.isReady) {
			return (<Loading/>);
		}

		// Component is ready
		return (
			<View style={styles.container}>
			<ImageBackground source={require('../../assets/background.png')} style={styles.container}>
			<SettingsButton onPress={() => {this.props.navigation.navigate('Settings')}} />
			<View style={styles.container2}>
				<Image style={{width: 150, height: 150}} source={require('../../assets/logo_shadow.png')}/>
				<StartMenuButton onPress={() => {this.props.navigation.navigate('PickActivity')}} text='Generate Date'/>
				<StartMenuButton onPress={() => {TempStorage.clearAll(); this.props.navigation.navigate('SetDate')}} text='One Time Use'/>
			</View>
			</ImageBackground>
			</View>
		);
	}
}
