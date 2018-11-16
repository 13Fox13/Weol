import { createStackNavigator } from 'react-navigation'
import LoginScreen from './LoginScreen'
import RegistScreen from './RegistScreen'
import SlideScreen from './SlideScreen'
import {
  WEOL_LOGIN,
  WEOL_REGIST,
  WEOL_SLIDE
} from '../../routes'

export default createStackNavigator(
  {
    [WEOL_LOGIN]: LoginScreen,
    [WEOL_REGIST]: RegistScreen,
    [WEOL_SLIDE]: SlideScreen
  },
  {
    initialRouteName: WEOL_LOGIN,
    headerMode: 'none'
  }
)
