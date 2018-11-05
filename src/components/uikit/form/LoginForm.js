import React from 'react'
import { 
  StyleSheet, TextInput, View 
} from 'react-native'

const LoginForm = () => {
  const {
    container, input
  } = styles
  return (
    <View style={container}>
      <TextInput 
        placeholder="Телефон или e-mail"
        placeholderTextColor="#495057"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize='none'
        autoCorrect={false}
        style={input}
      />
      <TextInput 
        placeholder="Пароль"
        placeholderTextColor="#495057"
        secureTextEntry
        returnKeyType="go"
        ref={(input) => this.passwordInput = input}
        autoCorrect={false}
        style={input}
      />

    </View>
            
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  input: {
    height: 50,
    width: 345,
    borderColor: '#495057',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 0.2,
    color: '#000',
    paddingHorizontal: 10,
    fontSize: 18
    //fontFamily: ''
        
  }
})

export {LoginForm}
