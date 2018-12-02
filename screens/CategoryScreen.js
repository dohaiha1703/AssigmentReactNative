import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'

import firebaseConf from '../lib/firebaseConfig';
import Item from '../component/SmallNewsComponent.js';
import { withNavigation } from 'react-navigation';

class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem1: [],
            listItem2: [],
            listItem3: [],
        };

        this.getList();

    }



    getList() {
        var that = this;
        firebaseConf.database().ref('baomoi/').on('value', function (snapshot) {

            let news2 = [];
            let news1 = [];
            let news3 = [];

            snapshot.forEach((child) => {

                if (child.val().theloai == "MOBILE") {
                    let item1 = {
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

                    news1.push(item1);
                    that.setState({ listItem1: news1 })
                }

                if (child.val().theloai == "TECH") {
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

                    news2.push(item2);
                    that.setState({ listItem2: news2 })
                }

                if (child.val().theloai == "LIVE") {
                    let item3 = {
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
                    news3.push(item3);
                    that.setState({ listItem3: news3 })
                }
            });



        });
    }

    getListMOBILE() {
        this.props.navigation.navigate('Home')
    }

    getListTECH() {

    }

    getListLIVE() {

    }



    render() {
        return (
            <View style={styles.container}>

                <ScrollView>

                    <Image
                        style={{ width: 120, height: 40, marginVertical: 10 }}
                        source={{ uri: "https://techtalk.vn/wp-content/uploads/2016/02/logoretina.png" }}
                    />


                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Mobile') }}
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            alignItems: 'center',
                            alignItems: 'center',
                            height: 40,
                            backgroundColor: '#FF8C00',
                        }}>
                        <Text style={{ lineHeight: 40 }}>MOBILE và đời sống</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Tech') }}
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            alignItems: 'center',
                            alignItems: 'center',
                            height: 40,
                            backgroundColor: '#FFD700',

                        }}>
                        <Text style={{ lineHeight: 40 }}>Xu hướng công nghệ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Live') }}
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            alignItems: 'center',
                            alignItems: 'center',
                            height: 40,
                            backgroundColor: '#7FFF00',

                        }}>
                        <Text style={{ lineHeight: 40 }}>Cuộc sống quanh ta</Text>
                    </TouchableOpacity>

                    <Text style={styles.cate}>MOBILE</Text>

                    {this.state.listItem1.map((item) =>
                        <TouchableOpacity onPress={() => { this.props.screenProps.content(item) }}>
                            <Item key={item.key} itemInfo={item} />
                        </TouchableOpacity>
                    )}

                    <Text style={styles.cate}>TECH</Text>

                    {this.state.listItem2.map((item) =>
                        <TouchableOpacity onPress={() => { this.props.screenProps.content(item) }}>
                            <Item key={item.key} itemInfo={item} />
                        </TouchableOpacity>
                    )}



                    <Text style={styles.cate}>LIVE</Text>


                    {this.state.listItem3.map((item) =>
                        <TouchableOpacity onPress={() => { this.props.screenProps.content(item) }}>
                            <Item key={item.key} itemInfo={item} />
                        </TouchableOpacity>

                    )}

                </ScrollView>

            </View>
        )
    }
}

export default withNavigation(CategoryScreen);

const styles = StyleSheet.create({
    container: {
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
    cate: {
        fontSize: 18,
        color: '#FF6600',
        marginTop: 10,
        marginLeft: 10,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    }
});
