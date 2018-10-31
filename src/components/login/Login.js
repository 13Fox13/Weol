import React, {Component} from 'react';
import { 
  StyleSheet, View, Text, Image, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import LoginForm from './src/components/login/LoginForm';


export default class App extends Component {

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}> 
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('./res/images/logo.png')} style={styles.logo}/>
                <Text style={styles.title}> Вход </Text>
            </View>

            <View style={styles.formContainer}>
            <LoginForm/>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 140,
  },
  title: {
    color: '#000',
    marginTop: 10,
    width: 120,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,

  },

})
