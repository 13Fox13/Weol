import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk'

const FBbutton = () => {
  const {socialContainer, socialIkon} = styles
  return (
    <View style={socialContainer}>
      <LoginButton
        style={socialIkon}
        onLoginFinished={
          (error, result) => {
            if (error) {
              console.log(`login has error: ${result.error}`)
            } else if (result.isCancelled) {
              console.log('login is cancelled.')
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  console.log(data.accessToken.toString())
                }
              )
            }
          }
        }
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  socialContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20
          
  },
  socialIkon: {
    width: 100,
    height: 30
  }
})

export {FBbutton}
