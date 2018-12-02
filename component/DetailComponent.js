import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native'

export default class DetailComponent extends Component {

    constructor(props) {
        super(props);

    }



    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: 200, marginBottom: 10 }}
                    source={{ uri: this.props.itemInfo.anh }}
                />
                <Text style={styles.title}>{this.props.itemInfo.tieude} </Text>
                <Text style={styles.content}>{this.props.itemInfo.mota}</Text>
                <Text style={styles.content}>{this.props.itemInfo.doan1}</Text>
                <Text style={styles.content}>{this.props.itemInfo.doan2}</Text>
                <Text style={styles.content}>{this.props.itemInfo.doan3}</Text>
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
    },
    content: {
        fontSize: 14,
        fontStyle: 'italic',
        paddingBottom: 10,
        borderBottomWidth: 2.5,
        borderBottomColor: '#696969',
    },

});