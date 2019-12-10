import React, { Component } from 'react';
import { TempStorage } from '../../helpers/TempStorage';
import { NavHelper } from '../../helpers/NavHelper';
import { NavIcons } from '../../data/NavIcons';
import { InterestPicker } from '../features/InterestPicker';

export class SelectInterests extends Component {

	/** Navigation for this page **/
	static navigationOptions = ({ navigation }: {navigation: any}) => NavHelper.defaults(
		() => navigation.navigate('PickActivity'),
		() => navigation.goBack(),
		NavIcons.Backward,
		NavIcons.Check
	);

	render() {
		return(<InterestPicker storage={TempStorage.userInterests} />);
	}
}
