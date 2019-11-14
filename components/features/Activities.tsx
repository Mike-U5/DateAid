import React, { Component } from 'react';
import {Dimensions, Text, View, AsyncStorage, ScrollView} from 'react-native';
import {DateItem} from '../../data/Dates';
import TouchableActivity from '../features/TouchableActivity';
import { LoadActivitiesButton } from './LoadActivitiesButton';
import { TempStorage } from '../../helpers/TempStorage';
import { DateHelper } from '../../helpers/DateHelper';

const screenWidth = Math.round(Dimensions.get('window').width) * 0.95;
const screenHeight = Math.round(Dimensions.get('window').height) * 0.9;

class Activities extends Component<{}, {sliceNum1: number, sliceNum2: number, arrayNum: number, buttonText: string, isReady: boolean}> {
	private matchingDates: DateItem[] = [];

	constructor(props: Readonly<{ navigation: any; }>) {
		super(props);
		this.state = {sliceNum1: 0, sliceNum2: 3, arrayNum: 0, buttonText: 'Load more', isReady: false};

		TempStorage.userInterests.get().then((userInterests) => {
			this.matchingDates = DateHelper.getRelevantDates(userInterests);
			this.setState({isReady: true, arrayNum: this.matchingDates.length});
		});
	}

	render() {
		if (!this.state.isReady) {
			return(<View><Text>Generating dates...</Text></View>);
		} else if (this.matchingDates.length === 0) {
			return(
			<View><Text>
			There are no Activities to show.
			</Text></View>
			);
		} else if (this.matchingDates) {
			if (this.matchingDates.length > 3) {
				return(
					<ScrollView style={{width: screenWidth, height: screenHeight, marginTop: 10}} contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
					<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
					{this.generateRealContent()}
					</View>
					<LoadActivitiesButton onPress={() => this.loadActivities()} text={this.state.buttonText} />
					</ScrollView>
				);
			} else if ((this.matchingDates.length === 3) || (this.matchingDates.length < 3)) {
			return(
			<ScrollView style={{width: screenWidth, height: screenHeight, marginTop: 10}} contentContainerStyle={{flexGrow: 1}}>
			<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
				{this.generateRealContent()}
			</View>
			</ScrollView>
			);
			}
		}
		return null;
	}

		generateRealContent = () => {
			const iconNames: JSX.Element[] = [];
			const Dates2 = this.matchingDates.slice(this.state.sliceNum1, this.state.sliceNum2);

			for (const Date of Dates2) {
				iconNames.push(
					<TouchableActivity key={Date.id} activity={Date}> </TouchableActivity>
				)

			}
			return iconNames;
		}
		wipeSession = () => {
			AsyncStorage.clear();
		}

		loadActivities = () => {
			let number1 = this.state.sliceNum1;
			let number2 = this.state.sliceNum2;
			const arrayLength = this.state.arrayNum;

			if ((number2 === (arrayLength)) || number2 === (arrayLength + 1) || (number1 === number2)) {
				number1 = 0;
				number2 = 3;
			}else if (number2 === (arrayLength)){
				number1 = number1 + 3;
				number2 = number1;
			} else if (number2 === (arrayLength - 1)){
				number1 = number1 + 3;
				number2 = number2 + 2;
			} else if ((number2 < (arrayLength - 2 )) || (number2 === (arrayLength - 2))){
				number1 = number1 + 3;
				number2 = number2 + 3;
			}
			this.generateButtonText();
			this.setState({sliceNum1: number1, sliceNum2: number2});
		}

		generateButtonText = () => {
			if ((this.state.sliceNum2 === (this.state.arrayNum - 1)) || this.state.sliceNum2 === (this.state.arrayNum - 2) || (this.state.sliceNum2 === this.state.arrayNum - 3))
			{this.setState({buttonText: 'Back to first'}); }else{this.setState({buttonText: 'Load more...'}); }
		}

}

export default Activities;
