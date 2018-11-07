import React, {Component} from 'react'
import {
  View, StyleSheet, KeyboardAvoidingView, 
  TouchableWithoutFeedback, Keyboard, Text,
  TouchableOpacity, Image
} from 'react-native'
import {Header} from '../uikit'
import {LoginForm} from '../uikit/form'
import {h, w} from '../../../constants'
import {WEOL_REGIST} from '../../routes'
import { FBbutton, VKbutton } from '../uikit/form/button'
import VKLogin from 'react-native-vkontakte-login'

//const url = '...'
export default class LoginScreen extends Component {
  state = {
    title: 'Вход',
    auth: null,
    logs: [],
    permissions: 'friends email'
    //data: []
  }

  componentDidMount() {
    VKLogin.initialize(6743507)
  }
  onLogin = async () => {
    const permissions = this.state.permissions.trim().split(/[ ,]+/)
    this.pushLog('Login', `Logging in with permissions: ${permissions}`)
    try {
      const auth = await VKLogin.login(permissions)
      this.pushLog('Login', `Login response:\n${JSON.stringify(auth, null, 2)}`)
      this.setState({ auth })
    } catch (error) {
      this.pushLog('Login', error.message, true)
    }
  }
  onLogout = async () => {
    this.pushLog('Logout', 'Logging out...')
    try {
      await VKLogin.logout()
      this.pushLog('Login', 'Logged out successfully')
      this.setState({ auth: null })
    } catch (error) {
      this.pushLog('Logout', error.message, true)
    }
  }
  onCheck = async () => {
    try {
      const isLoggedIn = await VKLogin.isLoggedIn()
      this.pushLog('isLoggedIn', `isLoggedIn: ${isLoggedIn}`)
    } catch (error) {
      this.pushLog('isLoggedIn', error.message, true)
    }
  }
  onGetAccessToken = async () => {
    try {
      const auth = await VKLogin.getAccessToken()
      this.pushLog('getAccessToken', `Access token:\n${JSON.stringify(auth, null, 2)}`)
      this.setState({ auth })
    } catch (error) {
      this.pushLog('getAccessToken', error.message, true)
    }
  }
  onRequest = async () => {
    this.pushLog('request', 'Making test request... asking for friends online')
    const { auth } = this.state
    if (!auth) {
      this.pushLog('request', 'Must be logged in to make requests', true)
      return
    }

    const { user_id, access_token } = auth
    const reqUrl = `https://api.vk.com/method/friends.getOnline?user_id=${user_id}&access_token=${access_token}&v=5.84`
    try {
      const response = await fetch(reqUrl, { method: 'POST' })
      const data = await response.json()
      if (data.error) {
        this.pushLog('request', JSON.stringify(data.error, null, 2), true)
      } else {
        this.pushLog('request', `Friends online:\n${data.response}`)
      }
    } catch (error) {
      this.pushLog('request', error.message, true)
    }
  }
  pushLog = (who, message, error = false) => {
    const logItem = { who, when: Date.now(), error, message }
    this.setState({ ...this.state, logs: [logItem, ...this.state.logs] })
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
    const {container, buttonRegist, buttonText, logo, logoContainer, vkText} = styles
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
          <VKbutton onPress={this.onLogin} style={logoContainer}>    
            <Image source={require('../../../res/images/vkLogo.png')} style={logo} />
            <Text style={vkText}> Log in</Text>
          </VKbutton>
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
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 30,
    height: 30
  },
  vkText: {
    textAlign: 'center',
    color: '#4170C9',
    fontSize: 12
  }

})
