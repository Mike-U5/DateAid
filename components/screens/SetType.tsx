import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { SmoothSlider } from '../features/SmoothSlider';
import { StorageHelper, StorageType } from '../../helpers/StorageHelper';
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
	private readonly storage: StorageHelper = new StorageHelper(StorageType.Temporary);
	private userAge: number;
	private partnerAge: number;
	private dateType: number;

static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerRight: (
			<TouchableHighlight onPress={() => navigation.navigate('SetInterests')} style={{width: 40, height: 40, marginEnd: 25, padding: 10}}>
				<Image source={require('../../assets/material/right-arrow.png')} style={{width: 20, height: 20, tintColor: Colors.White}}	/>
			</TouchableHighlight>
		),
		headerLeft: (
			<TouchableHighlight onPress={() => navigation.navigate('Home')} style={{width: 40, height: 40, marginStart: 25, padding: 10}}>
				<Image source={require('../../assets/material/left-arrow.png')} style={{width: 20, height: 20, tintColor: Colors.White}}	/>
			</TouchableHighlight>
		),
	})

	constructor(props: Readonly<{ navigation: any; }>) {
		super(props);
		this.state = {isReady: false};

		this.storage.getUserAge().then((userAge) => {
			this.userAge = userAge;
			this.storage.getPartnerAge().then((partnerAge) => {
				this.partnerAge = partnerAge;
				this.storage.getDateType().then((dateType) => {
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
					<SquareImageRadioSelect baseValue={this.dateType} onChange={this.storage.setDateType}/>
					<HeaderText text='Age'/>
					<SmoothSlider text='Own Age' baseValue={this.userAge} onChange={this.storage.setUserAge}></SmoothSlider>
					<SmoothSlider text='Partners Age' baseValue={this.partnerAge} onChange={this.storage.setPartnerAge}></SmoothSlider>
				</View>
		);
	}
}
