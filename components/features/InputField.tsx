import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

export class InputField extends Component<{}, {text: string}> {
	constructor(props: Readonly<{}>) {
		super(props);
		this.state = {text: ''};
	}

	render() {
		return (
			<View style={{padding: 10}}>
				<TextInput
					style={{height: 40}}
					placeholder='Type your preference here!'
					onChangeText={(text) => this.setState({text})}
					value={this.state.text}
					/>
			</View>
		);
	}
}
