import React from 'react'
import { 
  SafeAreaView, StyleSheet, StatusBar, 
  Image, View, Text
} from 'react-native'

const Header = props => {
  console.log(props)
  const {container, logoContainer, logo, title} = styles
  return (<SafeAreaView style={container}>
    <StatusBar />
    <View style={logoContainer}>
      <Image source={require('../../../res/images/logo.png')} style={logo} />
      <Text style={title}> {props.title} </Text>
    </View>
  </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
    
  },
  logo: {
    width: 140,
    height: 140

  },
  title: {
    color: '#000',
    marginTop: 10,
    width: 120,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30

  }
})

export {Header}
