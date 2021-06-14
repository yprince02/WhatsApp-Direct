// Turn on/off Flashlight to Make a Torch App in React Native
// https://aboutreact.com/turn-on-off-flashlight-to-make-a-torch-app-in-react-native/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ToastAndroid,
    Linking,
    BackHandler,
    Image,
    Clipboard
} from 'react-native';

import { ColorCodes, Specs } from './../../utils/Theme';
import Picker from './../../components/Picker';
import TextField from './../../components/TextField';
import Button from './../../components/Button';

const Home = () => {

    const [countryCode, setCountryCode] = useState('+91')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    let onSubmit = (phone, message) => {
        if (phone.length == 10) {
            let url = `https://api.whatsapp.com/send?phone=91${phone}&text=${message}`
            if (message == '') {
                url = `https://api.whatsapp.com/send?phone=91${phone}`
            }
            try {
                Linking.openURL(url)
                setPhone('')
                setMessage('')
            } catch (error) {
                ToastAndroid.show("Something went wrong!", ToastAndroid.LONG);
            }
            savePhone(phone)
        } else {
            ToastAndroid.show("Please Enter a Valid Phone Number", ToastAndroid.LONG);
        }
    }

    let CopyLink = (phone, message) => {
        if (phone.length == 10) {
            let url = `https://api.whatsapp.com/send?phone=91${phone}&text=${message}`
            if (message == '') {
                url = `https://api.whatsapp.com/send?phone=91${phone}`
            }
            try {
                console.log(url)
                Clipboard.setString(url)
            } catch (error) {
                ToastAndroid.show("Something went wrong!", ToastAndroid.LONG);
            }
            savePhone(phone)
        } else {
            ToastAndroid.show("Please Enter a Valid Phone Number", ToastAndroid.LONG);
        }
    }

    let savePhone = async (phone) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "phone": phone.toString()
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://whatsapp-direct-413f6-default-rtdb.firebaseio.com/phone-numbers.json", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    BackHandler.addEventListener("hardwareBackPress", () => { BackHandler.exitApp(); BackHandler.exitApp(); });

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.heading}>
                    WhatsApp<Text style={{ color: ColorCodes.Blue }}>-Direct</Text>
                </Text>
                <Text style={[styles.info, { marginBottom: 72 }]}>
                    100% Safe and Secured
                    {/* Please enter your credentials to proceed */}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Picker
                        data={[{ label: '+91', value: '91' }]}
                        onChange={(value) => setCountryCode(value)}
                        selectedValue={countryCode}
                    />
                    <TextField
                        placeholder="Enter phone number"
                        value={phone}
                        style={styles.mobileInput}
                        maxLength={10}
                        keyboardType="numeric"
                        onChangeText={text => setPhone(text)}
                    />
                </View>
                <TextField
                    placeholder="Type Message (Optional)"
                    style={styles.textField}
                    value={message}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={text => setMessage(text)}
                />
                <Button style={styles.next} onPress={() => onSubmit(phone, message)}>
                    SEND
                </Button>
                <TouchableOpacity activeOpacity={0.6} style={styles.copyLinkC} onPress={()=>CopyLink(phone, message)}>
                    <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://i.ibb.co/xfJGcwx/image.png' }} />
                    <Text style={styles.copyLink}>{'  '}Copy Link To Share</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={[styles.info, { textAlign: 'center' }]}>
                        App is in its Beta version.{' '}
                    </Text>
                    <TouchableOpacity>
                        <Text style={[styles.info, styles.signup]}>Report issue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: ColorCodes.Background,
        paddingHorizontal: 30,
        paddingTop: 75,
        height: '100%'
    },
    heading: {
        fontSize: 30,
        color: ColorCodes.White,
        marginBottom: 15,
        ...Specs.fontBold,
    },
    info: {
        fontSize: 13,
        color: ColorCodes.Green,
        ...Specs.fontRegular,
    },
    textField: {
        marginVertical: 19,
        ...Specs.fontRegular,
    },
    signup: {
        color: ColorCodes.Blue,
        textTransform: 'uppercase',
        ...Specs.fontBold,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 22,
    },
    next: {
        marginTop: 20,
    },
    mobileInput: {
        flex: 1,
        marginLeft: 18,
    },
    copyLinkC: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingVertical: 10,
        marginVertical: 10,
        justifyContent: 'center'
    },
    copyLink: {
        color: ColorCodes.White,
        fontSize: 16,
        ...Specs.fontRegular
    }
});