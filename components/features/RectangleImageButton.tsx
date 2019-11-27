import React, {Component} from 'react';
import { Text, Dimensions, Image, StyleSheet, View, TouchableOpacity, GestureResponderEvent, ImageBackground } from 'react-native';
import { Colors } from '../../enums/Colors';
import { DateItem } from '../../data/Dates';

// Size variables to use in style
const activityWidth = Math.round(Dimensions.get('window').width) * 0.95;
const activityHeight = Math.round(Dimensions.get('window').height) * 0.26;
const textWidth = Math.round(activityWidth * 0.25);

const styles = StyleSheet.create({
	txtContainer: {
		position: 'absolute',
		top: 0,
		left: textWidth,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txt: {
		color: Colors.White,
		fontSize: 25,
	},
	button: {
		alignItems: 'center',
		backgroundColor: Colors.White,
		width: activityWidth,
		height: activityHeight,
		marginTop: 5,
		marginBottom: 5
	},
	img: {
		width: activityWidth,
		height: activityHeight,
		borderWidth: 2,
		borderColor: Colors.Transparent,
		opacity: 0.75
	},
	imgTint: {
		tintColor: Colors.IkkonzomePink
	}
});

export class RectangleImageButton extends Component<{onPress: any, activity: DateItem}> {
	constructor(props: Readonly<{ onPress: (event: GestureResponderEvent) => void; activity: DateItem; }>) {
		super(props);
	}

	render() {
		return (
			<View>
				<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
					<ImageBackground style={[styles.img]} source={this.props.activity.src}>
						<Image style={[styles.img, styles.imgTint]} source={require('../../assets/activities/activityGradient.png')}/>
						<View style={styles.txtContainer}>
							<Text style={styles.txt}>{this.props.activity.name}</Text>
						</View>
					</ImageBackground>
				</TouchableOpacity>
			</View>
		);
	}
}
