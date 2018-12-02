import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class NewsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.itemInfo.tieude} </Text>
                <View style={styles.small_container}>
                    <Image
                        style={styles.image_news}
                        source={{ uri: this.props.itemInfo.anh }}
                    />
                    <View style={styles.content}>
                        <Text >{this.props.itemInfo.mota}</Text>
                        <Text style={{ color: 'red' }}>{this.props.itemInfo.theloai}</Text>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 2.5,
        borderBottomColor: '#696969',

    },
    small_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 14,
        flex: 1,
        fontStyle: 'italic',

        paddingLeft: 10,
    },
    image_news: {
        width: '100%',
        height: 110,
        flex: 1,
    }

});