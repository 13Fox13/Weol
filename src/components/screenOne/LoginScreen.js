import React, {Component} from 'react'
import {
  AppRegistry, View, StyleSheet, KeyboardAvoidingView, 
  TouchableWithoutFeedback, Keyboard, Text,
  TouchableOpacity, Image, Alert, TextInput
} from 'react-native'
import {Header} from '../uikit'
import {h, w} from '../../../constants'
import {WEOL_REGIST} from '../../routes'
import { FBbutton, VKbutton, OKbutton } from '../uikit/form/button'
import VKLogin from 'react-native-vkontakte-login'

//const url = 'https://weol.ru/'
export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      title: 'Вход',
      auth: null,
      logs: [],
      permissions: 'friends email',
      mop: '',
      pass: ''
 
    }
  }

  componentDidMount = async () => {
    VKLogin.initialize(6743507)
    // 6720838
    // const response = await fetch(url)
    // const data = await response.json()
    // console.log(data)
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

  // autorize: function() {
  //   $.ajax({
  //     type: 'POST',
  //     url: '/ajax/signin/autorisation.php',
  //     data: msg,
  //     success(data) {
  //       //$('#results').html(data);
  //       //console.log(data);
  //       result = $.parseJSON(data)
  //       if (result[0].status == 'error') { alert(result[0].message) }
  //       if (result[0].status == 'success') { window.location.href = '/' }
  //     },
  //     error(xhr, str) {
  //       alert(`Возникла ошибка: ${xhr.responseCode}`)
  //     }
  //   })
  // }
  userRegist = () => {
    const {mop} = this.state
    const {pass} = this.state

    fetch('https://weol.ru/ajax/signin/autorisation.php', {
      method: 'POST',
      body: JSON.stringify({
        Mop: mop, 
        Pass: pass
      }), 
      headers: {
        //Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((response) => { 
      Alert.alert(response.status)
      return response.json() 
    })
      .then((data) => {
        alert(data)
        const elem = document.getElementById('')
        elem.innerText = data
      }).catch(alert)
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
    console.log(this.state.mop)
    console.log(this.state.pass)
    const {container, input, buttonRegist, buttonText, logo, logoContainer, vkText, okText, row} = styles
    const { navigation } = this.props
    return (<KeyboardAvoidingView behavior='padding' style={container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={container}>
        <View style={container}>
          <Header title={this.state.title} />
          <View>
            <TextInput 
              placeholder="Телефон или e-mail"
              placeholderTextColor="#495057"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={mop => this.setState({mop})}
              style={input}
            />
            <TextInput 
              placeholder="Пароль"
              placeholderTextColor="#495057"
              secureTextEntry
              returnKeyType="go"
              ref={(input) => this.passwordInput = input}
              autoCorrect={false}
              onChangeText={pass => this.setState({pass})}
              style={input}
            />
          </View>
          <TouchableOpacity 
            style={buttonRegist} 
            onPress={this.userRegist}
          >
            <Text style={buttonText}> Войти </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(WEOL_REGIST)}
            style={buttonRegist}
          >
            <Text style={buttonText}> Регистрация </Text>
          </TouchableOpacity>
          <View style={row}>
            <FBbutton />
            <VKbutton onPress={this.onLogin} style={logoContainer}>    
              <Image source={require('../../../res/images/vkLogo.png')} style={logo} />
              <Text style={vkText}> Log in</Text>
            </VKbutton>
            <OKbutton style={logoContainer}>    
              <Image source={require('../../../res/images/okLogo.png')} style={logo} />
              <Text style={okText}> Log in</Text>
            </OKbutton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    marginBottom: 15
  },
  input: {
    marginLeft: 15,
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
        
  },
  row: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
    marginTop: 8,
    marginRight: 13

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
    justifyContent: 'flex-start',
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
  },
  okText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 12
  }

})

AppRegistry.registerComponent('LoginScreen', () => LoginScreen)
