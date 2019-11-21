import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { SmoothSlider } from '../features/SmoothSlider';
import { TempStorage } from '../../helpers/TempStorage';
import { CircleImageRadioSelect } from '../features/CircleImageRadioSelect';
import { HeaderText } from '../features/HeaderText';
import { Colors } from '../../enums/Colors';

const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '100%',
	}
});

export class SetType extends Component<{navigation: { navigate: (a0: string) => any; }}, {isReady: boolean}>  {
	private userAge: number = -1;
	private partnerAge: number = -1;
	private dateType: number = -1;

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
	});

	constructor(props: Readonly<{ navigation: any; }>) {
		super(props);
		this.state = {isReady: false};

		TempStorage.userAge.get().then((userAge) => {
			this.userAge = userAge;
			TempStorage.partnerAge.get().then((partnerAge) => {
				this.partnerAge = partnerAge;
				TempStorage.dateType.get().then((dateType) => {
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
					<CircleImageRadioSelect baseValue={this.dateType} onChange={TempStorage.dateType.set}/>
					<HeaderText text='Age'/>
					<SmoothSlider text='Own Age' baseValue={this.userAge} onChange={TempStorage.userAge.set}></SmoothSlider>
					<SmoothSlider text='Partners Age' baseValue={this.partnerAge} onChange={TempStorage.partnerAge.set}></SmoothSlider>
				</View>
		);
	}
}
