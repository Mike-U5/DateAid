import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import interests from '../../data/Interests';
import TouchableInterest from '../features/TouchableInterest';
import { TempStorage } from '../../helpers/TempStorage';
import { NavHelper } from '../../helpers/NavHelper';
import { NavIcons } from '../../data/NavIcons';
import { Loading } from './Loading';
import { Theme } from '../../helpers/Theme';

export class SelectInterests extends Component<{}, {isReady: boolean}> {

	protected readonly storageLocation = TempStorage.userInterests;
	private readonly screenWidth = Math.round(Dimensions.get('window').width);
	private readonly screenHeight = Math.round(Dimensions.get('window').height) * 0.9;
	private selectedInterests: number[] = [];

	/** Navigation for this page **/
	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerRight: NavHelper.getRight(NavIcons.Check, () => navigation.navigate('PickActivity')),
		headerLeft: NavHelper.getLeft(NavIcons.Backward, () => navigation.goBack()),
		headerStyle: {backgroundColor: Theme.get().navbarColor}
	})

	constructor(props: Readonly<{}>) {
		super(props);
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

	private renderInterests = () => {
		const iconNames: JSX.Element[] = [];

		for (let i = 0; i < interests.length; i++) {
			const s = interests[i];
			iconNames.push(<TouchableInterest key={s.id} interest={s} onClick={this.saveInterest} setSelected={this.setSelected} />);
		}

		return iconNames;
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
