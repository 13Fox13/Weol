import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {h, w} from '../../../constants'
import SwipeCards from 'react-native-swipe-cards'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.thumbnail}> {this.props.text}} </Text>
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
  {name: 'Дональд, 70', text: 'Любые «хорошие времена» — всегда результат вашего упорного труда и постоянной самоотдачи в прошлом. То, что вы делаете сегодня, — залог завтрашних результатов. Если хотите и завтра пожинать плоды, сейте семена каждый день! Если вы хоть на минуту ослабите концентрацию, то неизбежно начнете откатываться назад.', sity: 'Нью Йорк', interests: 'Встреча на вечер'},
  {name: 'Екатерина Великая, 35', text: 'Бранные слова оскорбляют уста, из которых исходят, столько же, сколько уши, в которые входят. Русский народ есть особенный народ в целом свете, который отличается догадкою, умом, силою. Я знаю это по двадцатилетнему опыту. Бог дал русским особые свойства…верю, взойдет звезда Востока, откуда должен воссиять свет, ибо там (в России) больше, чем где-нибудь хранится под пеплом духа, мощи и силы. Я буду самодержицей: это моя должность. А Господь Бог меня простит: это его должность. Лекарство от глупости еще не найдено. Рассудок и здравый смысл не то что оспа: привить нельзя.', sity: 'Санкт-Петербург', interests: 'Поиск Фаворита'},
  {name: 'Фаина Раневская, 50', text: 'Из рая не за пьянство <br> И не за лень от века <br> За плод с Древа познания <br> Поперли человека. <br> <br> * * * <br> Много испытала я сама <br> И теперь мой вывод вот каков: <br> Это где-то горе от ума, <br> Наши беды все от дураков! <br> <br> * * * <br> Вы сказали мне сурово, <br> Что, мол, нет такого слова. <br> Как? Прошу мне дать ответ: <br> Жопа есть, а слова нет?!', sity: 'Москва', interests: 'Поржать'},
  {name: 'Виктор Цой, 28', text: 'Несмотря на то, что мои тексты написаны под влиянием моего личного опыта, собственных впечатлений, я, тем не менее, представитель своего поколения, и, вероятно, выражаю опыт и впечатления всего поколения в целом.', sity: 'Санкт-Петербург', interests: 'Свидание'}
  // {name: '2', image: 'https://sun9-2.userapi.com/c830708/v830708148/a699a/O6cbluDJXCg.jpg'},
  // {name: '3', image: 'https://pp.userapi.com/c824203/v824203029/19eede/d05Vk6KmnkE.jpg'},
  // {name: '4', image: 'https://pp.userapi.com/c834300/v834300664/cfde2/RHjOhXCUTB4.jpg'},
  // {name: '5', image: 'https://pp.userapi.com/c824201/v824201805/b32db/zHt2SMZhxiU.jpg'},
  // {name: '6', image: 'https://pp.userapi.com/c840538/v840538063/23951/HA0zbCVIa3w.jpg'},
  // {name: '7', image: 'https://pp.userapi.com/c841527/v841527296/2888c/vsoO7cErvpQ.jpg'}
]

const cards2 = [
  {name: 'Владимир, 65', text: 'Возможно, нашему Мишке нужно посидеть спокойно, не гонять поросят и подсвинков по тайге, а питаться ягодками и медком. Может, его в покое оставят? Не оставят. Потому что всегда будут стремиться, чтобы посадить его на цепь. А как только удастся — вырвать и зубы и когти. В сегодняшнем понимании это — силы ядерного сдерживания. Как только это, не дай Бог, случится, то и мишка не нужным станет, чучело из него сделают и все.', sity: 'Москва', interests: 'Ищу союзников'},
  // {name: 'Таня, 24', image: 'https://pp.userapi.com/c310728/v310728035/8cfe/dBgjeZ-jRBk.jpg', sity: 'Санкт Петербург', interests: 'Общение'}
  // {name: '11', image: 'https://pp.userapi.com/c836224/v836224591/b872/Os2_t6GcLQE.jpg'},
  // {name: '12', image: 'https://pp.userapi.com/c637719/v637719591/104be/ZgkZTnL6ktM.jpg'},
  // {name: '13', image: 'https://pp.userapi.com/c637923/v637923591/8e4f/lM6qMfsoStA.jpg'},
  // {name: '14', image: 'https://pp.userapi.com/c628726/v628726591/50d35/jCnX7FC1KSg.jpg'},
  // {name: '15', image: 'https://pp.userapi.com/c622021/v622021591/3d013/61I-DyQYP6Q.jpg'}
]

export default class AntiScreen extends Component {
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
  container: {
    flex: 1,
    paddingBottom: 5
  }
})
