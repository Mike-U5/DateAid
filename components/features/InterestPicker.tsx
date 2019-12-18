import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import interests, { Interest } from '../../data/Interests';
import TouchableInterest from '../features/TouchableInterest';
import { TempStorage } from '../../helpers/TempStorage';

import { StorableNumberArray } from '../../helpers/Storeables';
import { Loading } from '../screens/Loading';

export class InterestPicker extends Component<{storage: StorableNumberArray}, {isReady: boolean}> {

	private readonly storageLocation: StorableNumberArray;
	private readonly screenWidth = Math.round(Dimensions.get('window').width);
	private readonly screenHeight = Math.round(Dimensions.get('window').height) * 0.9;
	private selectedInterests: number[] = [];

	constructor(props: Readonly<{ storage: StorableNumberArray; }>) {
		super(props);
		this.storageLocation = this.props.storage;
		this.state = {isReady: false};

		// Get the interests that have
		this.storageLocation.get().then(async (data) => {
			this.selectedInterests = data;
			this.setState({isReady: true})
		});
	}

	render() {
		// Page is not yet ready
		if (!this.state.isReady) {
			return (<Loading/>);
		}

		// Done Loading
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

	private renderInterests = (): JSX.Element[] => {
		const elements: JSX.Element[] = [];

		// Add the normal interest
		for (let i = 0; i < interests.length; i++) {
			const s = interests[i];
			elements.push(<TouchableInterest key={s.id} interest={s} onClick={this.saveInterest} setSelected={this.setSelected} />);
		}

		// Add the "surprise" interest.
		const surprise = new Interest(-42, 'Surprise', require('../../assets/interests/suprise.png'));
		elements.push(<TouchableInterest key={-42} interest={surprise} onClick={this.saveInterest} setSelected={this.setSelected}/>);

		return elements;
	}

	private setSelected = (id: number): boolean => {
		return (this.selectedInterests.includes(id));
	}

	// Save the interest
	private saveInterest = (id: number) => {
		if (this.selectedInterests.includes(id)) {
			this.selectedInterests.splice(this.selectedInterests.indexOf(id), 1);
		} else {
			this.selectedInterests.push(id);
		}

		TempStorage.userInterests.set(this.selectedInterests);
	}
}
