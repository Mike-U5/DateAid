import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import { SquareImageButton } from '../features/SquareImageButton';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
});

export class SelectDateType extends Component<{name: string}> {
	render() {
			// Logic
			const actContinueWithProfile = function() {alert('A!')};
			const actEditProfile = function() {alert('B!')};
			const actOneTimeUse = function() {alert('C!')};

			return (
				<View style={styles.container}>
					<Text style={{fontSize: 20, fontWeight: 'bold'}}>~ Type of Date ~</Text>
					<SquareImageButton onPress={actContinueWithProfile} text='First Date' imgName='FirstDate'/>
					<SquareImageButton onPress={actEditProfile} text='New Couple' imgName='NewCouple'/>
					<SquareImageButton onPress={actOneTimeUse} text='Anniversary' imgName='Anniversary'/>
				</View>
		);
	}
}
