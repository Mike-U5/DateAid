import React, { Component } from 'react';
import {Text, View} from 'react-native';
import interestData from "../json/interests.json";

class Example1 extends Component {

	render() {
		return (
					<View>
						{interestData.map(s => (<Text>{s.name}</Text>))}
					</View>
        );
    }
}
export default Example1;
