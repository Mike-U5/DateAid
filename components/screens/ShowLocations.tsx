import React, { Component } from 'react';
import { WebView } from 'react-native';

export class ShowLocations extends Component<{navigation: any, value: string}> {
	constructor(props: Readonly<{navigation: any, value: string}>) {
		super(props);
		this.state = {
		}
	}

	render() {
		const name = this.props.navigation.getParam('dateName', '')
		return (
				<WebView
					source={{uri: 'https://google.com/maps/search/' + name + ',+zwolle/@52.5069603,6.097724,13z'}}
					style={{marginTop: 20}}
				/>
		);
	}
}
