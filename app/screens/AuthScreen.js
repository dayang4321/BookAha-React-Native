import React,{useState} from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Logo from '../components/Logo';
import MainButton from '../components/MainButton';
import MainTextInput from '../components/MaintextInput';



const AuthScreen = (props) => {

    const [authScreenMode, setAuthScreenMode] = useState('defaultLogin');


    const onDefaultLogin = () => {
        setAuthScreenMode("authDefault")
    }
    const onDefaultSignUp = () => {
        setAuthScreenMode("mainSignup")
    }
    const onEmailLogin = () => {
        setAuthScreenMode("emailLogin")
    }
    const onEmailSignup = () => {
        setAuthScreenMode("emailSignup")
    }

    
    let authContent;
    let authOption;
    let imageBg ;

    switch (authScreenMode) {
        case 'emailLogin':
            authContent = (<>
                <MainTextInput placeholder="Username"  keyboardType="email-address"/>
            <MainTextInput placeholder="Password" />
                <MainButton btnType="light">Login</MainButton>
            </>
        )
            authOption = (<>
                <TouchableOpacity onPress={onDefaultSignUp} activeOpacity={0.8}>
                <Text style={styles.signupText}>Signup?</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.signupText}>Forgot Password?</Text>
                </TouchableOpacity>
            </>)

            imageBg= (<ImageBackground source={require('../assets/images/authBg.png')} style={styles.bg1}>
            <ImageBackground source={require('../assets/images/shadow.png')}  style={styles.bg2}/>
            </ImageBackground>)
            
         break;
        case 'mainSignup':
            authContent = (<>
                <MainButton btnType="light" icon={{name:"logo-twitter", color:'#03A9F4'}}>Login with Twitter</MainButton>
                <MainButton btnType="light" icon={{name:"logo-instagram", color:'#e95950'}}>Signup with Instagram</MainButton>
                <MainButton btnType="light" icon={{name:"logo-facebook", color:'#3B5998'}}>Signup with Facebook</MainButton>
                <MainButton btnType="light" onPress={onEmailSignup}>Signup with Email</MainButton>
            </>
            )
            authOption = (<>
                <TouchableOpacity onPress={onDefaultLogin} activeOpacity={0.8}>
                <Text style={styles.signupText}>Login?</Text>
                </TouchableOpacity>
            </>)
              imageBg= (<ImageBackground source={require('../assets/images/signupBg.png')} style={styles.bg1}>
              <ImageBackground source={require('../assets/images/shadow.png')}  style={styles.bg2}/>
              </ImageBackground>)
           
            break;
            case 'emailSignup':
                authContent = (<>
                    <MainTextInput placeholder="First Name"/>
                    <MainTextInput placeholder="Last Name"/>
                    <MainTextInput placeholder="Email" keyboardType="email-address"/>
                    <MainTextInput placeholder="Password" />
                    <MainButton btnType="light"  onPress={onEmailSignup}>Sign up</MainButton>
                </>
                )
                authOption = (<>
                    <TouchableOpacity onPress={onDefaultLogin} activeOpacity={0.8}>
                    <Text style={styles.signupText}>Login?</Text>
                    </TouchableOpacity>
            </>)
                imageBg= (<ImageBackground source={require('../assets/images/signupBg.png')} style={styles.bg1}>
                <ImageBackground source={require('../assets/images/shadow.png')}  style={styles.bg2}/>
                </ImageBackground>)
             
           
            break;
            
    
        default:
            authContent = (<>
                <MainButton btnType="light" icon={{name:"logo-twitter", color:'#03A9F4'}}>Login with Twitter</MainButton>
                <MainButton btnType="light" icon={{name:"logo-facebook", color:'#3B5998'}}>Login with Facebook</MainButton>
                <MainButton btnType="light" onPress={onEmailLogin}>Login with Email</MainButton>
                <MainButton btnType="dark"  onPress={onEmailSignup}>Signup with Email</MainButton>
            </>
            )
            authOption = (
                    <TouchableOpacity onPress={onDefaultSignUp} activeOpacity={0.8}>
                        <Text style={styles.signupText}>Don’t have an account? Signup</Text>
                    </TouchableOpacity>
            )
            imageBg= (<ImageBackground source={require('../assets/images/authBg.png')} style={styles.bg1}>
              <ImageBackground source={require('../assets/images/shadow.png')}  style={styles.bg2}/>
              </ImageBackground>)
           
            
            break;
    }

 

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={{flex:1}}>
        {imageBg}
        <View style={styles.main}>
         <Logo/>
          <View style={styles.buttonContainer}>
                {authContent}
            </View>
                    {authOption}    
                </View>
                </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    bg1: {
      flex: 1,
    
    },
    bg2: {
      flex: 1,
      top:120
    },
    main: {
        width: '100%',
        height: '60%',
      position: 'absolute',
      bottom: 0,
      justifyContent: "center",
      alignItems: 'center',
      marginBottom: 100
    },
    buttonContainer: {
      marginTop: '13%',
      maxWidth:300
    },
    logoText: {
        color: 'white',
        fontFamily: 'VirgulaVulgarisBold',
        fontSize: 36,
        lineHeight: 48,
        letterSpacing: -0.60
    },
    signupText: {
        color: 'white',
        fontFamily: 'PublicSansRegular',
        fontSize: 11,
        lineHeight: 13,
        maxWidth: 116,
        letterSpacing: -0.20,
        textAlign: "center",
        marginTop:38,
    }
    
  });
  

export default AuthScreen;