import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image, Dimensions } from 'react-native';
import { MenuButton } from '../elements/MenuButton';
import { SettingsButton } from '../elements/SettingsButton';
import { DrawerButton } from '../elements/DrawerButton';
import { TempStorage } from '../../helpers/TempStorage';
import { ProfileStorage } from '../../helpers/ProfileStorage';
import { Theme } from '../../helpers/Theme';

const widthTopButtonNav = Math.round(Dimensions.get('window').width) * 0.9;
const marginTopButtonNav = Math.round(Dimensions.get('window').height) * 0.05;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: Theme.getNavbarColor(),
		alignItems: 'center',
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
		//ProfileStorage.clearAll(); //TESTING FUNC
		ProfileStorage.madeProfile.get().then( async (data) => {
			this.hasProfile = data;
			this.setState({isReady: true});
		});
	}

	handleOnNavigateBackFromProfile = () => {
		ProfileStorage.madeProfile.get().then( async (data) => {
			this.hasProfile = data;
			this.setState({isReady: true});
		});
		//console.log(this.state.isReady);
	}

	private renderMenuButtons() {
		if (this.state.isReady){
			if (this.hasProfile) {
				return(
					<MenuButton onPress={() => {this.props.navigation.navigate('PickActivity', { withProfile: true})}} text='Generate Date'/>
				);
			}
				return(
					<MenuButton onPress={() => {this.props.navigation.navigate('Profile', { onNavigateBack: this.handleOnNavigateBackFromProfile.bind(this)})}} text='Create Profile'/>
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
				<View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: marginTopButtonNav, width: widthTopButtonNav}}>
					<DrawerButton onPress={() => {this.props.navigation.openDrawer(); }} />
					<SettingsButton onPress={() => {this.props.navigation.navigate('Settings', { onNavigateBack: this.handleOnNavigateBackFromProfile.bind(this) })}} />
				</View>
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
