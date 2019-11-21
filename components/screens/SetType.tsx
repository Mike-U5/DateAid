import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SmoothSlider } from '../features/SmoothSlider';
import { TempStorage } from '../../helpers/TempStorage';
import { CircleImageRadioSelect } from '../features/CircleImageRadioSelect';
import { HeaderText } from '../features/HeaderText';
import { NavHeader } from '../features/NavHeader';
import { Direction } from '../../enums/Direction';

const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '100%',
	}
});

interface ISetTypeProps {
	navigation: { navigate: (arg: string) => any; };
}

interface ISetTypeStates {
	isReady: boolean;
}

export class SetType extends Component<ISetTypeProps, ISetTypeStates>  {
	private userAge: number = -1;
	private partnerAge: number = -1;
	private dateType: number = -1;

	protected static navigationOptions({ navigation }: {navigation: any}) {
		return {
			headerRight: (<NavHeader nav={navigation} dest={'SetInterests'} arrow={Direction.Forward}/>),
			headerLeft: (<NavHeader nav={navigation} dest={'Home'} arrow={Direction.BackWard}/>),
		}
	};

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
