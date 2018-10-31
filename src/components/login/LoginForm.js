import React, { Component } from 'react'
import { 
    StyleSheet, TextInput, View, TouchableOpacity, Text, 
    StatusBar, SafeAreaView 
} from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class LoginForm extends Component {
  render() {
    return (
    <SafeAreaView style={styles.container}>
        <StatusBar/>
            <View style={styles.container}>
            <TextInput 
                placeholder="Телефон или e-mail"
                placeholderTextColor="#495057"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
            />
            <TextInput 
                placeholder="Пароль"
                placeholderTextColor="#495057"
                secureTextEntry
                returnKeyType="go"
                ref={(input) => this.passwordInput = input}
                autoCorrect={false}
                style={styles.input}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}> Войти </Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.buttonContainer}>
                <Text style={styles.buttonText}> Регистрация </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <LoginButton style={styles.container}
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log("login has error: " + result.error);
                        } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            console.log(data.accessToken.toString())
                        }
                            )
                        }
                    }
                }
            onLogoutFinished={() => console.log("logout.")}/>
        </View>
    </SafeAreaView>    
        
    )
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,

    },
    input: {
        height: 50,
        width: 330,
        borderColor: '#495057',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 0.2,
        color: '#000',
        paddingHorizontal: 10,
        fontSize: 18,
        //fontFamily: ''
        
    },
    buttonContainer: {
        backgroundColor: '#007bff',
        paddingVertical: 20,
        marginTop: 8,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: '700',
        
    },
    socialContainer: {
        flex: 0,
        alignItems: 'center',
        
    },
    socialIkon: {
        width: 35,
        height: 35,
    }
})