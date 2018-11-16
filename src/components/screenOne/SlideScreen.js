import React, {Component} from 'react'
import {
  View, Text, StyleSheet, Button, Image
} from 'react-native'
import Swiper from 'react-native-deck-swiper'
import {h, w} from '../../../constants'

export default class SlideScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://pp.userapi.com/c846019/v846019082/bd68a/EfK0Kk8G0Cg.jpg',
      cards: ['Елена Сидорова, 20', '20', 'Нижний Новгород'],
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0
    }
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Image source={require('../../../res/images/EfK0Kk8G0Cg.jpg')} style={styles.foto} />
        <Text style={styles.text}>{card}</Text>
      </View>
    )
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false)
        })
      })
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack
      },
      cb
    )
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render() {
    const {container} = styles
    return (
      <View style={container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={this.onSwiped}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
        >
          <Button onPress={this.swipeLeft} title='Swipe Left' />
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  foto: {
    flex: 4,
    borderRadius: 7,
    borderWidth: 2,
    height: h,
    width: w / 1.13,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFF'
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#FFF'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFF',
    backgroundColor: '#FFF'
  }
})
