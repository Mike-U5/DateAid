import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { MenuButton } from '../elements/MenuButton';
import { ColoredButton } from '../elements/ColoredButton';
import { CustomStackHeader } from '../features/CustomStackHeader';
import { ProfileStorage } from '../../helpers/ProfileStorage';
import { CommonStorage } from '../../helpers/CommonStorage';
import { Loading } from './Loading';
import { Theme } from '../../helpers/Theme';

export class Settings extends Component<{navigation: any, handleOnNavigateBackFromProfile: any}, {madeProfile: boolean, selectedTheme: number}> {

	constructor(props: Readonly<{navigation: any, handleOnNavigateBackFromProfile: any}>) {
		super(props);
		this.state = {madeProfile: false, selectedTheme: -1};
	}

	async componentWillMount(){
		await ProfileStorage.madeProfile.get().then((data) => {
			this.setState({madeProfile: data});
		});

		await CommonStorage.themeId.get().then((themeId) => {
			this.setState({selectedTheme: themeId});
		});
	}

	render() {
		if (this.state.selectedTheme < 0) {
			return (<Loading/>);
		}

		return (
			<View style={{alignItems: 'center'}}>
				<CustomStackHeader navigation={this.props.navigation} text='Settings'/>

				{ this.renderEditProfileButton() }
				<Picker selectedValue={this.state.selectedTheme} style={{height: 50, width: 200}} onValueChange={this.swapTheme}>
					<Picker.Item label='Default' value={0} />
					<Picker.Item label='Eiffel' value={1} />
				</Picker>
			</View>
		);
	}

	private renderEditProfileButton = () => {
		if (this.state.madeProfile) {
			return(
				<View>
					<ColoredButton text={'Edit Profile'} onPress={() => this.props.navigation.navigate('Profile', { onNavigateBack: this.props.navigation.state.params.onNavigateBack})}/>
					<ColoredButton text={'Remove Profile'} onPress={() => this.deleteProfile()}/>
				</View>
			);
		}
		return;
	}

	private deleteProfile(){
		ProfileStorage.clearAll();
		this.setState({madeProfile: false});
		this.props.navigation.state.params.onNavigateBack();
	}

	private renderThemeOptions = () => {
		const picks: JSX.Element[] = [];
		const themeList = Theme.getThemeList();
		for (let i = 0; i < themeList.length; i++) {
			<Picker.Item label={themeList[i].themeName} value={i} />
		}
		return picks;
	}

	private swapTheme = (itemValue: any, itemIndex: number): void => {
		this.setState({selectedTheme: itemIndex});
		Theme.setTheme(itemIndex);
	}
}
