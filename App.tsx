import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { StartMenuButton } from './components/StartMenuButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc0c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const btnAction = function() {alert('You tapped the button!')};

  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <Image style={{width: 150, height: 150}} source={require('./assets/icon.png')}/>
      <StartMenuButton onPress={btnAction} text='Create Profile'/>
      <StartMenuButton onPress={btnAction} text='One Time Use'/>
    </View>
  );
}
