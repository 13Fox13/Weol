import React, {Component} from 'react'
import {
  View, StyleSheet, KeyboardAvoidingView, 
  TouchableWithoutFeedback, Keyboard, Text,
  TouchableOpacity
} from 'react-native'
import {Header} from '../uikit'
import {LoginForm} from '../uikit/form'
import {h, w} from '../../../constants'
import {WEOL_REGIST} from '../../routes'
import { FBbutton } from '../uikit/form/button'

//const url = '...'
export default class LoginScreen extends Component {
  state = {
    title: 'Вход'
    //data: []
  }

  /*componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json
      this.setState ({data})
    } catch (error) {
      throw error
    }
    
  }*/
  
  render() {
    console.log(this.state.title, '=> Header')
    console.log('h, w', h, w)
    const {container, buttonRegist, buttonText} = styles
    const { navigation } = this.props
    return (<KeyboardAvoidingView behavior='padding' style={container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={container}>
        <View style={container}>
          <Header title={this.state.title} />
          <LoginForm />
          
          <TouchableOpacity style={buttonRegist}>
            <Text style={buttonText}> Войти </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(WEOL_REGIST)}
            style={buttonRegist}
          >
            <Text style={buttonText}> Регистрация </Text>
          </TouchableOpacity>
          <FBbutton /> 
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    marginBottom: 8
  },
  buttonRegist: {
    flex: 0,
    backgroundColor: '#007bff',
    paddingVertical: 20,
    marginTop: 8,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700'
  }
})
