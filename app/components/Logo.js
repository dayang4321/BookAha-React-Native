import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Logo = () => {
    return (
        <View style={styles.logoContainer}>
        <Image style={styles.birdLogo} source={require('../assets/images/bird-logo.png')} />    
        <Text style={styles.logoText}>bookaha</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: '100%',
        alignItems: "baseline",
      
      },
      birdLogo:{
        
      },
      logoText: {
        color: 'white',
        fontFamily: 'VirgulaVulgarisBold',
        fontSize: 36,
        lineHeight: 48,
        letterSpacing: -0.60
      }
})


export default Logo;