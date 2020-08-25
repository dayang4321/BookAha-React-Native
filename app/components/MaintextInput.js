import React, {  } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const MainTextInput = (props) => {
  return (
      <TextInput style={styles.input}
          blurOnSubmit
            autoCapitalize="none"
          {...props}
      placeholderTextColor="#FFFFFFCC"/>
  );
}

const styles = StyleSheet.create({
    input: {
        color:'white',
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'transparent',
        fontSize: 13,
        width: 292,
        paddingVertical: 9,
        paddingLeft: 30,
        marginVertical: 7,
    }
})


export default MainTextInput
