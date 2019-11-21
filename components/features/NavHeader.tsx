import React, { Component } from 'react';
import { Image, View, TouchableHighlight, ImageSourcePropType } from 'react-native';
import { Colors } from '../../enums/Colors';

const style = {
	txt: {
		fontSize: 40,
		color: Colors.IkkonzomePink
	}
}

export class NavHeader extends Component<{imgSrc: ImageSourcePropType, navigationDestination: any}> {

	render() {
		return (
			<View>
				<TouchableHighlight onPress={() => this.props.navigationDestination} style={{width: 40, height: 40, marginEnd: 25, padding: 10}}>
					<Image source={this.props.imgSrc} style={{width: 20, height: 20, tintColor: Colors.White}}	/>
				</TouchableHighlight>
			</View>
		);
	}
}
