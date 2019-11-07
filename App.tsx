import React from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity, AsyncStorage, TextInput
} from 'react-native';
import Interests from './components/Interests';

export default class App extends React.Component {
state = {
	name: '',
	preference: '',
	age: ''
}

	render() {
		return (
			<View>
				<Text onPress={this.saveAgeAndName}> Click me to save date </Text>
				<Text onPress={this.displayData}> Click me to show date </Text>
				<Interests></Interests>
			</View>
		);
	}
	//save name, age (preference is instantly saved by clicking in session storage)
	saveAgeAndName = () => {
		AsyncStorage.setItem('data', JSON.stringify(this.state));
	}
	displayData = async() => {
		try {
			const user = await AsyncStorage.getItem('interests');
			const parsed = JSON.parse(user);
			console.log(user);
		}	catch (error) {
			alert(error);
		}
	}
	}
	const styles = StyleSheet.create({
		container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
