import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Logo from '../components/Logo';





const LandingScreen = () => {
    return (
        <>
        <ImageBackground source={require('../assets/images/libraryLandingBg.png')} style={styles.bg1}>
        <ImageBackground source={require('../assets/images/shadow.png')}  style={styles.bg2}/>
        </ImageBackground>
        <View style={styles.main}>
         <Logo/>
          <View style={styles.textBox}>
          <Text style={styles.logoText}>Share</Text>
          <Text style={styles.logoText}>your thoughts</Text>
          <Text style={styles.logoText}>on books you love</Text>
          </View>
        </View>
        </>
    );
}


const styles = StyleSheet.create({
    bg1: {
      flex: 1,
    
    },
    bg2: {
      flex: 1,
      top:150
    },
    main: {
    
      width: '100%',
      position: 'absolute',
      bottom: 0,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textBox: {
      maxWidth:300
    },
    logoText: {
        color: 'white',
        fontFamily: 'VirgulaVulgarisBold',
        fontSize: 36,
        lineHeight: 48,
        letterSpacing: -0.60
      }
  
  });
  

export default LandingScreen;