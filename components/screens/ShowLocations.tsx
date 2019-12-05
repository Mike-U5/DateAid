import React, { Component } from 'react';
import { WebView } from 'react-native';

export class ShowLocations extends Component<{navigation: any, value: string}> {
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
