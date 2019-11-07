import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback , AsyncStorage, Image} from 'react-native';


class Interests extends Component<{interest}, {isSelected}> {
	constructor(props) {
		super(props);
		this.state = {
			isSelected: false
		}
	}
render() {
		return (
			<TouchableWithoutFeedback key={'twb' + this.props.interest.id} onPress={() => this.saveInterest(this, this.props.interest.id, this.props.interest.name)}>
				<View style={[styles.interestContainer, this.state.isSelected === true ? styles.interestSelected : {}]}>
					<Image key={'img' + this.props.interest.id} source={this.props.interest.src} />
					<Text key={'txt' + this.props.interest.id}>{this.props.interest.name} </Text>
				</View>
			</TouchableWithoutFeedback>
				);
		}

		saveInterest = (element, id, interest) => {
			AsyncStorage.getItem('interests').then(async (data) => {
					//if session array doesn't exist yet, add empty array
					if (data === null || data === undefined || data === '0') {
						console.log('eerste element ' + interest + ' toegevoegd');
						AsyncStorage.setItem('interests', JSON.stringify([id]));
					} else {
							//check if array already contains id, true: remove from array and update, false: add to array and update
							const tempArray = JSON.parse(data);
							if (tempArray.includes(id)) {
								const index = tempArray.indexOf(id);

								//Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
								if (index > -1) {
									//border verwijderen
									this.setState({isSelected: false})
									console.log(interest + ' verwijderd');
									tempArray.splice(index, 1);
									AsyncStorage.setItem('interests', JSON.stringify(tempArray));
								}
							} else {
								//border krijgen
								this.setState({isSelected: true})
								console.log(interest + ' toegevoegd');
								tempArray.push(id);
								AsyncStorage.setItem('interests', JSON.stringify(tempArray));
							}
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
		backgroundColor: '#FF6060'
	},
	interestSelected: {
		marginLeft: 10,
		marginTop: 10,
		width: 100,
		height: 100,
		borderRadius: 10,
		borderWidth: 3,
		borderColor: '#d6d7da',
		backgroundColor: '#FF6060'
	},
});

export default Interests;
