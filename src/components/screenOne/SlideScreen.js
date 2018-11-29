import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {h, w} from '../../../constants'
import SwipeCards from 'react-native-swipe-cards'
import {WEOL_MESSAGE, WEOL_ANTI} from '../screenOne'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}> {this.props.name} </Text>
        <Text style={styles.textOther}> {this.props.sity} </Text>
        <Text style={styles.textOther}> {this.props.interests} </Text>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>Нужно больше аккаунтов</Text>
      </View>
    )
  }
}

const cards = [
  {name: 'Елена Сидорова, 20', image: 'https://pp.userapi.com/c846019/v846019082/bd68a/EfK0Kk8G0Cg.jpg', sity: 'Нижний Новгород', interests: 'Постоянные отношения'},
  {name: 'Анастасия Алексеечева, 25', image: 'https://pp.userapi.com/c604722/v604722591/3b315/llRcYeIctSw.jpg', sity: 'Нижний Новгород', interests: 'Совместное Путешествие'},
  {name: 'Мария Бойцова, 31', image: 'https://sun9-7.userapi.com/c831308/v831308853/1b4706/BBVhoCqmaLs.jpg', sity: 'Санкт Петербург', interests: 'Свидание'},
  {name: 'Оля Хроменко, 29', image: 'https://pp.userapi.com/c836624/v836624362/9819/rK9tTu35YrU.jpg', sity: 'Нижний Новгород', interests: 'Свидание'}
  // {name: '2', image: 'https://sun9-2.userapi.com/c830708/v830708148/a699a/O6cbluDJXCg.jpg'},
  // {name: '3', image: 'https://pp.userapi.com/c824203/v824203029/19eede/d05Vk6KmnkE.jpg'},
  // {name: '4', image: 'https://pp.userapi.com/c834300/v834300664/cfde2/RHjOhXCUTB4.jpg'},
  // {name: '5', image: 'https://pp.userapi.com/c824201/v824201805/b32db/zHt2SMZhxiU.jpg'},
  // {name: '6', image: 'https://pp.userapi.com/c840538/v840538063/23951/HA0zbCVIa3w.jpg'},
  // {name: '7', image: 'https://pp.userapi.com/c841527/v841527296/2888c/vsoO7cErvpQ.jpg'}
]

const cards2 = [
  {name: 'Наталья Климычева, 23', image: 'https://pp.userapi.com/c836729/v836729013/46f1c/oewTK9_R13Q.jpg', sity: 'Нижний Новгород', interests: 'Общение'},
  {name: 'Таня, 24', image: 'https://pp.userapi.com/c310728/v310728035/8cfe/dBgjeZ-jRBk.jpg', sity: 'Санкт Петербург', interests: 'Общение'}
  // {name: '11', image: 'https://pp.userapi.com/c836224/v836224591/b872/Os2_t6GcLQE.jpg'},
  // {name: '12', image: 'https://pp.userapi.com/c637719/v637719591/104be/ZgkZTnL6ktM.jpg'},
  // {name: '13', image: 'https://pp.userapi.com/c637923/v637923591/8e4f/lM6qMfsoStA.jpg'},
  // {name: '14', image: 'https://pp.userapi.com/c628726/v628726591/50d35/jCnX7FC1KSg.jpg'},
  // {name: '15', image: 'https://pp.userapi.com/c622021/v622021591/3d013/61I-DyQYP6Q.jpg'}
]

export default class SlideScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards,
      outOfCards: false
    }
  }

  handleYup(card) {
    console.log('yup')
  }

  handleNope(card) {
    console.log('nope')
  }

  cardRemoved(index) {
    console.log(`This is card ${index}`)

    const CARD_REFRESH_LIMIT = 5

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`)

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <SwipeCards
          cards={this.state.cards}
          loop={false}

          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          showYup
          showNope

          handleYup={this.handleYup}
          handleNope={this.handleNope}
          cardRemoved={this.cardRemoved.bind(this)}
        />
        <View style={styles.nav} >
          <TouchableOpacity>
            <Image source={require('../../../res/images/menu.png')} color={'#8a8a8a'} style={styles.navItem} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../res/images/profile.png')} color={'#8a8a8a'} style={styles.navItem} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(WEOL_ANTI)}
          >
            <Image source={require('../../../res/images/anti.png')} color={'#8a8a8a'} style={styles.navItem} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../res/images/global.png')} color={'#8a8a8a'} style={styles.navItem} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate(WEOL_MESSAGE)}
          >
            <Image source={require('../../../res/images/message.png')} color={'#8a8a8a'} style={styles.navItem} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../res/images/video.png')} color={'#8a8a8a'} style={styles.navItem} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: '#D7DAD8',
    backgroundColor: '#FFF',
    borderWidth: 1,
    elevation: 1
  },
  thumbnail: {
    width: w / 1.10,
    height: h / 1.38
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 3,
    fontWeight: 'bold'
  },
  textOther: {
    fontSize: 19,
    paddingTop: 2,
    paddingBottom: 2
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nav: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //height: h
    borderColor: '#D7DAD8',
    backgroundColor: '#FFF'
  },
  navItem: {
    flex: 0,
    width: 35,
    height: 35,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15
  },
  container: {
    flex: 1,
    paddingBottom: 5
  }
})
