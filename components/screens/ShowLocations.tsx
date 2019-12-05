import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Theme } from '../../helpers/Theme';

export class ShowLocations extends Component<{navigation: any, value: string}> {

	/** Navigation for this page **/
	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		
	})

	constructor(props: Readonly<{navigation: any, value: string}>) {
		super(props);
	}

	render() {
		const mapName = this.props.navigation.getParam('dateName', '');

		return (
			<WebView
				source={{uri: 'https://google.com/maps/search/' + mapName + ',+zwolle/@52.5069603,6.097724,13z'}}
				style={{marginTop: 20}}
			/>
		);
	}
}
