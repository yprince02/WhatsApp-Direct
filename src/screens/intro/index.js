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
    Image,
    AsyncStorage
} from 'react-native';

import { ColorCodes, Specs } from './../../utils/Theme';
import Button from './../../components/Button';

const Intro = (props) => {

    const [step, setStep] = useState(1)
    const [backColor, setBackColor] = useState('#252628')

    const colors = {
        color1: '#252628',
        color2: '#258080',
        color3: '#5f826e'
    }

    let next = (step) => {
        setStep(step + 1)

        // step == 1 ? setBackColor(colors.color1) 
        // : step == 2 ? setBackColor(colors.color2)
        // : setBackColor(colors.color3)

        if (step == 3) {
            AsyncStorage.setItem('rootScreen', 'Home')
            props.navigation.navigate('Home')
        }
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={[styles.container, { backgroundColor: backColor }]}>
                <Text style={[styles.heading, step == 3 && { marginBottom: 0 }]}>
                    {
                        step == 1 ?
                            <>WhatsApp <Text style={{ color: ColorCodes.Blue }}>-Direct</Text></>
                            : step == 2 ?
                                <>No contact needed</>
                                : <>Send messages directly</>
                    }
                </Text>
                {
                    step == 1 ?
                        <Text style={[styles.info, { marginBottom: 72 }]}>100% Safe and Secured. AdFree</Text>
                        : <Text style={[styles.info, { marginBottom: 0 }]}></Text>
                }
                <View style={{ paddingVertical: 10 }}>
                    {
                        step == 1 ? <Image source={{ uri: 'https://i.ibb.co/WvnwmQF/logonew.png' }} style={styles.image} />
                            : step == 2 ? <Image source={{ uri: 'https://img.icons8.com/bubbles/200/000000/contacts.png' }} style={styles.image} />
                                : null
                    }
                </View>
                <View style={{ flexDirection: 'row' }}>

                    {
                        step == 1 ? <Text style={styles.introInfo}>Send messages and files without saving phone number to anyone</Text>
                            : step == 2 ?
                                <View style={styles.introInfo}>
                                    <Text style={[styles.steps, { fontWeight: 'bold' }]}>
                                        No need to save contact.
                                    </Text>
                                    <Text style={[styles.stepsSm]}>Just enter number and send message to anyone in typically 2 simple steps. Hurrayy!!</Text>
                                     
                                </View>
                                :<View style={{ width: '100%' }}>
                                    <View style={styles.stepsC}>
                                        <Image source={{ uri: 'https://img.icons8.com/bubbles/100/000000/phone.png' }} style={styles.icon} />
                                        <View style={styles.steps}>
                                            <Text style={[styles.steps, { fontWeight: 'bold' }]}>Enter Phone number</Text>
                                            <Text style={[styles.stepsSm]}>Copy and paste the phone number to which you want to send message</Text>
                                        </View>
                                    </View>

                                    <View style={styles.stepsC}>
                                        <Image source={{ uri: 'https://img.icons8.com/bubbles/100/000000/chat.png' }} style={styles.icon} />
                                        <View style={styles.steps}>
                                            <Text style={[styles.steps, { fontWeight: 'bold' }]}>Enter Message</Text>
                                            <Text style={[styles.stepsSm]}>Type the message you want to send (OPTIONAL)</Text>
                                        </View>
                                    </View>

                                    <View style={styles.stepsC}>
                                        <Image source={{ uri: 'https://img.icons8.com/bubbles/100/000000/send-message-male.png' }} style={styles.icon} />
                                        <View style={styles.steps}>
                                            <Text style={[styles.steps, { fontWeight: 'bold' }]}>Click Send</Text>
                                            <Text style={[styles.stepsSm]}>Click the SEND button. Hurray! Enjoy your chat</Text>
                                        </View>
                                    </View>
                                </View>
                    }
                </View>
                <View style={styles.footerContainer}>
                    <Button style={styles.next} onPress={() => next(step)}>
                        {
                            step == 3 ? 'GET STARTED' : 'NEXT'
                        }
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Intro;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: ColorCodes.Background,
        paddingHorizontal: 30,
        paddingTop: 45,
        height: '100%'
    },
    heading: {
        fontSize: 27,
        alignSelf: 'center',
        color: ColorCodes.White,
        marginBottom: 15,
        fontWeight: 'bold',
        ...Specs.fontBold,
    },
    info: {
        fontSize: 13,
        color: ColorCodes.Green,
        alignSelf: 'center',
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
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        width: windowWidth,
        padding: 20,
    },
    image: {
        width: 170,
        height: 170,
        alignSelf: 'center'
    },
    introInfo: {
        fontSize: 14,
        color: ColorCodes.White,
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 20,
        marginTop: 60,
        ...Specs.fontRegular,
    },
    steps: {
        fontSize: 15,
        color: ColorCodes.White,
        textAlign: 'center',
        paddingVertical: 2,
        ...Specs.fontRegular,
    },
    stepsSm: {
        fontSize: 13,
        color: ColorCodes.Green,
        textAlign: 'center',
        paddingVertical: 2,
        lineHeight: 18,
        ...Specs.fontRegular,
    },
    stepsC: {
        textAlign: 'center',
        width: '100%',
        paddingVertical: 10
    },
    icon: {
        width: 70,
        height: 70,
        alignSelf: 'center'
    }
});