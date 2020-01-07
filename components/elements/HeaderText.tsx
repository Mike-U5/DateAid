import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Theme } from '../../helpers/Theme';

export class HeaderText extends Component<{text: string}> {
	constructor(props: Readonly<{text: string}>) {
		super(props);
	}

	private checkStringLength = (text: string) => {
		if (text.length > 16) {
				return 25;
		} else {
				return 35;
		}
	}

	render() {
		return (
			<View>
				<Text style={{fontSize: this.checkStringLength(this.props.text), color: Theme.getNavbarColor()}}>{this.props.text}</Text>
				<View />
			</View>
		);
	}
}
