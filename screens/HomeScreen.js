import React, { Component } from 'react'
import {
    StyleSheet,
    Dimensions
} from 'react-native';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import ListNews from '../screens/ListNews.js';
import CategoryScreen from '../screens/CategoryScreen.js';
import ContactScreen from '../screens/Contact.js';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Bài viết' },
                { key: 'second', title: 'Danh mục' },
                { key: 'third', title: 'Liên hệ' },
            ],
        }
    }

    render() {
        return (
            <TabView
                navigationState={this.state}

                renderScene = {({ route }) => {
                    switch (route.key) {
                      case 'first':
                        return <ListNews screenProps={{
                            content: (item)=> this.props.navigation.navigate('Detail', {item:item})
                        }}/>;
                      case 'second':
                        return <CategoryScreen screenProps={{
                            content: (item)=> this.props.navigation.navigate('Detail', {item:item})
                        }}/>;
                      case 'third':  
                        return <ContactScreen  screenProps={{
                            content: (item)=> this.props.navigation.navigate('Detail', {item:item})
                        }} />;
                        default : return null
                    }
                  }}
                
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
