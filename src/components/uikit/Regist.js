import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const Regist = () => {
  const {container, text, input} = styles

  return (
    <View style={container}>
      <Text style={text}>Моментальная регистрация</Text>
      <TextInput
        placeholder="Имя"
        placeholderTextColor="#495057"
        /*ref={(el) => {
          this.inputRefs.name = el
        }}
        returnKeyType="next"
        enablesReturnKeyAutomatically
        onSubmitEditing={() => {
          this.inputRefs.picker.togglePicker()
        }}*/
        style={input}
        blurOnSubmit={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#F5FCFF',
    marginLeft: 15,
    marginRight: 15
  },
  text: {
    color: '#000',
    marginTop: 5,
    marginBottom: 7,
    fontWeight: 'bold',
    fontSize: 17
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
  }
})

export {Regist}
