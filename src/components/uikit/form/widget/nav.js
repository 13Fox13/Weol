import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native'
import {WEOL_MESSAGE, WEOL_ANTI} from '../../../screenOne'

class Nav extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.nav} >
        <TouchableOpacity>
          <Image source={require('../../../../../res/images/menu.png')} color={'#8a8a8a'} style={styles.navItem} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../../../res/images/profile.png')} color={'#8a8a8a'} style={styles.navItem} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(WEOL_ANTI)}
        >
          <Image source={require('../../../../../res/images/anti.png')} color={'#8a8a8a'} style={styles.navItem} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../../../res/images/global.png')} color={'#8a8a8a'} style={styles.navItem} />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate(WEOL_MESSAGE)}
        >
          <Image source={require('../../../../../res/images/message.png')} color={'#8a8a8a'} style={styles.navItem} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../../../res/images/video.png')} color={'#8a8a8a'} style={styles.navItem} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
  }
})

export {Nav}
