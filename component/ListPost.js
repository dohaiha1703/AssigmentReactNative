import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View,
      ScrollView,
      Image,
      TouchableOpacity
    } from 'react-native';
import firebaseConf from '../lib/firebaseConfig';
export default class ListPost extends React.Component{
  constructor(props) {
    super(props);
    this.getPostList = this.getPostList.bind(this);

    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    this.getPostList();
  }

  getPostList(){
    var that = this;
    firebaseConf.database().ref('posts/').on('value', function (snapshot) {
        let posts = [];
        snapshot.forEach((child) => {

          let item = {
            key: child.key,
            data: child.val()
          }
          posts.push(item);
        });

        that.setState({posts});
        console.log(that.state.posts);
    });
  }
  

  render() {
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    return (
      <ScrollView >
        {this.state.posts.map(item => (
          <View key={item.key} style={{marginTop: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>
              {item.data.title}
            </Text>
            <Image source={{uri: item.data.picture}} style={{width: '100%', height: 200}}/>
            <Text>
              {item.data.short_description}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}
