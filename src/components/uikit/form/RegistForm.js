import React, {Component} from 'react'
import { 
  StyleSheet, TextInput, View, Text, Alert
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

class RegistForm extends Component {
  constructor(props) {
    super(props)

    this.inputRefs = {}

    this.state = {
      favColor: undefined,
      items: [
        {
          label: 'Red',
          value: 'red'
        },
        {
          label: 'Orange',
          value: 'orange'
        },
        {
          label: 'Blue',
          value: 'blue'
        }
      ],
      favSport: undefined,
      items2: [
        {
          label: 'Football',
          value: 'football'
        },
        {
          label: 'Baseball',
          value: 'baseball'
        },
        {
          label: 'Hockey',
          value: 'hockey'
        }
      ]
    }
  }

  render() {
    const {container, text, input} = styles
    return (
      <View style={container}>
        <Text style={text}> Моментальная регистрация </Text>
        <TextInput 
          placeholder="Имя"
          placeholderTextColor="#495057"
          returnKeyType="next"
          onSubmitEditing={() => this.dayInput.focus()}
          style={input}
        />
        <Text style={text}> Ваш день рождения </Text>
        <Text>Name?</Text>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text>Name?</Text>
            <TextInput
              ref={(el) => {
                this.inputRefs.name = el
              }}
              returnKeyType="next"
              enablesReturnKeyAutomatically
              onSubmitEditing={() => {
                this.inputRefs.picker.togglePicker()
              }}
              style={pickerSelectStyles.inputIOS}
              blurOnSubmit={false}
            />

            <View style={{ paddingVertical: 5 }} />

            <Text>What&rsquo;s your favorite color?</Text>
            <RNPickerSelect
              placeholder={{
                label: 'Select a color...',
                value: null
              }}
              items={this.state.items}
              onValueChange={(value) => {
                this.setState({
                  favColor: value
                })
              }}
              onUpArrow={() => {
                this.inputRefs.name.focus()
              }}
              onDownArrow={() => {
                this.inputRefs.picker2.togglePicker()
              }}
              style={{ ...pickerSelectStyles }}
              value={this.state.favColor}
              ref={(el) => {
                this.inputRefs.picker = el
              }}
            />

            <View style={{ paddingVertical: 5 }} />

            <Text>What&rsquo;s your favorite sport?</Text>
            <RNPickerSelect
              placeholder={{
                label: 'Select a sport...',
                value: null
              }}
              items={this.state.items2}
              onValueChange={(value) => {
                this.setState({
                  favSport: value
                })
              }}
              onUpArrow={() => {
                this.inputRefs.picker.togglePicker()
              }}
              onDownArrow={() => {
                this.inputRefs.company.focus()
              }}
              style={{ ...pickerSelectStyles }}
              value={this.state.favSport}
              ref={(el) => {
                this.inputRefs.picker2 = el
              }}
            />

            <View style={{ paddingVertical: 5 }} />

            <Text>Company?</Text>
            <TextInput
              ref={(el) => {
                this.inputRefs.company = el
              }}
              returnKeyType="go"
              enablesReturnKeyAutomatically
              style={pickerSelectStyles.inputIOS}
              onSubmitEditing={() => {
                Alert.alert('Success', 'Form submitted', [{ text: 'Okay', onPress: null }])
              }}
            />
          </View>
        </View>
        <Text style={text}> Вы </Text>
        
        <Text style={text}> Откуда Вы </Text>

        <TextInput 
          placeholder="Город"
          placeholderTextColor="#495057"
          returnKeyType="next"
          //ref={(input) => this.sityInput = input}
          onSubmitEditing={() => this.emailInput.focus()}
          style={input}
        />
        <Text style={styles.text}> E-Mail или телефон </Text>
        <TextInput 
          placeholder="E-Mail или телефон"
          placeholderTextColor="#495057"
          returnKeyType="next"
          //ref={(input) => this.emailInput = input}
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
          //ref={(input) => this.passwordInput = input}
          autoCorrect={false}
          style={input}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#F5FCFF',
    marginLeft: 15
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black'
  }
})

export {RegistForm}
