import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { SmoothSlider } from '../features/SmoothSlider';
import { StorageHelper } from '../../helpers/StorageHelper';
import { SquareImageRadioSelect } from '../features/SquareImageRadioSelect';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
	txt: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	slider: {
		width: '100%'
	}
});

export class SetType extends Component<{navigation: { navigate: (arg0: string) => any; }}, {isReady: boolean}>  {
	private userAge: number;
	private partnerAge: number;
	private dateType: number;

static navigationOptions = ({ navigation }) => ({
		headerRight: (
			<TouchableHighlight onPress={() => navigation.navigate('SetInterests')} style={{width: 20, height: 20, marginEnd: 25}}>
				<Image source={require('../../assets/material/right-arrow.png')} style={{width: 20, height: 20, tintColor: '#fff'}}	/>
			</TouchableHighlight>
		),
		headerLeft: (
			<TouchableHighlight onPress={() => navigation.navigate('Home')} style={{width: 20, height: 20, marginStart: 25}}>
				<Image source={require('../../assets/material/left-arrow.png')} style={{width: 20, height: 20, tintColor: '#fff'}}	/>
			</TouchableHighlight>
		),
	})

	constructor(props: Readonly<{ navigation: any; }>) {
		super(props);
		this.state = {isReady: false};

		StorageHelper.getUserAge().then((userAge) => {
			this.userAge = userAge;
			StorageHelper.getPartnerAge().then((partnerAge) => {
				this.partnerAge = partnerAge;
				StorageHelper.getDateType().then((dateType) => {
					this.dateType = dateType;
					this.setState({isReady: true});
				});
			});
		});
	}

	render() {
			if (!this.state.isReady) {
				return (<View style={styles.container}><Text>Loading...</Text></View>);
			}

			return (
				<View style={styles.container}>
					<SquareImageRadioSelect baseValue={this.dateType} onChange={StorageHelper.setDateType}/>

					<SmoothSlider text='Own Age' baseValue={this.userAge} onChange={StorageHelper.setUserAge}></SmoothSlider>
					<SmoothSlider text='Partners Age' baseValue={this.partnerAge} onChange={StorageHelper.setPartnerAge}></SmoothSlider>
				</View>
		);
	}
}
