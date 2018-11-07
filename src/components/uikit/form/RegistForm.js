import React, {Component} from 'react'
import { 
  StyleSheet, TextInput, View, Text, KeyboardAvoidingView,
  Keyboard, TouchableWithoutFeedback
} from 'react-native'
import { Regist } from '../'
import RNPickerSelect from 'react-native-picker-select'

class RegistForm extends Component {
  constructor(props) {
    super(props)

    this.inputRefs = {}

    this.state = {
      chooseDay: undefined,
      items: [
        {label: '1', value: '1'}, {label: '2', value: '2'}, {label: '3', value: '3'}, {label: '4', value: '4'}, {label: '5', value: '5'}, {label: '6', value: '6'}, {label: '7', value: '7'}, {label: '8', value: '8'}, {label: '9', value: '9'}, {label: '10', value: '10'}, {label: '11', value: '11'}, {label: '12', value: '12'}, {label: '13', value: '13'}, {label: '14', value: '14'}, {label: '15', value: '15'}, {label: '16', value: '16'}, {label: '17', value: '17'}, {label: '18', value: '18'}, {label: '19', value: '19'}, {label: '20', value: '20'}, {label: '21', value: '21'}, {label: '22', value: '22'}, {label: '23', value: '23'}, {label: '24', value: '24'}, {label: '25', value: '25'}, {label: '26', value: '26'}, {label: '27', value: '27'}, {label: '28', value: '28'}, {label: '29', value: '29'}, {label: '30', value: '30'}, {label: '31', value: '31'} 
      ],
      chooseMouth: undefined,
      items2: [
        {label: 'Январь', value: '1'}, {label: 'Февраль', value: '2'}, {label: 'Март', value: '3'}, {label: 'Апрель', value: '4'}, {label: 'Май', value: '5'}, {label: 'Июнь', value: '6'}, {label: 'Июля', value: '7'}, {label: 'Август', value: '8'}, {label: 'Сентябрь', value: '9'}, {label: 'Октябрь', value: '10'}, {label: 'Ноябрь', value: '11'}, {label: 'Декабрь', value: '12'}
      ],
      chooseYear: undefined,
      items3: [
        {label: '1961', value: '1961'}, {label: '1962', value: '1962'}, {label: '1963', value: '1963'}, {label: '1964', value: '1964'}, {label: '1965', value: '1965'}, {label: '1966', value: '1966'}, {label: '1967', value: '1967'}, {label: '1968', value: '1968'}, {label: '1969', value: '1969'}, {label: '1970', value: '1970'}, {label: '1971', value: '1971'}, {label: '1972', value: '1972'}, {label: '1973', value: '1973'}, {label: '1974', value: '1974'}, {label: '1975', value: '1975'}, {label: '1976', value: '1976'}, {label: '1977', value: '1977'}, {label: '1978', value: '1978'}, {label: '1979', value: '1979'}, {label: '1980', value: '1980'}, {label: '1981', value: '1981'}, {label: '1982', value: '1982'}, {label: '1983', value: '1983'}, {label: '1984', value: '1984'}, {label: '1985', value: '1985'}, {label: '1986', value: '1986'}, {label: '1987', value: '1987'}, {label: '1988', value: '1988'}, {label: '1989', value: '1989'}, {label: '1990', value: '1990'}, {label: '1991', value: '1991'}, {label: '1992', value: '1992'}, {label: '1993', value: '1993'}, {label: '1994', value: '1994'}, {label: '1995', value: '1995'}, {label: '1996', value: '1996'}, {label: '1997', value: '1997'}, {label: '1998', value: '1998'}, {label: '1999', value: '1999'}, {label: '2000', value: '2000'}
      ],
      chooseMale: undefined,
      items4: [
        {label: 'Мужчина',
          value: 'man'}, {label: 'Девушка', value: 'girl'}
      ]
    }
  }

  render() {
    const {container, text, input, inputIOS} = styles
    return (<KeyboardAvoidingView behavior='position'>
      <Regist />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={container}>
          
          <Text style={text}> Ваш день рождения</Text>
          <RNPickerSelect
            placeholder={{
              label: '',
              value: null
            }}
            items={this.state.items}
            onValueChange={(value) => {
              this.setState({
                chooseDay: value
              })
            }}
            onUpArrow={() => {
              this.inputRefs.name.focus()
            }}
            onDownArrow={() => {
              this.inputRefs.picker2.togglePicker()
            }}
            style={{inputIOS}}
            value={this.state.chooseDay}
            ref={(el) => {
              this.inputRefs.picker = el
            }}
          />
          <RNPickerSelect
            placeholder={{
              label: '',
              value: null
            }}
            items={this.state.items2}
            onValueChange={(value) => {
              this.setState({
                chooseMouth: value
              })
            }}
            onUpArrow={() => {
              this.inputRefs.picker.togglePicker()
            }}
            onDownArrow={() => {
              this.inputRefs.company.focus()
            }}
            style={{inputIOS}}
            value={this.state.chooseMouth}
            ref={(el) => {
              this.inputRefs.picker2 = el
            }}
          />
          <RNPickerSelect
            placeholder={{
              label: '',
              value: null
            }}
            items={this.state.items3}
            onValueChange={(value) => {
              this.setState({
                chooseYear: value
              })
            }}
            onUpArrow={() => {
              this.inputRefs.picker.togglePicker()
            }}
            onDownArrow={() => {
              this.inputRefs.company.focus()
            }}
            style={{inputIOS}}
            value={this.state.chooseYear}
            ref={(el) => {
              this.inputRefs.picker2 = el
            }}
          />
          <Text style={text}> Вы </Text>
          <RNPickerSelect
            placeholder={{
              label: '',
              value: null
            }}
            items={this.state.items4}
            onValueChange={(value) => {
              this.setState({
                chooseMale: value
              })
            }}
            onUpArrow={() => {
              this.inputRefs.picker.togglePicker()
            }}
            onDownArrow={() => {
              this.inputRefs.company.focus()
            }}
            style={{inputIOS}}
            value={this.state.chooseMale}
            ref={(el) => {
              this.inputRefs.picker2 = el
            }}
          />
          <Text style={text}> Откуда Вы </Text>

          <TextInput 
            placeholder="Город"
            placeholderTextColor="#495057"
            returnKeyType="next"
            ref={(input) => this.sityInput = input}
            onSubmitEditing={() => this.emailInput.focus()}
            style={input}
          />
          <Text style={styles.text}> E-Mail или телефон </Text>
          <TextInput 
            placeholder="E-Mail или телефон"
            placeholderTextColor="#495057"
            returnKeyType="next"
            ref={(input) => this.emailInput = input}
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            style={input}
          />
          <Text style={styles.text}> Пароль </Text>

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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
  }
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
  },
  inputIOS: {
    height: 30,
    borderColor: '#495057',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 0.2,
    color: '#000',
    paddingHorizontal: 10,
    fontSize: 16
  }

})

export {RegistForm}
