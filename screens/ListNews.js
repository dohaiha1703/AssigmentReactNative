import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native'
import { withNavigation } from 'react-navigation';
import firebaseConf from '../lib/firebaseConfig';
import Item2 from '../component/NewsComponent.js';
import Item from '../component/SmallNewsComponent.js';

class ListNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem1: [],
            listItem2: [],
        };
    }

    componentDidMount() {
        this.getFirstnews();
        this.getListnews();
    }

    getFirstnews() {
        var that = this;
        firebaseConf.database().ref('baomoi/').on('value', function (snapshot) {
            let news = [];
            snapshot.forEach((child) => {

                if (child.key == "bai1") {

                    let item = {
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
                    console.log(item.anh)
                    news.push(item);
                }
            });
            that.setState({ listItem1: news });
        });
    }

    getListnews() {
        var that = this;
        firebaseConf.database().ref('baomoi/').on('value', function (snapshot) {
            let news2 = [];
            snapshot.forEach((child) => {

                if (child.key != "bai1") {
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

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />

                <ScrollView style={styles.mScrollView}>

                    <Image
                        style={{ width: 120, height: 40, marginVertical: 10 }}
                        source={{ uri: "https://techtalk.vn/wp-content/uploads/2016/02/logoretina.png" }}
                    />

                    {this.state.listItem1.map((item) =>
                        <TouchableOpacity onPress={() => {this.props.screenProps.content(item) }}>
                            <Item2 key={item.key}
                                itemInfo={item} />
                        </TouchableOpacity>
                    )}

                    {this.state.listItem2.map((item) =>
                        <TouchableOpacity onPress={() => {this.props.screenProps.content(item) }}>
                            <Item key={item.key} itemInfo={item} />
                        </TouchableOpacity>

                    )}

                </ScrollView>
            </View>
        )
    }
}

export default ListNews;

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
