import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import Btn from 'apsl-react-native-button'

const VKbutton = ({ circle, children, ...props }) => (
  <Btn {...props} style={circle ? styles.circleBtn : styles.btn} textStyle={styles.txt}>
    {children}
  </Btn>
)

VKbutton.propTypes = {
  ...Btn.propTypes,
  circle: PropTypes.bool
}

VKbutton.defaultProps = {
  circle: false
}

const styles = StyleSheet.create({
  btn: {
    margin: 4,
    height: 29,
    width: 100,
    borderColor: '#4170C9',
    borderRadius: 4,
    borderWidth: 2,
    marginTop: 8
  },
  circleBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFF',
    borderWidth: 0,
    marginRight: 4
  },
  txt: {
    color: '#FFF',
    fontSize: 9
  }
})

export {VKbutton}
