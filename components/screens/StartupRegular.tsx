import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { MenuButton } from '../elements/MenuButton';
import { SettingsButton } from '../elements/SettingsButton';
import { DrawerButton } from '../elements/DrawerButton';
import { TempStorage } from '../../helpers/TempStorage';
import { ProfileStorage } from '../../helpers/ProfileStorage';
import { Colors } from '../../enums/Colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: Colors.MainBgColor
	},
	container2: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export class StartupRegular extends Component<{ navigation: any }, {isReady: boolean}> {
	private hasProfile: boolean = false;

	constructor(props: Readonly<{navigation: any }>) {
		super(props);
		this.state = {isReady: false};
		ProfileStorage.clearAll(); //TESTING FUNC
		ProfileStorage.madeProfile.get().then( async (data) => {
			this.hasProfile = data;
			this.setState({isReady: true});
		});
	}

	handleOnNavigateBack = () => {
		ProfileStorage.madeProfile.get().then( async (data) => {
			this.hasProfile = data;
			this.setState({isReady: true});
		});
}

	private renderMenuButtons() {
		if (this.state.isReady){
			if (this.hasProfile) {
				return(
					<MenuButton onPress={() => {this.props.navigation.navigate('PickActivity', { withProfile: true})}} text='Generate Date'/>
				);
			}
				return(
					<MenuButton onPress={() => {this.props.navigation.navigate('CreateProfile', { onNavigateBack: this.handleOnNavigateBack.bind(this)})}} text='Create Profile'/>
				);
			}
		return;
	}



	render() {
			// Logic
			// Resources
			const resLogo = require('../../assets/logo_shadow.png');

			return (
				<View style={styles.container}>
				<ImageBackground source={require('../../assets/background.png')} style={styles.container}>
				<SettingsButton onPress={() => {this.props.navigation.navigate('Settings')}} />
				<DrawerButton onPress={() => {this.props.navigation.navigate('Settings')}} />
				<View style={styles.container2}>
					<Image style={{width: 150, height: 150}} source={resLogo}/>
					{this.renderMenuButtons()}
					<MenuButton onPress={() => {TempStorage.clearAll(); this.props.navigation.navigate('SetDate')}} text='One Time Use'/>
				</View>
				</ImageBackground>
				</View>
			);
		}
}
