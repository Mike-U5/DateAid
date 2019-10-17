import React, { Component } from 'react';
import {Text, TouchableOpacity, AsyncStorage} from 'react-native';
import interestData from "../json/interests.json";

class Example1 extends Component {
	render() {
		return (
					<TouchableOpacity>
					<Text onPress={() => this.wipeSession()}>	WIPE SESSION </Text>
						{interestData.map(s =>
							(<Text
								key={s.name}
								onPress={() => this.saveInterest(this, s.id, s.name)}>{s.name}
							</Text>)
						)}
					</TouchableOpacity>
        );
    }

		wipeSession = () => {
			AsyncStorage.clear();
		}
		saveInterest = (element, id, interest) => {
			AsyncStorage.getItem("interests").then(async (data) => {
				console.log(data);
				//if session array doesn't exist yet, add empty array
				if(data === null || data === undefined || data === "0") {
					AsyncStorage.setItem("interests", JSON.stringify([id]));
				} else {
					//check if array already contains id, true: remove from array and update, false: add to array and update
					let tempArray = JSON.parse(data);
					console.log(tempArray);
					if(tempArray.includes(id)) {
						var index = tempArray.indexOf(id);
						if (index > -1) { //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
						  tempArray.splice(index, 1);
							AsyncStorage.setItem("interests", JSON.stringify(tempArray));
						}
					} else {
						tempArray.push(id);
						AsyncStorage.setItem("interests", JSON.stringify(tempArray));
					}

					AsyncStorage.getItem("interests").then(async (data2) => {
						console.log(data2);
					});
				}
			});
		}
}
export default Example1;
