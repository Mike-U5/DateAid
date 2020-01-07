/* perform necessary imports */
import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Theme } from '../../helpers/Theme';
import { NavHelper } from '../../helpers/NavHelper';
import { NavIcons } from '../../data/NavIcons';

/* get screenwidth and height to set as a responsive screen */
const screenWidth = Math.round(Dimensions.get('window').width);
const headerHeight = Math.round(Dimensions.get('window').height * 0.1);

function checkHeaderHeight(hh: number) {
	let returnVal: number;
	if (hh > 71){
		returnVal = 80;
	} else {
		returnVal = 70;
	}
	return(returnVal);
}

function checkFontSize(hh: number) {
	let returnVal: number;
	if (hh > 71){
		returnVal = 19;
	} else {
		returnVal = 18;
	}
	return(returnVal);
}

function checkTxtPadding(hh: number) {
	let returnVal: number;
	if (hh > 71){
		returnVal = 6;
	} else {
		returnVal = 10;
	}
	return(returnVal);
}

function checkArrowPadding(hh: number) {
	let returnVal: number;
	if (hh > 71){
		returnVal = 0;
	} else {
		returnVal = 3;
	}
	return(returnVal);
}

const style = StyleSheet.create({
	txt: {
		fontSize: 20,
		paddingTop: 5,
		fontWeight: 'bold',
	},
	container: {
		paddingTop: headerHeight * 0.4,
		width: screenWidth,
		backgroundColor: Theme.getNavbarColor(),
		height: checkHeaderHeight(headerHeight),
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	emptySpace: {
		width: 70
	},
	arrow: {
		paddingTop: checkArrowPadding(headerHeight),
	}
});

/* returns the header */
export class CustomStackHeader extends Component<{navigation: any, text: String}> {
	constructor(props: Readonly<{ navigation: any, text: String }>) {
		super(props);
	}

	render() {
		return (
			<View style={style.container}>
				<View style={style.arrow}>
					{NavHelper.getLeft(NavIcons.Backward, () => this.props.navigation.goBack(null))}
				</View>
				<Text style={[style.txt, {color: Theme.getWhite()}]}>{this.props.text}</Text>
				<View style={[style.emptySpace]}/>
			</View>
		);
	}
}
