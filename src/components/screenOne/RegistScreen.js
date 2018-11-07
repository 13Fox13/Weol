import React, {PureComponent} from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, 
  TouchableWithoutFeedback, Keyboard
} from 'react-native'
import {RegistForm} from '../uikit/form'

export default class RegistScreen extends PureComponent {
  render() {
    const {container, buttonRegist, buttonText, h1} = styles
    const { navigation } = this.props
    return (<TouchableWithoutFeedback onPress={Keyboard.dismiss} style={container}>
      <View style={container}>
        <Text style={h1}> Регистрация </Text>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={buttonRegist}
        >
          <Text style={buttonText}> У меня есть логи и пароль </Text>
        </TouchableOpacity>
        <RegistForm />
        <TouchableOpacity style={buttonRegist}>
          <Text style={buttonText}> Продолжить регистрацию </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
  },
  h1: {
    flex: 0,
    backgroundColor: '#FFF',
    color: '#000',
    marginLeft: 15,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 30
  }
})
