import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainButton = props => {
  return (
      <TouchableNativeFeedback activeOpacity={0.9}
          onPress={props.onPress}
      >
      <View style={{...styles.button,backgroundColor: props.btnType==='dark'? 'black' : 'white',}}>
        <Text style={{ ...styles.buttonText, color: props.btnType === 'dark' ? 'white' : 'black', }}>{props.children}</Text>
        {props.icon?<Ionicons style={styles.buttonIcon} name={props.icon.name} size={24} color={props.icon.color} />:null}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
    button: {
        height: 42,
        paddingHorizontal: 60,
        borderRadius: 0,
        borderColor: 'white',
        borderWidth: 1,
        marginVertical: 7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
    },
    buttonText: {
        fontFamily: 'PublicSansRegular',
        fontSize: 14,
        lineHeight: 16,
      textAlign: "center",
  },
  buttonIcon: {
    position:"absolute",
     right:25
    }
});

export default MainButton;
