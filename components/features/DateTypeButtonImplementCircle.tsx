import React, {Component} from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { DateTypeButtonCircle } from './DateTypeButtonCircle';
import { DateType } from '../../data/DateTypes';
import { ProfileStorage } from '../../helpers/ProfileStorage';
import { StorableNumber } from '../../helpers/Storeables';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
		container: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: screenWidth,
	}
});

export class DateTypeButtonImplementCircle extends Component<{dateType: DateType, storage: StorableNumber}, {isSelected: boolean, selectedId: number}>  {

	constructor(props: Readonly<{dateType: DateType, storage: StorableNumber}>) {
		super(props);
		this.state = {isSelected: false, selectedId: -1};
	}

	render() {
		return (
			<View style={styles.container}>
				<DateTypeButtonCircle
					key={'twb' + this.props.dateType.id}
					text={this.props.dateType.name}
					img={this.props.dateType.src}
					isSelected={this.state.isSelected}
					onPress={() => this.saveDateType(this.props.dateType.id)}
				/>
			</View>
		);
	}
	// Save the interest
	private saveDateType (id: number) {
			if (id !== this.state.selectedId){
				this.setState({isSelected: true, selectedId: id})
				this.props.storage.set(id);
			} else if (id === this.state.selectedId) {
				this.props.storage.set(-1);
				this.setState({isSelected: false, selectedId: -1})
			}



	}




}



/*	renderButtons() {
		const buttons = [];
		for (let i = 0; i < DateTypes.length; i++) {
			const dt = DateTypes[i];
			if (i !== 0) {
				buttons.push(<View key={'temp' + i} style={{width: (screenWidth / 20)}}/>);
			}
			buttons.push(<DateTypeButtonCircle key={i} onPress={() => this.onPressBtn(i)} dateType={dt} />);
		}
		return buttons;
	}


	onPressBtn(index: number) {
		ProfileStorage.dateType.set(index);
	}


	render() {
		return (
			<View>
				{this.renderButtons()}
			</View>
		);
	}
}*/
