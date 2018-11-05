import React, {Component} from 'react'
import {
  View, StyleSheet, KeyboardAvoidingView, 
  TouchableWithoutFeedback, Keyboard
} from 'react-native'
import {Header} from './src/components/uikit'
import {LoginForm} from './src/components/uikit/form'
import {h, w} from './constants'

//const url = '...'
export default class App extends Component {
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
    const {container} = styles
    return (<KeyboardAvoidingView behavior='padding' style={container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={container}>
        <View style={container}>
          <Header title={this.state.title} />
          <LoginForm />
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
    alignItems: 'center',
    backgroundColor: '#FFF'
  }
})
