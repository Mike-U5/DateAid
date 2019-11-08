import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { SmoothSlider } from '../features/SmoothSlider';
import { StorageHelper } from '../../helpers/StorageHelper';
import { SquareImageRadioSelect } from '../features/SquareImageRadioSelect';
import { HeaderText } from '../features/HeaderText';
import { Colors } from '../../enums/Colors';

const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	}
});

export class SetType extends Component<{navigation: { navigate: (a0: string) => any; }}, {isReady: boolean}>  {
	private userAge: number;
	private partnerAge: number;
	private dateType: number;

static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerRight: (
			<TouchableHighlight onPress={() => navigation.navigate('SetInterests')} style={{width: 40, height: 40, marginEnd: 25, padding: 10}}>
				<Image source={require('../../assets/material/right-arrow.png')} style={{width: 20, height: 20, tintColor: '#fff'}}	/>
			</TouchableHighlight>
		),
		headerLeft: (
			<TouchableHighlight onPress={() => navigation.navigate('Home')} style={{width: 40, height: 40, marginStart: 25, padding: 10}}>
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
				return (<View style={style.container}><Text>Loading...</Text></View>);
			}

			return (
				<View style={style.container}>
					<HeaderText text='Type of Date'/>
					<SquareImageRadioSelect baseValue={this.dateType} onChange={StorageHelper.setDateType}/>
					<HeaderText text='Age'/>
					<SmoothSlider text='Own Age' baseValue={this.userAge} onChange={StorageHelper.setUserAge}></SmoothSlider>
					<SmoothSlider text='Partners Age' baseValue={this.partnerAge} onChange={StorageHelper.setPartnerAge}></SmoothSlider>
				</View>
		);
	}
}
