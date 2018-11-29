import React, { Component } from 'react'
import {

  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ListView,
  View
} from 'react-native'

import Nav from '../uikit/form/widget/nav'

const image1 = 'https://pp.userapi.com/c846019/v846019082/bd68a/EfK0Kk8G0Cg.jpg'
const image2 = 'https://pp.userapi.com/c604722/v604722591/3b315/llRcYeIctSw.jpg'
const image3 = 'https://sun9-7.userapi.com/c831308/v831308853/1b4706/BBVhoCqmaLs.jpg'
const image4 = 'https://pp.userapi.com/c836624/v836624362/9819/rK9tTu35YrU.jpg'
const image5 = 'https://pp.userapi.com/c836729/v836729013/46f1c/oewTK9_R13Q.jpg'
const image6 = 'https://pp.userapi.com/c310728/v310728035/8cfe/dBgjeZ-jRBk.jpg'

const convos = [{
  id: 1,
  name: 'Diane',
  message: 'Suspendisse accumsan tortor quis turpis.',
  image: image1
}, {
  id: 2,
  name: 'Lois',
  message: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
  image: image2
}, {
  id: 3,
  name: 'Mary',
  message: 'Duis bibendum.',
  image: image3
}, {
  id: 4,
  name: 'Susan',
  message: 'Praesent blandit.',
  image: image4
}, {
  id: 5,
  name: 'Betty',
  message: 'Mauris enim leo, rhoncus sed, vestibulum, cursus id, turpis.',
  image: image5
}, {
  id: 6,
  name: 'Deborah',
  message: 'Aliquam sit amet diam in magna bibendum imperdiet.',
  image: image6
}]

const newMatches = [{
  id: 1,
  first_name: 'Sarah',
  image: image1
}, {
  id: 2,
  first_name: 'Pamela',
  image: image2
}, {
  id: 3,
  first_name: 'Diana',
  image: image3
}, {
  id: 4,
  first_name: 'Christina',
  image: image4
}, {
  id: 5,
  first_name: 'Rebecca',
  image: image5
}, {
  id: 6,
  first_name: 'Wanda',
  image: image6
}]

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export default class MessageScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(newMatches),
      convoData: ds.cloneWithRows(convos)
    }
  }
  
  eachPic(x) {
    return (
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Image source={x.image} style={{width: 70, height: 70, borderRadius: 35, margin: 10}} />
        <Text style={{fontWeight: '600', color: '#444'}}>{x.first_name}</Text>
      </TouchableOpacity>
    )
  }

  convoRender(x) {
    return (
      <TouchableOpacity style={{alignItems: 'center', flexDirection: 'row', marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderColor: '#e3e3e3'}}>
        <Image source={x.image} style={{width: 70, height: 70, borderRadius: 35, margin: 10}} />
        <View>
          <Text style={{fontWeight: '600', color: '#111'}}>{x.name}</Text>
          <Text 
            numberOfLines={1}
            style={{fontWeight: '400', color: '#888', width: 200}}
          >{x.message}</Text>
        </View>
      </TouchableOpacity>)
  }
   
  render() {
    return (
      <View style={{flex: 1}}>
        <Nav type='message' onPress={() => this.props.navigator.replace({id: 'home'})} />
        <ScrollView style={styles.container}>
          <TextInput 
            style={{height: 50 }}
            placeholder="Search"
          />
          <View style={styles.matches}>
            <Text style={{color: '#da533c', fontWeight: '600', fontSize: 12}}>THIS PARTY'S BUZZING WITH BAD BITCHES</Text>
            <ListView 
              horizontal
              showsHorizontalScrollIndicator={false}
              dataSource={this.state.dataSource}
              pageSize={5}
              renderRow={(rowData) => this.eachPic(rowData)}
            />
          </View>
          <View style={{margin: 10}}>
            <Text style={{color: '#da533c', fontWeight: '600', fontSize: 12}}>MESSAGES</Text>
            <ListView 
              horizontal={false}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              dataSource={this.state.convoData}
              pageSize={5}
              renderRow={(rowData) => this.convoRender(rowData)}
            />
          </View>
     
        </ScrollView>
      </View>
    )
  }
}
//onPress = {() => this.renderNope()} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  matches: {
    borderTopWidth: 1,
    paddingTop: 15, 
    borderTopColor: '#da533c',
    borderBottomWidth: 1,
    paddingBottom: 15, 
    borderBottomColor: '#e3e3e3'
  },
  buttons: {
    width: 80, 
    height: 80, 
    borderWidth: 10, 
    borderColor: '#fff', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 40
  },
  buttonSmall: {
    width: 50, 
    height: 50, 
    borderWidth: 10, 
    borderColor: '#e7e7e7', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 25
  },
  card: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    width: 350,
    height: 420
  }
 
})
