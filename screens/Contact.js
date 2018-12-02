import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        
        this.onClickBtn = this.onClickBtn.bind(this);
        this.onClearField = this.onClearField.bind(this);

        this.state = {
            name: '',
            phone: '',
            email: '',
            message: '',
        };
    }

    onClickBtn() {

        if (this.state.name == "") {
            alert('Empty field Name');
        } else if (this.state.phone == "") {
            alert('Empty field Phone');
        } else if (this.state.email == "") {
            alert('Empty field Email');
        } else {
            this.setState({
                name: '',
                phone: '',
                email: '',
                message: '',
            });

            alert('Sent');
        }
    }

    onClearField() {
        this.setState({
            name: '',
            phone: '',
            email: '',
            message: '',
        });
    }



    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />

                <Image
                    style={{ width: 200, height: 60, marginVertical: 5 }}
                    source={{ uri: "https://techtalk.vn/wp-content/uploads/2016/02/logoretina.png" }}
                />

                <Text
                    style={{
                        fontSize: 24,
                        color: '#FF9900',
                        marginVertical: 10,
                        fontWeight: 'bold'
                    }}
                >Hãy liên lạc với chúng tôi</Text>

                <TextInput
                    style={styles.mTextInput}
                    placeholder="Name"
                    underlineColorAndroid='#fff'
                    maxLength={50}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                />

                <TextInput
                    style={styles.mTextInput}
                    placeholder="Phone"
                    underlineColorAndroid='#fff'
                    keyboardType='numeric'
                    maxLength={11}
                    onChangeText={(text) => this.setState({ phone: text })}
                    value={this.state.phone}
                />

                <TextInput
                    style={styles.mTextInput}
                    placeholder="Email"
                    underlineColorAndroid='#fff'
                    maxLength={100}
                    keyboardType='email'
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                />

                <TextInput
                    style={styles.mTextInput2}
                    multiline={true}
                    numberOfLines={7}
                    placeholder="Message"
                    onChangeText={(text) => this.setState({ message: text })}
                    value={this.state.message}
                />

                <View style={{
                    width: '90%',
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity
                        onPress={this.onClearField}
                        style={styles.mButton2}
                    >
                        <Text style={styles.mText}>clear</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.onClickBtn}
                        style={styles.mButton}
                    >
                        <Text style={styles.mText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 5,
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
    mTextInput: {
        width: '90%',
        height: 50,
        fontSize: 18,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ccc',
        paddingLeft: 10,
        marginTop: 15,
    },
    mTextInput2: {
        width: '90%',
        fontSize: 18,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ccc',
        paddingLeft: 10,
        marginTop: 15,
    },
    mButton: {
        height: 50,
        flex: 1,
        backgroundColor: '#FF9900',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,

    },
    mButton2: {
        flex: 1,
        height: 50,
        backgroundColor: '#6633CC',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        marginRight: 10,
        marginBottom: 8,
        borderRadius: 5,
    },
    mText: {
        color: '#fff',
        fontSize: 16
    },
});
