import React, { Component } from 'react';
import {Text, TouchableOpacity, AsyncStorage} from 'react-native';
import interestData from "../json/interests.json";

class Example1 extends Component {
	render() {
		return (
					<TouchableOpacity>
						{interestData.map(s =>
							(<Text
								key={s.name}
								onPress={() => this.saveInterest(s.name)}>{s.name}
							</Text>)
						)}
					</TouchableOpacity>
        );
    }
		saveInterest = (interest) => {
			//get getItem
			//if exists, delete item
			//if doesn't exist, save
			//inArray
			
			AsyncStorage.getItem(interest).then((data) => {
				if(data === null) {
					console.log(interest + " stond er nog niet in.")
					AsyncStorage.setItem(interest, "1");
				} else {
			    if (data !== null && data !== undefined && data == "1") {
						console.log(interest + " stond wel in local storage, nu naar 0");
						AsyncStorage.setItem(interest, "0");
					} else {
						console.log(interest + " stond niet in local storage, nu naar 1")
						//perform save
						AsyncStorage.setItem(interest, "1");
					}
				}
			});
		}
}
export default Example1;
