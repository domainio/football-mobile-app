import * as React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import AppStyles from '@styles/AppStyles';
import PlayerList from '@components/PlayerList';

const PlayerListScreen = ({ playerList }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={AppStyles.screen}>
        <View style={{ marginTop: 20, marginHorizontal: 20, flex: 1 }}>
          <PlayerList playerList={playerList} />
        </View>
      </SafeAreaView>
    </>
  )
}

export default PlayerListScreen;