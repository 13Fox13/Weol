import React from 'react'
import { StyleSheet } from 'react-native'
import Btn from 'apsl-react-native-button'

const OKbutton = ({ circle, children, ...props }) => (
  <Btn {...props} style={circle ? styles.circleBtn : styles.btn} textStyle={styles.txt}>
    {children}
  </Btn>
)

const styles = StyleSheet.create({
  btn: {
    margin: 4,
    height: 29,
    width: 100,
    backgroundColor: '#EE6F15',
    borderColor: '#EE6F15',
    borderRadius: 4,
    borderWidth: 2,
    marginTop: 8

  },
  circleBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 0,
    marginRight: 4
  },
  txt: {
    color: '#FFF',
    fontSize: 9
  }
})

export {OKbutton}
