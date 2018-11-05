import React, {Component} from 'react'
import { View, TouchableOpacity } from 'react-native'
import OkManager, { Scopes } from 'react-native-ok-sdk'

class OKbutton extends Component {
    static propTypes = {
      onAuth: React.PropTypes.func
    };
  
    constructor() {
      this.loginPressed = this.loginPressed.bind(this)
    }
  
    loginPressed() {
      OkManager.login([Scopes.VALUABLE_ACCESS])
        .then(
          response => {
            console.log('OK login', response)
            this.props.onAuth(response)
          }
        )
        .catch(e => {
          console.log('OK Login error', e)
        })
    }
  
    render() {
      return (
        <View>
          <TouchableOpacity
            onPress={this.loginPressed}
          />
        </View>
      )
    }
}

export {OKbutton}
