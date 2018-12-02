import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class SplashScreen extends Component {




    constructor(props) {
        super(props);

        setInterval(() => (
            this.props.navigation.navigate('Home')
        ), 2000);
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={require('../images/background.png')} style={{ width: '100%', height: '100%' }}
                />
            </View>
        )
    }
}
