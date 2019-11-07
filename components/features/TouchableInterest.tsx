import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import { StorageHelper } from '../../helpers/StorageHelper';
import { Colors } from '../../enums/Colors';


class Interests extends Component<{interest}, {isSelected}> {
	constructor(props) {
		super(props);
		this.state = {
			isSelected: false
		}
	}
render() {
		return (
			<TouchableWithoutFeedback key={'twb' + this.props.interest.id} onPress={() => this.saveInterest(this.props.interest.id, this.props.interest.name)}>
				<View style={[styles.interestContainer, this.state.isSelected === true ? styles.interestSelected : {}]}>
					<Image key={'img' + this.props.interest.id} source={this.props.interest.src} />
					<Text key={'txt' + this.props.interest.id}>{this.props.interest.name} </Text>
				</View>
			</TouchableWithoutFeedback>
				);
		}

		saveInterest = (id: number, interest: string) => {
			StorageHelper.getUserInterests().then(async (data) => {
			//check if array already contains id, true: remove from array and update, false: add to array and update
			if (data.includes(id)) {
				const index = data.indexOf(id);

				//Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
				if (index > -1) {
					//border verwijderen
					this.setState({isSelected: false})
					console.log(interest + ' verwijderd');
					data.splice(index, 1);
					StorageHelper.setUserInterests(data);
				}
			} else {
				//border krijgen
				this.setState({isSelected: true})
				console.log(interest + ' toegevoegd');
				data.push(id);
				StorageHelper.setUserInterests(data);
			}
			});
		}
}
const styles = StyleSheet.create({
	interestContainer: {
		marginLeft: 10,
		marginTop: 10,
		width: 100,
		height: 100,
		backgroundColor: Colors.BgDark
	},
	interestSelected: {
		marginLeft: 10,
		marginTop: 10,
		width: 100,
		height: 100,
		borderRadius: 10,
		borderWidth: 3,
		borderColor: '#d6d7da',
		backgroundColor: Colors.BgDark
	},
});

export default Interests;
