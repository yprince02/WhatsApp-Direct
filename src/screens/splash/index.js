import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  AsyncStorage,
} from 'react-native';
import {ColorCodes, Specs} from '../../utils/Theme';
// import {Auth} from '../utils/ImageConst';

export default class Splash extends Component {
  goTo = nav => {
    this.props.navigation.navigate(nav);
  };

  componentDidMount() {
    // this.navigate()
    const unsubscribe = this.props.navigation.addListener('focus', () => {
      this.navigate();
    });

    return unsubscribe;
  }

  async navigate() {
    let root = null;
    try {
      root = await AsyncStorage.getItem('rootScreen');
      console.log(await root);
    } catch (error) {
      root = null;
      console.log(error);
    }

    setTimeout(() => {
      if (root == null) {
        this.goTo('Intro');
      } else {
        this.goTo(root);
      }
    }, 100);
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={{uri: 'https://i.ibb.co/pPBRJv0/splash-back.jpg'}}
        resizeMode="stretch">
        <Image
          source={{uri: 'https://i.ibb.co/WvnwmQF/logonew.png'}}
          style={styles.ladyDr}
          resizeMode="contain"
        />
        <Text style={styles.tnc}>WhatsApp-Direct Pro</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: ColorCodes.Background,
    justifyContent: 'flex-end',
  },
  login: {
    fontSize: 14,
    color: ColorCodes.Blue,
    marginTop: 21,
    ...Specs.fontBold,
  },
  startText: {
    fontSize: 16,
    marginVertical: 5,
  },
  tnc: {
    fontSize: 10,
    color: ColorCodes.Tnc,
    textAlign: 'center',
    marginBottom: 14,
    marginTop: 35,
    marginHorizontal: 18,
    ...Specs.fontMedium,
  },
  ladyDr: {
    alignSelf: 'center',
    flex: 1,
    width: 170,
    height: 170,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 20,
    height: 150,
    width: 150,
    backgroundColor: 'transparent',
  },
});
