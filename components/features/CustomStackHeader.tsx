import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Theme } from '../../helpers/Theme';
import { NavHelper } from '../../helpers/NavHelper';
import { NavIcons } from '../../data/NavIcons';

const screenWidth = Math.round(Dimensions.get('window').width);
const headerHeight = Math.round(Dimensions.get('window').height * 0.1);

const style = StyleSheet.create({
	txt: {
		fontSize: 20,
		paddingTop: 5,
		color: Theme.getWhite(),
		fontWeight: 'bold',
	},
	container: {
		paddingTop: headerHeight * 0.4,
		width: screenWidth,
		backgroundColor: Theme.getNavbarColor(),
		height: headerHeight,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	emptySpace: {
		width: 70
	}
});

export class CustomStackHeader extends Component<{navigation: any, text: String}> {
	constructor(props: Readonly<{ navigation: any, text: String }>) {
		super(props);
	}

	render() {
		return (
			<View style={style.container}>
				<View>
					{NavHelper.getLeft(NavIcons.Backward, () => this.props.navigation.goBack())}
				</View>
				<Text style={style.txt}>{this.props.text}</Text>
				<View style={style.emptySpace} />
			</View>
		);
	}
}
