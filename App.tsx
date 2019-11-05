import React from 'react';//
import {
  StyleSheet, Text, View, TouchableOpacity, AsyncStorage, TextInput
} from 'react-native';
import Example1 from './components/Example1';

export default class App extends React.Component {
  state = {
      name: '',
      preference: '',
      age: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Name</Text>
        <TextInput
          placeholder="Fill in your name here:"
          onChangeText={(value) => this.setState({name: value})}
          value={this.state.name}
        />
				<Example1></Example1>
        <TextInput
          onChangeText={(value) => this.setState({preference: value})}
          placeholder="Fill in your preferences here:"
          value={this.state.preference}
        />
        <TextInput
          onChangeText={(value) => this.setState({age: value})}
          placeholder="Fill in your age here:"
          value={this.state.age}
        />
        <TouchableOpacity onPress={this.saveData}>
          <Text> Click me to save date </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.displayData}>
          <Text> Click me to show date </Text>
        </TouchableOpacity>
      </View>
    );
  }
  saveData = () => {
    AsyncStorage.setItem('data', JSON.stringify(this.state));
  }
  displayData = async() => {
    try {
      let user = await AsyncStorage.getItem('data');
      let parsed = JSON.parse(user);
      alert(parsed.name + " " + parsed.preference + " " + parsed.age);
    }
    catch(error) {
      alert(error);
    }
  }
}
const styles = StyleSheet.create({
  	container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
