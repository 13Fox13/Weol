import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import LogItem from '../form/LogItem'

const keyExtractor = item => item.when.toString()

class Logs extends React.PureComponent {
  static propTypes = {
    logs: PropTypes.arrayOf(PropTypes.shape({
      ...LogItem.propTypes
    })).isRequired
  };

  renderItem = ({ item }) => (<LogItem {...item} />);

  render() {
    return (
      <FlatList
        inverted
        data={this.props.logs}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    )
  }
}

export {Logs}
