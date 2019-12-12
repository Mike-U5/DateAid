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

export class Profile extends Component<{navigation: any }, {userAge: number, userInterests: number[], partnerAge: number, partnerInterests: number[], dateType: number, isReady: boolean, dateTypeSelected: boolean}> {
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
	console.log('State has been defined!');
	//this.fetchProfileData();
}

private userAge: number = 0;
private partnerAge: number = 0;

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

	render() {

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
						<SmoothSlider baseValue={this.state.userAge} onChange={this.updateUserAge} text={'User Age'} />
						<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
							{this.renderUserInterests()}
						</View>

						<HeaderText text={'Partner'}/>
						<SmoothSlider baseValue={this.state.partnerAge} onChange={this.updatePartnerAge} text={'Partner Age'} />
						<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
							{this.renderPartnerInterests()}
						</View>
						<ColoredButton2 text={'Save Profile'} onPress={() => this.makeProfile()} />
					</View>
				</ScrollView>
			</View>
		);
	}

	private makeProfile() {
		ProfileStorage.madeProfile.set(true);

		//ProfileStorage.dateType.set(this.dateType);
		ProfileStorage.userAge.set(this.userAge);
		//ProfileStorage.userInterests.set(this.state.userInterests);
		ProfileStorage.partnerAge.set(this.partnerAge);
		//ProfileStorage.partnerInterests.set(this.state.partnerInterests);

		//Navigate to Startup and Re-render
		this.props.navigation.state.params.onNavigateBack();
		this.props.navigation.goBack();
	}

	private updateUserAge(numberChange: number) {
		this.userAge = numberChange;
	}

	private updatePartnerAge(numberChange: number) {
		this.partnerAge = numberChange;
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
