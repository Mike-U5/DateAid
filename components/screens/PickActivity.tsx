import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { NavIcons } from '../../data/NavIcons';
import { NavHelper } from '../../helpers/NavHelper';
import { TempStorage } from '../../helpers/TempStorage';
import { DateActivity } from '../../data/DateActivities';
import { DateHelper } from '../../helpers/DateHelper';
import { Colors } from '../../enums/Colors';
import { DateActivityButton } from '../features/DateActivityButton';

export class PickActivity extends Component<{navigation: any}, {sliceNum1: number, sliceNum2: number, arrayNum: number, isReady: boolean, totalPages: number, currentPage: number}> {
	private matchingDates: DateActivity[] = [];
	private screenWidth = Math.round(Dimensions.get('window').width) * 0.95;
	private screenHeight = Math.round(Dimensions.get('window').height) * 0.9;

	constructor(props: Readonly<{ navigation: any }>) {
		super(props);
		this.state = {sliceNum1: 0, sliceNum2: 3, arrayNum: 0, isReady: false, totalPages: 0, currentPage: 1};

		TempStorage.userInterests.get().then((userInterests) => {
			this.matchingDates = DateHelper.getRelevantDates(userInterests);
			this.setState({isReady: true, arrayNum: this.matchingDates.length});
			this.generateTotalPageNumber();
		});
	}

	componentDidMount() {
		this.props.navigation.setParams({ loadActivities: this.loadActivities });
	}

	/** Navigation for this page **/
	static navigationOptions = ({ navigation }: any) => {
		const { params = {} } = navigation.state;
		return {
			headerLeft: NavHelper.getLeft(NavIcons.Backward, () => navigation.goBack()),
			headerRight: NavHelper.getLeft(NavIcons.Refresh, params.loadActivities)
		};
	};

	render() {
		// Return some text is the page is not loaded or empty
		if (!this.state.isReady) {
			return(<View><Text>Generating dates...</Text></View>);
		} else if (this.matchingDates.length === 0) {
			return(<View><Text>There are no Activities to show.</Text></View>);
		}

		// Page is loaded
		return (
			<View style={{alignItems: 'center'}}>
				<ScrollView style={{width: this.screenWidth, height: this.screenHeight, marginTop: 10}} contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
					<Text style={{color: Colors.BgDark, fontWeight: 'bold'}}>Page: {this.state.currentPage} / {this.state.totalPages}</Text>
					<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
						{this.renderDateActivities()}
					</View>
				</ScrollView>
			</View>
		);
	}

	private renderDateActivities = () => {
		const iconNames: JSX.Element[] = [];
		const dateList = this.matchingDates.slice(this.state.sliceNum1, this.state.sliceNum2);

		for (const date of dateList) {
			iconNames.push(
				<DateActivityButton key={date.id} activity={date} onPress={() => {this.props.navigation.navigate('ShowLocations', { dateName: date.mapName })}} />
			)
		}
		return iconNames;
	}

	private loadActivities = () => {
		let number1 = this.state.sliceNum1;
		let number2 = this.state.sliceNum2;
		const arrayLength = this.state.arrayNum;

		if ((number2 === (arrayLength)) || number2 === (arrayLength + 1) || (number1 === number2)) {
			number1 = 0;
			number2 = 3;
		} else if (number2 === (arrayLength)) {
			number1 = number1 + 3;
			number2 = number1;
		} else if (number2 === (arrayLength - 1)) {
			number1 = number1 + 3;
			number2 = number2 + 2;
		} else if ((number2 < (arrayLength - 2 )) || (number2 === (arrayLength - 2))) {
			number1 = number1 + 3;
			number2 = number2 + 3;
		}

		this.setState({sliceNum1: number1, sliceNum2: number2});
	}

	private generateCurrentPageNumber = () => {
		const totalPages = this.state.totalPages;
		let currentPage = this.state.currentPage;

		if (currentPage === totalPages){
			currentPage = 1;
		} else if (currentPage < totalPages) {
			currentPage += 1;
		}
		this.setState({currentPage: currentPage});
	}

	private generateTotalPageNumber = () => {
		const arrayLength = this.state.arrayNum;
		const totalPages = Math.ceil(arrayLength / 3);
		this.setState({totalPages: (Number(totalPages))});
	}
}
