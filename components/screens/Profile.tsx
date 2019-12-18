import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { SmoothSlider } from '../elements/SmoothSlider';
import { HeaderText } from '../elements/HeaderText';
import { DateTypeButtonImplementCircle } from '../features/DateTypeButtonImplementCircle';
import { CustomStackHeader } from '../features/CustomStackHeader';
import { ProfileStorage } from '../../helpers/ProfileStorage';
import interests from '../../data/Interests';
import TouchableInterest from '../features/TouchableInterest';
import { Loading } from './Loading';
import { ColoredButton2 } from '../elements/ColoredButton2';

export class Profile extends Component<{navigation: any }, {userAge: number, userInterests: number[], partnerAge: number, partnerInterests: number[], dateType: number, isReady: boolean}> {
	constructor(props: any){
		super(props)
		this.state = {
			userAge: -1,
			userInterests: [],
			partnerAge: -1,
			partnerInterests: [],
			dateType: -1,
			isReady: false
		}
	}

	private readonly screenWidth = Math.round(Dimensions.get('window').width);
	private readonly screenHeight = Math.round(Dimensions.get('window').height);

	render() {
		this.loadProfileInfo();

		if (!this.state.isReady) {
			return (<Loading/>);
		}

		return (
			<View>
				<CustomStackHeader navigation={this.props.navigation} text='Profile'/>
				<ScrollView style={{width: this.screenWidth, height: this.screenHeight}} contentContainerStyle={{flexGrow: 1}}>
					<View style={{alignItems: 'center', paddingBottom: 80}}>
						<HeaderText text={'Date Type'}/>
						<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
							<DateTypeButtonImplementCircle baseValue={-1} onChange={ProfileStorage.dateType.set}/>
						</View>

						<HeaderText text={'User'}/>
						<SmoothSlider baseValue={this.state.userAge} onChange={ProfileStorage.userAge.set} text={'User Age'} />
						<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
							{this.renderUserInterests()}
						</View>

						<HeaderText text={'Partner'}/>
						<SmoothSlider baseValue={this.state.partnerAge} onChange={ProfileStorage.partnerAge.set} text={'Partner Age'} />
						<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
							{this.renderPartnerInterests()}
						</View>
						<ColoredButton2 text={'Save Profile'} onPress={() => this.makeProfile()} />
					</View>
				</ScrollView>
			</View>
		);
	}

	private async loadProfileInfo() {
		console.log(this.state);
		let needsRefresh = false;

		// Refresh is page isn't ready yet
		if (!this.state.isReady) {
			needsRefresh = true;
		}

		// wait until the promise returns us a value
		const dateType = await ProfileStorage.dateType.get();
		if (!needsRefresh) {
			needsRefresh = (dateType !== this.state.dateType);
		}

		const userAge = await ProfileStorage.userAge.get();
		if (!needsRefresh) {
			needsRefresh = (userAge !== this.state.userAge);
		}

		const userInterests = await ProfileStorage.userInterests.get();
		if (!needsRefresh) {
			needsRefresh = (userInterests.length !== this.state.userInterests.length);
		}

		const partnerAge = await ProfileStorage.partnerAge.get();
		if (!needsRefresh) {
			needsRefresh = (partnerAge !== this.state.partnerAge);
		}

		const partnerInterests = await ProfileStorage.partnerInterests.get();
		if (!needsRefresh) {
			needsRefresh = (partnerInterests.length !== this.state.partnerInterests.length);
		}

		if (needsRefresh) {
			this.setState({
				dateType: dateType,
				userAge: userAge,
				userInterests: userInterests,
				partnerAge: partnerAge,
				partnerInterests: partnerInterests,
				isReady: true
			});
			this.forceUpdate();
		}
	}

	private makeProfile() {
		ProfileStorage.madeProfile.set(true);

		//Navigate to Startup and Re-render
		this.props.navigation.state.params.onNavigateBack();
		this.props.navigation.goBack();
	}

	private renderUserInterests() {
		const iconNames: JSX.Element[] = [];

		for (let i = 0; i < interests.length; i++) {
			const s = interests[i];
			iconNames.push(<TouchableInterest key={s.id} interest={s}  onClick={this.tapUserInterest} setSelected={this.selectUserInterest} />);
		}
		return iconNames;
	}

	private renderPartnerInterests() {
		const iconNames: JSX.Element[] = [];

		for (let i = 0; i < interests.length; i++) {
			const s = interests[i];
			iconNames.push(<TouchableInterest key={s.id} interest={s} onClick={this.tapPartnerInterest} setSelected={this.selectPartnerInterest} />);
		}
		return iconNames;
	}

	private tapUserInterest = (id: number) => {
		if (this.state.userInterests.includes(id)) {
			this.state.userInterests.splice(this.state.userInterests.indexOf(id), 1);
		} else {
			this.state.userInterests.push(id);
		}

		ProfileStorage.userInterests.set(this.state.userInterests);
	}

	private tapPartnerInterest = (id: number) => {
		if (this.state.partnerInterests.includes(id)) {
			this.state.partnerInterests.splice(this.state.partnerInterests.indexOf(id), 1);
		} else {
			this.state.partnerInterests.push(id);
		}

		ProfileStorage.userInterests.set(this.state.partnerInterests);
	}

	private selectUserInterest = (id: number) => {
		return (this.state.userInterests.includes(id));
	}

	private selectPartnerInterest = (id: number) => {
		return (this.state.partnerInterests.includes(id));
	}
}
