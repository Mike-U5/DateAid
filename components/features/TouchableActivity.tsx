import React, { Component } from 'react';
import { ImageSourcePropType } from 'react-native';
import { RectangleImageButton } from './RectangleImageButton';
import { TempStorage } from '../../helpers/TempStorage';


class Activities extends Component<{navigation: any, activity: {id: number; mapName: string; src: ImageSourcePropType}}, {isSelected: boolean}> {
	constructor(props: Readonly<{navigation: any, activity: {id: number; mapName: string; src: ImageSourcePropType}; }>) {
		super(props);
		this.state = {
			isSelected: false
		}
	}
render() {
		return (
			<RectangleImageButton
				key={'twb' + this.props.activity.id}
				img={this.props.activity.src}
				value={this.props.activity.mapName}
				isSelected={this.state.isSelected}
				onPress={() => {this.props.navigation.navigate('ShowLocations', { dateName: this.props.activity.mapName })}}
			/>
				);
		}

		saveInterest = (id: number, interest: string) => {
			TempStorage.userInterests.get().then(async (data) => {
			//check if array already contains id, true: remove from array and update, false: add to array and update
			if (data.includes(id)) {
				const index = data.indexOf(id);

				//Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
				if (index > -1) {
					//border verwijderen
					this.setState({isSelected: false})
					console.log(interest + ' verwijderd');
					data.splice(index, 1);
					TempStorage.userInterests.set(data);
				}
			} else {
				//border krijgen
				this.setState({isSelected: true})
				console.log(interest + ' toegevoegd');
				data.push(id);
				TempStorage.userInterests.set(data);
			}
			});
		}
}
/*const styles = StyleSheet.create({
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
});*/

export default Activities;
