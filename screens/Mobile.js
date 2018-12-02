import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import firebaseConf from '../lib/firebaseConfig';
import Item from '../component/SmallNewsComponent.js';

export default class Mobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem2: [],
        };


    }

    componentDidMount() {


        this.getListnews();
    }

    getListnews() {
        var that = this;
        firebaseConf.database().ref('baomoi/').on('value', function (snapshot) {
            let news2 = [];
            snapshot.forEach((child) => {

                if (child.val().theloai == "MOBILE") {
                    let item2 = {
                        tieude: child.val().tieude,
                        anh: child.val().anh,
                        mota: child.val().mota,
                        doan1: child.val().doan1,
                        doan2: child.val().doan2,
                        doan3: child.val().doan3,
                        theloai: child.val().theloai,
                        thoigian: child.val().thoigian,
                        key: child.key,
                    }
                    console.log(item2.anh)
                    news2.push(item2);
                }
            });
            that.setState({ listItem2: news2 });
        });
    }


    static navigationOptions = {
        title: 'MOBILE và đời sống',
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />

                <ScrollView style={styles.mScrollView}>

                    {this.state.listItem2.map((item2) =>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail', { item: item2 }) }}>
                            <Item key={item2.key} itemInfo={item2} />
                        </TouchableOpacity>

                    )}

                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',

    },
    menu: {
        flex: 1,
        borderRightColor: '#000',
        borderWidth: 1,
        alignItems: 'center',
        textAlign: "center",
        justifyContent: 'center',
        borderColor: '#000'
    },
    mScrollView: {
        width: '100%',
    }
});
