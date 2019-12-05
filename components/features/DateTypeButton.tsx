import React, {Component} from 'react';
import { Text, Dimensions, Image, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Theme } from '../../helpers/Theme';

// Size variables to use in style
const activityWidth = Math.round(Dimensions.get('window').width) * 0.95;
const activityHeight = Math.round(Dimensions.get('window').height) * 0.26;
const textOffset = Math.round(activityWidth * 0.35);

export class DateTypeButton extends Component<{onPress: any, dateType: any}> {
	private styles = StyleSheet.create({
		txtContainer: {
			position: 'absolute',
			top: 0,
			left: textOffset,
			right: 0,
			bottom: 0,
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'wrap'
		},
		txt: {
			color: Theme.get().white,
			fontSize: 25,
		},
		button: {
			alignItems: 'center',
			backgroundColor: Theme.get().white,
			width: activityWidth,
			height: activityHeight,
			marginTop: 5,
			marginBottom: 5
		},
		img: {
			width: activityWidth,
			height: activityHeight,
		},
		imgTint: {
			tintColor: Theme.get().navbarColor,
			opacity: 0.9
		}
	});

	constructor(props: Readonly<{ onPress: any; dateType: any; }>) {
		super(props);
	}

	render() {
		return (
			<View>
				<TouchableOpacity style={this.styles.button} onPress={this.props.onPress}>
					<ImageBackground style={this.styles.img} source={this.props.dateType.src}>
						<Image style={[this.styles.img, this.styles.imgTint]} source={require('../../assets/activities/activityGradient.png')}/>
						<View style={this.styles.txtContainer}>
							<Text style={this.styles.txt}>{this.props.dateType.name}</Text>
						</View>
					</ImageBackground>
				</TouchableOpacity>
			</View>
		);
	}
}
