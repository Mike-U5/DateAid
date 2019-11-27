import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderText } from '../features/HeaderText';

export class ShowTips extends Component<{navigation: any, value: string}> {
	constructor(props: Readonly<{navigation: any, value: string}>) {
		super(props);
		this.state = {
		}
	}

	render() {
		const mapName = this.props.navigation.getParam('dateName', '')

		return (
			<View style={{}}>
				<View style={{alignItems: 'center', marginBottom: 20}}>
					<HeaderText text='Date Tips' />
				</View>
				<Text>Here are some specialized dating tips for: {mapName}</Text>
			</View>
		);
	}
}
