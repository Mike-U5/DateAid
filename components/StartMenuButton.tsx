import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: 250,
    height: 50,
    borderRadius: 25,
    marginTop: 15,
    marginBottom: 15
  },
  buttonTxt: {
     height: 50,
     alignItems: 'center',
     justifyContent: 'center',
     textAlignVertical: 'center',
     color: '#FF4E4E',
     fontSize: 25
  }
});

export class StartMenuButton extends Component<{onPress: any, text: string}> {
  render() {
    return (
     <View>
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonTxt}> {this.props.text} </Text>
      </TouchableOpacity>
     </View>
    );
  }
}
