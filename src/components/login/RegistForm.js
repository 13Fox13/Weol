import React, { Component } from 'react'
import { 
    StyleSheet, TextInput, View, TouchableOpacity, Text, 
    StatusBar, SafeAreaView 
 } from 'react-native'
 import Select from 'react-select';

 const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];
export default class RegistForm extends Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar/>
            <View style={styles.container}>
              <Text style={styles.title}> Регистрация </Text>
              <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}> У меня есть логи и пароль </Text>
              </TouchableOpacity>
              <Text style={styles.text}> Моментальная регистрация </Text>
              <TextInput 
                placeholder="Имя"
                placeholderTextColor="#495057"
                returnKeyType="next"
                onSubmitEditing={() => this.dayInput.focus()}
                style={styles.input}
              />
              <Text style={styles.text}> Ваш день рождения </Text>
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
                />
              <Text style={styles.text}> Вы </Text>

              <Text style={styles.text}> Откуда Вы </Text>

              <TextInput 
                placeholder="Город"
                placeholderTextColor="#495057"
                returnKeyType="next"
                ref={(input) => this.sityInput = input}
                onSubmitEditing={() => this.emailInput.focus()}
                style={styles.input}
              />

              <TextInput 
                placeholder="E-Mail или телефон"
                placeholderTextColor="#495057"
                returnKeyType="next"
                ref={(input) => this.emailInput = input}
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                style={styles.input}
              />
              <TextInput 
                  placeholder="Пароль"
                  placeholderTextColor="#495057"
                  secureTextEntry
                  returnKeyType="go"
                  ref={(input) => this.passwordInput = input}
                  autoCorrect={false}
                  style={styles.input}
              />

              <TouchableOpacity  style={styles.buttonContainer}>
                  <Text style={styles.buttonText}> Продолжить регистрацию </Text>
              </TouchableOpacity>
        </View>
    </SafeAreaView> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    color: '#000',
    marginTop: 10,
    width: 120,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,

  },
  text: {
    color: '#000',
    marginTop: 10,
    width: 120,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,

  },

  buttonContainer: {
    backgroundColor: '#007bff',
    paddingVertical: 20,
    marginTop: 8,
    borderRadius: 5,
},
buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
    
},
input: {
  height: 50,
  width: 330,
  borderColor: '#495057',
  backgroundColor: '#FFF',
  borderRadius: 5,
  borderWidth: 0.2,
  color: '#000',
  paddingHorizontal: 10,
  fontSize: 18,
},

})