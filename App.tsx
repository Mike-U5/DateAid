import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { StartMenuButton } from './components/StartMenuButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8B5C7',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
});

export default function App() {
  const btnAction = function() {alert('You tapped the button!')};

  return (
    <View style={styles.container}>
    <ImageBackground source={require('./assets/gradient.png')} style={styles.container}>
        <Image style={{width: 150, height: 150}} source={require('./assets/icon.png')}/>
        <StartMenuButton onPress={btnAction} text='Create Profile'/>
        <StartMenuButton onPress={btnAction} text='One Time Use'/>
      </ImageBackground>
    </View>
  );
}
