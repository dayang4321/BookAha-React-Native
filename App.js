import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView,Platform,StatusBar, ImageBackground, Image} from 'react-native';
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import LandingScreen from './app/screens/LandingScreen';
import AuthScreen from './app/screens/AuthScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'VirgulaVulgarisBold': require('./app/assets/fonts/VirgulaVulgarisBold.ttf'),
    'PublicSansRegular': require('./app/assets/fonts/PublicSansRegular.ttf'),
  });
}

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (<AppLoading startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={ (err) => console.log(err)}  />)
  }

  let content = <AuthScreen/>
// let content =  <LandingScreen/>
  return (
    <SafeAreaView style={styles.container}>
      {content} 
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
 
});
