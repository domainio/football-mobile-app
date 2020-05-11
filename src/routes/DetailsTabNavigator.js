import * as React from 'react';
import ScreenNames from '@constants/ScreenNames';
import TranslationService from '@services/TranslationService';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PlayerListScreen from  '@screens/PlayerListScreen';
import MatchListScreen from  '@screens/MatchListScreen';

const Tab = createMaterialTopTabNavigator();

const DetailsTabNavigator = ({ playerListLength, matchListLength, playerList, matchList }) => (
  <Tab.Navigator>
    <Tab.Screen
      name={ScreenNames.PlayerListScreen}
      component={() => <PlayerListScreen playerList={playerList}/>}
      options={({ route }) => ({
        headerBackTitleVisible: false,
        tabBarLabel: TranslationService.get('player-list')(playerListLength),      
      })}
    />
    <Tab.Screen
      name={ScreenNames.MatchListScreen}
      component={() => <MatchListScreen matchList={matchList}/>}
      options={({ route, }) => ({
        headerBackTitleVisible: false,
        tabBarLabel: TranslationService.get('match-list-top-10')(matchListLength),      
      })}
    />
  </Tab.Navigator>
);

export default DetailsTabNavigator;

