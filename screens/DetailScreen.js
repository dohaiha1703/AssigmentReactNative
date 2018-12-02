import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import firebaseConf from '../lib/firebaseConfig';
import Item from '../component/DetailComponent.js';

export default class DetailScreen extends Component {

  constructor(props) {
    super(props);


  }

  item = this.props.navigation.getParam('item', {});
  componentDidMount() {
    console.log(this.item);
  }

  static navigationOptions = {
    title: "MOB 306 news"
  };

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={{ width: '100%', height: 200, marginBottom: 10 }}
            source={{ uri: this.item.anh }}
          />
          <Text style={styles.title}>{this.item.tieude}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.thoigian}>{this.item.thoigian}</Text>
            <Text style={styles.theloai}>{this.item.theloai}</Text>
          </View>

          <Text style={styles.mota}>{this.item.mota}</Text>
          <Text style={styles.content}>{this.item.doan1}</Text>
          <Text style={styles.content}>{this.item.doan2}</Text>
          <Text style={styles.content}>{this.item.doan3}</Text>
        </ScrollView>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mota: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'gray',
    marginBottom: 5,
  },
  theloai: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#FF0000',
    marginLeft: 10,
    marginBottom: 5,
  },
  thoigian: {
    fontSize: 13,
    fontStyle: 'italic',
    color: 'gray',
    marginBottom: 5,
  },
  content: {
    fontSize: 15,
    color: '#000',
    marginBottom: 15,
  }

});
