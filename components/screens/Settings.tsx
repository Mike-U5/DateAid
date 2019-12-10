import React, { Component } from 'react';
import { View } from 'react-native';
import { MenuButton } from '../elements/MenuButton';
import { ColoredButton } from '../elements/ColoredButton';
import { ProfileStorage } from '../../helpers/ProfileStorage';

export class Settings extends Component<{navigation: any}, {madeProfile: boolean}> {
	constructor(props: Readonly<{navigation: any }>) {
		super(props);
		this.state = {madeProfile: false};
	}

async componentWillMount(){
	await ProfileStorage.madeProfile.get().then((data) => {
		this.setState({madeProfile: data});
	});
}

private renderEditProfileButton(){
	if (this.state.madeProfile === true){
		return 	<ColoredButton text={'Edit Profile'} onPress={() => this.props.navigation.navigate('Profile')}/>
	}
	return;
}

	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<MenuButton text={'Configure Interests'} onPress={null} />
				{ this.renderEditProfileButton() }
			</View>
		);
	}
}
