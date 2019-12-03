import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import interests from '../../data/Interests';
import TouchableInterest from '../features/TouchableInterest';
import { TempStorage } from '../../helpers/TempStorage';
import { NavHelper } from '../../helpers/NavHelper';
import { NavIcons } from '../../data/NavIcons';

export class SelectInterests extends Component {

	protected readonly storageLocation = TempStorage.userInterests;
	private readonly screenWidth = Math.round(Dimensions.get('window').width);
	private readonly screenHeight = Math.round(Dimensions.get('window').height) * 0.9;

	/** Navigation for this page **/
	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerRight: NavHelper.getRight(NavIcons.Check, () => navigation.navigate('PickActivity')),
		headerLeft: NavHelper.getLeft(NavIcons.Backward, () => navigation.goBack())
	})

	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<ScrollView style={{width: this.screenWidth, height: this.screenHeight}} contentContainerStyle={{flexGrow: 1}}>
					<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
						{this.renderInterests()}
					</View>
				</ScrollView>
			</View>
		);
	}

	private renderInterests = () => {
		const iconNames: JSX.Element[] = [];

		for (let i = 0; i < interests.length; i++) {
			const s = interests[i];
			iconNames.push(<TouchableInterest key={s.id} interest={s} storage={this.storageLocation} onClick={this.saveInterest} />);
		}

		return iconNames;
	}

	// Save the interest
	private saveInterest = (id: number, data: number[]): boolean => {
		// Check if array already contains id, true: remove from array and update, false: add to array and update
		const dataIncludesId = data.includes(id);

		if (dataIncludesId) {
			data.splice(data.indexOf(id), 1);
		} else {
			data.push(id);
		}

		TempStorage.userInterests.set(data);
		return dataIncludesId;
	}
}
