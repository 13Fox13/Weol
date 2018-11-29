import { createStackNavigator } from 'react-navigation'
import LoginScreen from './LoginScreen'
import RegistScreen from './RegistScreen'
import SlideScreen from './SlideScreen'
import MessageScreen from './MessageScreen'
import AntiScreen from './AntiScreen'
import {
  WEOL_LOGIN,
  WEOL_REGIST,
  WEOL_SLIDE,
  WEOL_MESSAGE,
  WEOL_ANTI
} from '../../routes'

export default createStackNavigator(
  {
    [WEOL_LOGIN]: LoginScreen,
    [WEOL_REGIST]: RegistScreen,
    [WEOL_SLIDE]: SlideScreen,
    [WEOL_MESSAGE]: MessageScreen,
    [WEOL_ANTI]: AntiScreen
  },
  {
    initialRouteName: WEOL_LOGIN,
    headerMode: 'none'
  }
)
