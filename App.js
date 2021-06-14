// Turn on/off Flashlight to Make a Torch App in React Native
// https://aboutreact.com/turn-on-off-flashlight-to-make-a-torch-app-in-react-native/

// import React in our code
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';

// import Torch Component
import Home from './src/screens/home';
import Intro from './src/screens/intro';
import Splash from './src/screens/splash';


const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Splash" headerMode="none">
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Intro" component={Intro} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        height: '100%'
    },
    
});