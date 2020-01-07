/* perform necessary imports */
import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Theme } from '../../helpers/Theme';

export class ShowLocations extends Component<{navigation: any}, {date: any}> {

	/** Navigation for this page **/
	static navigationOptions = {
			headerStyle: {backgroundColor: Theme.getNavbarColor()},
	};

	constructor(props: Readonly<{navigation: any}>) {
		super(props);
		console.log(this.props.navigation);

		this.state = {
			date: this.props.navigation.getParam('date', ''),
		}
	}

	render() {
		const mapName = this.state.date.mapName;
		return (
			<WebView
				source={{uri: 'https://google.com/maps/search/' + mapName + ',+zwolle/@52.5069603,6.097724,13z'}}
				style={{marginTop: 20}}
			/>
		);
	}
}
