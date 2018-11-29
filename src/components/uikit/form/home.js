import React, { Component } from 'react'
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Nav from './widget/nav'
import SwipeCards from 'react-native-swipe-cards'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Iconz from 'react-native-vector-icons/Ionicons'

const image1 = 'https://pp.userapi.com/c846019/v846019082/bd68a/EfK0Kk8G0Cg.jpg'
const image2 = 'https://pp.userapi.com/c604722/v604722591/3b315/llRcYeIctSw.jpg'
const image3 = 'https://sun9-7.userapi.com/c831308/v831308853/1b4706/BBVhoCqmaLs.jpg'
const image4 = 'https://pp.userapi.com/c836624/v836624362/9819/rK9tTu35YrU.jpg'
const image5 = 'https://pp.userapi.com/c836729/v836729013/46f1c/oewTK9_R13Q.jpg'
const image6 = 'https://pp.userapi.com/c310728/v310728035/8cfe/dBgjeZ-jRBk.jpg'

const Cards = [{
  id: 1,
  first_name: 'Елена Сидорова',
  age: 20,
  city: 'Нижний Новгород',
  interests: 'Совместное путешествие',
  image: image1
}, {
  id: 2,
  first_name: 'Анастасия Алексеечева',
  age: 25,
  city: 'Нижний Новгород',
  interests: 'Постоянные отношения',
  image: image2
}, {
  id: 3,
  first_name: 'Мария Бойцова',
  age: 31,
  city: 'Санкт Петербург',
  interests: 'Свидание',
  image: image3
}, {
  id: 4,
  first_name: 'Оля Хроменко',
  age: 29,
  city: 'Нижний Новгород',
  interests: 'Свидание',
  image: image4
}, {
  id: 5,
  first_name: 'Наталья Климычева',
  age: 23,
  city: 'Нижний Новгород',
  interests: 'Общение',
  image: image5
}, {
  id: 6,
  first_name: 'Таня',
  age: 24,
  city: 'Санкт Петербург',
  interests: 'Общение',
  image: image6
}]

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: Cards
    }
  }
  Card(x) {
    return (
      <View style={styles.card}>
        <Image source={x.image} resizeMode="contain" style={{width: 350, height: 350}} />
        <View style={{width: 350, height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', margin: 15, marginTop: 25 }} >
            <Text style={{fontSize: 20, fontWeight: '300', color: '#444'}}>{x.first_name}, </Text>
            <Text style={{fontSize: 21, fontWeight: '200', color: '#444'}}>{x.age}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 13, borderLeftWidth: 1, borderColor: '#e3e3e3', alignItems: 'center', justifyContent: 'space-between'}}><Icon name='people-outline' size={20} color="#777" style={{}} /><Text style={{fontSize: 16, fontWeight: '200', color: '#555'}}>{x.friends}</Text></View>
            <View style={{padding: 13, borderLeftWidth: 1, borderColor: '#e3e3e3', alignItems: 'center', justifyContent: 'space-between'}}><Icon name='import-contacts' size={20} color="#777" /><Text style={{fontSize: 16, fontWeight: '200', color: '#555'}}>{x.interests}</Text></View>
          </View>
        </View>
      </View>
    )
  }
  handleYup(card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope(card) {
    console.log(`Nope for ${card.text}`)
  }
  noMore() {
    return (
      <View style={styles.card} >
        <Text>No More Cards</Text>
      </View>
    )
  }

  yup() {
    console.log(this.refs.swiper)
    this.refs.swiper._goToNextCard() 
  }

  nope() {
    console.log(this.refs.swiper)
    this.refs.swiper._goToNextCard() 
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav chat={() => this.props.navigator.replace({id: 'messages'})} toProfile ={() => this.props.navigator.replace({id: 'profile'})} />
        <SwipeCards
          ref={'swiper'}
          cards={this.state.cards}
          containerStyle={{ backgroundColor: '#f7f7f7', alignItems: 'center', margin: 20}}
          renderCard={(cardData) => this.Card(cardData)}
          renderNoMoreCards={() => this.noMore()}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
        />
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.buttons} onPress={() => this.nope()}>
            <Iconz name='ios-close' size={45} color="#888" style={{}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall}>
            <Iconz name='ios-information' size={25} color="#888" style={{}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={() => this.yup()}>
            <Iconz name='ios-heart-outline' size={36} color="#888" style={{marginTop: 5}} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
//onPress = {() => this.renderNope()} 

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f7f7f7'
  },
  buttons: {
    width: 80, 
    height: 80, 
    borderWidth: 10, 
    borderColor: '#e7e7e7', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 40
  },
  buttonSmall: {
    width: 50, 
    height: 50, 
    borderWidth: 10, 
    borderColor: '#e7e7e7', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 25
  },
  card: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    width: 350,
    height: 420
  }
 
})
