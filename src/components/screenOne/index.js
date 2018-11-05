import { createStackNavigator } from 'react-navigation'
import LoginScreen from './LoginScreen'
import RegistScreen from './RegistScreen'
import {
  WEOL_LOGIN,
  WEOL_REGIST
} from '../../routes'

export default createStackNavigator(
  {
    [WEOL_LOGIN]: LoginScreen,
    [WEOL_REGIST]: RegistScreen
  },
  {
    initialRouteName: WEOL_LOGIN,
    headerMode: 'none'
  }
)
