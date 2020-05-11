import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenNames from '@constants/ScreenNames';
import HomeScreen from '@screens/HomeScreen';
import DetailsScreen from '@screens/DetailsScreen'; 
import NavService from '@services/NavService';
import SplashScreen from '@screens/SplashScreen';
import TranslationService from '@services/TranslationService';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={NavService.NavigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.Splash}
          component={SplashScreen}
          options={{
            headerTintColor: Colors.white,
            title: TranslationService.get('splash-screen.nav-title'),
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name={ScreenNames.Home}
          component={HomeScreen}
          options={{
            title: TranslationService.get('home-screen.nav-title')
          }}
        />
        <Stack.Screen
          name={ScreenNames.Details}
          component={DetailsScreen}
          options={({ route }) => ({
            title: route.params?.team?.name,
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;