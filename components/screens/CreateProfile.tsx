import React, { Component } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { StartMenuButton } from '../features/StartMenuButton';
import { SmoothSlider } from '../features/SmoothSlider';
import { HeaderText } from '../elements/HeaderText';
import { CircleImageButton } from '../elements/CircleImageButton';
import { ProfileStorage } from '../../helpers/ProfileStorage';
import interests from '../../data/Interests';
import DateTypes from '../../data/DateTypes';
import TouchableInterest from '../features/TouchableInterest';

export class CreateProfile extends Component<{navigation: any }, {userAge: number, userInterests: number[], partnerAge: number, partnerInterests: number[], dateType: number, isReady: boolean, dateTypeSelected: boolean}> {
constructor(props: any){
	super(props)
	this.state = {
		userAge: 18,
		userInterests: [],
		partnerAge: 18,
		partnerInterests: [],
		dateType: -1,
		isReady: false,
		dateTypeSelected: false,
	}
	//this.fetchProfileData();
}

private userAge: number = 0;
private partnerAge: number = 0;
private userInterests: number[] = [];
private partnerInterests: number[] = [];

private readonly screenWidth = Math.round(Dimensions.get('window').width);
private readonly screenHeight = Math.round(Dimensions.get('window').height);

	componentWillMount() {
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

		//ProfileStorage.dateType.set(this.dateType);
		ProfileStorage.userAge.set(this.userAge);
		//ProfileStorage.userInterests.set(this.state.userInterests);
		ProfileStorage.partnerAge.set(this.partnerAge);
		//ProfileStorage.partnerInterests.set(this.state.partnerInterests);
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
			iconNames.push(<TouchableInterest key={s.id} interest={s} onClick={this.saveUserInterests} setSelected={this.setSelectedUser}/>);
		}
		return iconNames;
	}

	private renderPartnerInterests() {
		const iconNames: JSX.Element[] = [];

		for (let i = 0; i < interests.length; i++) {
			const s = interests[i];
			iconNames.push(<TouchableInterest key={s.id} interest={s} onClick={this.savePartnerInterests} setSelected={this.setSelectedPartner}/>);
		}
		return iconNames;
	}

	private setSelectedUser = (id: number): boolean => {
		return (this.userInterests.includes(id));
	}

	private setSelectedPartner = (id: number): boolean => {
		return (this.partnerInterests.includes(id));
	}

	// Save the interest
	private saveUserInterests = (id: number) => {
		if (this.userInterests.includes(id)) {
			this.userInterests.splice(this.userInterests.indexOf(id), 1);
		} else {
			this.userInterests.push(id);
		}

		ProfileStorage.userInterests.set(this.userInterests);
	}

	// Save the interest
	private savePartnerInterests = (id: number) => {
		if (this.partnerInterests.includes(id)) {
			this.partnerInterests.splice(this.partnerInterests.indexOf(id), 1);
		} else {
			this.partnerInterests.push(id);
		}

		ProfileStorage.partnerInterests.set(this.partnerInterests);
	}

	private renderDateTypes() {
		const iconNames: JSX.Element[] = [];
		const dateTypes: any = DateTypes;

		for (let i = 0; i < dateTypes.length; i++) {
			const s = dateTypes[i];
			iconNames.push(<CircleImageButton
				key={s.id}
				text={s.name}
				img={s.src}
				isSelected={this.state.dateTypeSelected + s.id}
				onPress={() => this.saveDateType(s.id)}
			/>);
		}
		return iconNames;
	}

	private saveDateType(id: number){

		ProfileStorage.dateType.get().then(async (data) => {
			// Check if array already contains id, true: remove from array and update, false: add to array and update
			switch (id) {
				case 0:
				{
					this.setState({dateTypeSelected: true});
					ProfileStorage.dateType.set(data);
				}
				case 1:
				{
					this.setState({dateTypeSelected: true});
					ProfileStorage.dateType.set(data);
				}
				case 2:
				{
					this.setState({dateTypeSelected: true});
					ProfileStorage.dateType.set(data);
				}
				case -1:
				{
					this.setState({dateTypeSelected: false});
					ProfileStorage.dateType.set(-1);
				}
				case data:
				{
					this.setState({dateTypeSelected: false});
					ProfileStorage.dateType.set(-1);
				}
			}
		});
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
