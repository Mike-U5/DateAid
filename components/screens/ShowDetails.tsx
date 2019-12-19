import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderText } from '../elements/HeaderText';

export class ShowDetails extends Component<{navigation: any}, {date: any}> {
	constructor(props: Readonly<{navigation: any}>) {
		super(props);
		console.log(this.props.navigation);
		console.log(this.props.navigation.getParam('date'));
		this.state = {
			date: this.props.navigation.getParam('date', ''),
		}
	}

	render() {
		const dateName = this.state.date.name;
		const dateDescription = this.state.date.desc;

		return (
			<View>
				<View style={{alignItems: 'center', marginBottom: 20}}>
					<HeaderText text={'Description ' + dateName} />
				</View>
				<Text>{dateDescription}</Text>
			</View>
		);
	}
}
