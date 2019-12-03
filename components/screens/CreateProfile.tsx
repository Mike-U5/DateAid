import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';
import { SmoothSlider } from '../features/SmoothSlider';
import { HeaderText } from '../elements/HeaderText';
import { ProfileStorage } from '../../helpers/ProfileStorage';
import interests from '../../data/Interests';
import TouchableInterest from '../features/TouchableInterest';

export class CreateProfile extends Component<{navigation: any}, {userAge: number, userInterests: number[], partnerAge: number, partnerInterests: number[], dateType: number, isReady: boolean}> {
constructor(props: any){
	super(props)
	this.state = {
		userAge: 18,
		userInterests: [],
		partnerAge: 18,
		partnerInterests: [],
		dateType: -1,
		isReady: false,
	}
	//this.fetchProfileData();
}

private userAge: number = 0;
private partnerAge: number = 0;

private readonly screenWidth = Math.round(Dimensions.get('window').width);
private readonly screenHeight = Math.round(Dimensions.get('window').height);

	componentWillMount(){
		ProfileStorage.dateType.get().then( async (data) => {
			this.setState({dateType: data});
		});
		ProfileStorage.userAge.get().then( async (data) => {
			this.setState({userAge: data});
		});
		ProfileStorage.userInterests.get().then( async (data) => {
			this.setState({userInterests: data});
		});
		ProfileStorage.partnerAge.get().then( async (data) => {
			this.setState({partnerAge: data});
		});
		ProfileStorage.partnerInterests.get().then( async (data) => {
			this.setState({partnerInterests: data});
		});
		this.setState({isReady: true});
	}

	makeProfile(){
		ProfileStorage.madeProfile.set(true);

		ProfileStorage.dateType.set(this.state.dateType);
		ProfileStorage.userAge.set(this.userAge);
		ProfileStorage.userInterests.set(this.state.userInterests);
		ProfileStorage.partnerAge.set(this.partnerAge);
		ProfileStorage.partnerInterests.set(this.state.partnerInterests);
	}

	updateUserAge(numberChange: number){
		this.userAge = numberChange;
	}

	updatePartnerAge(numberChange: number){
		this.partnerAge = numberChange;
	}

	private renderUserInterests() {
		const iconNames: JSX.Element[] = [];

		for (let i = 0; i < interests.length; i++) {
			const s = interests[i];
			iconNames.push(<TouchableInterest key={s.id} interest={s} storage={ProfileStorage.userInterests}/>);
		}
		return iconNames;
	}

	private renderPartnerInterests() {
		const iconNames: JSX.Element[] = [];

		for (let i = 0; i < interests.length; i++) {
			const s = interests[i];
			iconNames.push(<TouchableInterest key={s.id} interest={s} storage={ProfileStorage.partnerInterests}/>);
		}
		return iconNames;
	}


	render() {
		if (this.state.isReady) {
		return (
			<ScrollView style={{width: this.screenWidth, height: this.screenHeight}} contentContainerStyle={{flexGrow: 1}}>
				<View style={{alignItems: 'center'}}>

				<HeaderText text={'User'}/>
					<SmoothSlider baseValue={this.state.userAge} onChange={this.updateUserAge} text={'User Age'} />
					<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
						{this.renderUserInterests()}
					</View>

					<HeaderText text={'Partner'}/>
					<SmoothSlider baseValue={this.state.partnerAge} onChange={this.updatePartnerAge} text={'Partner Age'} />
					<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
						{this.renderPartnerInterests()}
					</View>

					<StartMenuButton text={'Save Profile'} onPress={() => this.makeProfile()} />
					</View>
				</ScrollView>
		);
		}
		return null;
	}
}
