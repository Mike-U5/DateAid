import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Theme } from '../../helpers/Theme';

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		width: 30,
		height: 30,
	},
	img: {
		width: 30,
		height: 30,
	},
});

/* The DrawerIcon to show within the drawer navigation menu */
export class DrawerIcon extends Component<{ iconName: string, iconSize: number}> {

	constructor(props: Readonly<{iconName: string, iconSize: number}>) {
		super(props);
		this.state = {url: '', size: this.props.iconSize};
	}

	render() {
		return this.makeIcon(this.props.iconName);
	}

	/* determines the styling and image based on the type of image */
	private makeIcon(name: string) {
		switch (name) {
			case 'Home': {
				return(
					<View style={styles.button}>
						<Image style={[styles.img, {tintColor: Theme.getNavbarColor()}]} source={require('../../assets/material/house.png')}></Image>
					</View>
				);
			}
			case 'Settings': {
				return(
					<View style={styles.button}>
						<Image style={[styles.img, {tintColor: Theme.getNavbarColor()}]} source={require('../../assets/material/settings.png')}></Image>
					</View>
				);
			}
			case 'Icebreakers': {
				return(
					<View style={styles.button}>
						<Image style={[styles.img, {tintColor: Theme.getNavbarColor()}]} source={require('../../assets/material/ice.png')}></Image>
					</View>
				);
			}

		}
	}

}
