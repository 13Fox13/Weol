import React from 'react'
import { 
  View, StyleSheet
} from 'react-native'

const Layout = props => {
  const {container} = styles
  return (
    <View> style={container}>
          console.log(this.props)
    {props.children}
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15

  },
  buttonRegist: {
    backgroundColor: '#007bff',
    paddingVertical: 20,
    marginTop: 8,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700'
  }
})

export {Layout}
