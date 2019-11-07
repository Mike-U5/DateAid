import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SmoothSlider } from '../features/SmoothSlider';
import { StorageHelper } from '../../helpers/StorageHelper';
import { StartMenuButton } from '../features/StartMenuButton';
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

export class SelectDateType extends Component<{navigation: { navigate: (arg0: string) => any; }}, {isReady: boolean}> {
	private userAge: number;
	private partnerAge: number;
	private dateType: number;

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
					<Text style={styles.txt}>~ Type of Date ~</Text>
					<SquareImageRadioSelect onChange={StorageHelper.setDateType}/>

					<SmoothSlider text='Own Age' baseValue={this.userAge} onChange={StorageHelper.setUserAge}></SmoothSlider>
					<SmoothSlider text='Partners Age' baseValue={this.partnerAge} onChange={StorageHelper.setPartnerAge}></SmoothSlider>

					<StartMenuButton onPress={() => this.props.navigation.navigate('SetInterests')} text='Go To Interests'/>
				</View>
		);
	}
}
