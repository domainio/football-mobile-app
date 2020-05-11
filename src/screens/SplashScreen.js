import React, { useEffect } from 'react';
import { View, Image, SafeAreaView, StatusBar, Platform } from 'react-native';
import AppStyles from '@styles/AppStyles';
import SplashScreenProvider from 'react-native-splash-screen';
import NavService from '@services/NavService';
import Spinner from '@components/Spinner';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import VSpaceSeparator from '@components/VSpaceSeparator';
import ScreenNames from '@constants/ScreenNames';

const SPACE_HEIGHT = (Platform.OS === 'ios') ? 40 : 20;

const SplashScreen = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreenProvider.hide();
      NavService.reset([{ name: ScreenNames.Home }])
    }, 2000);
  }, []);
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={[AppStyles.screen, AppStyles.splashScreen]}>
        <StatusBar barStyle="dark-content" />
        <VSpaceSeparator height={SPACE_HEIGHT} />
        <Spinner color={Colors.white} />
        <Image style={{ flex: 1 }} source={require('../assets/images/football_splash.gif')} />
      </SafeAreaView>
    </>
  )
}

export default SplashScreen;