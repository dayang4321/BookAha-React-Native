import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView,Platform,StatusBar, ImageBackground, Image} from 'react-native';
import {AppLoading} from 'expo'
import * as Font from 'expo-font'

const fetchFonts = () => {
  return Font.loadAsync({
    'VirgulaVulgarisBold': require('./app/assets/fonts/VirgulaVulgarisBold.ttf'),
  });
}

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (<AppLoading startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={ (err) => console.log(err)}  />)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./app/assets/images/libraryLandingBg.png')} style={styles.bg1}>
      <ImageBackground source={require('./app/assets/images/shadow.png')}  style={styles.bg2}/>
      </ImageBackground>
      <View style={styles.main}>
        <View style={styles.logoBox}>
          <Image style={styles.birdLogo} source={require('./app/assets/images/bird-logo.png')} />    
          <Text style={styles.logoText}>bookaha</Text>
        </View>
        <View style={styles.textBox}>
        <Text style={styles.logoText}>Share</Text>
        <Text style={styles.logoText}>your thoughts</Text>
        <Text style={styles.logoText}>on books you love</Text>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    color: 'blue',
  },
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
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoBox: {
    flexDirection: "row",
    justifyContent: "center",
    width: '100%',
    alignItems: "baseline",
    position: 'absolute',
    top: 0,
  },
  birdLogo:{
    
  },
  logoText: {
    color: 'white',
    fontFamily: 'VirgulaVulgarisBold',
    fontSize: 36,
    lineHeight: 48,
    letterSpacing: -0.60
  },
  textBox: {
    maxWidth:300
  }

});
