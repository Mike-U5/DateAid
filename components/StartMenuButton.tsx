import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: 250,
    height: 50,
    borderRadius: 20,
  },
  buttonTxt: {
     alignItems: 'center',
     justifyContent: 'center',
     color: '#FF4E4E'
  }
});

export class StartMenuButton extends Component<{onPress: any, text: string}> {
  render() {
    return (
     <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonTxt}> {this.props.text} </Text>
      </TouchableOpacity>
     </View>
    );
  }
}
