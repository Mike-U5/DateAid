import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Theme } from '../../helpers/Theme';

export class DateTypeButtonCircle extends Component<{onPress: any, text: string, img: ImageSourcePropType, isSelected: boolean}> {

	private readonly style: any;

	constructor(props: Readonly<{onPress: any, text: string, img: ImageSourcePropType, isSelected: boolean}>) {
		super(props);

		this.style = StyleSheet.create({
			button: {
				alignItems: 'center',
				backgroundColor: Theme.get().white,
				width: 100,
				height: 100,
				marginTop: 15,
				marginBottom: 15,
				borderRadius: 100
			},
			img: {
				width: 100,
				height: 100,
				borderWidth: 4,
				borderColor: Theme.get().transparent,
				opacity: 0.75,
				borderRadius: 100
			},
			imgSelected: {
				borderColor: Theme.get().navbarColor,
				opacity: 1,
				borderRadius: 100
			},
			txt: {
				color: Theme.get().navbarColor
			}
		});
	}

	render() {
		return (
			<View>
			<TouchableOpacity style={this.style.button} onPress={this.props.onPress}>
				<Image style={[this.style.img, this.props.isSelected ? this.style.imgSelected : {}]} source={this.props.img}/>
				<Text style={this.style.txt}>{this.props.text}</Text>
			</TouchableOpacity>
			</View>
		);
	}
}
