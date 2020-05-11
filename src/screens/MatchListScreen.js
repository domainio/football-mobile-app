import * as React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import AppStyles from '@styles/AppStyles';
import MatchList from '@components/MatchList';

const MatchListScreen = ({ matchList }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={AppStyles.screen}>
        <View style={{ marginTop: 20, marginHorizontal: 20, flex: 1 }}>
          <MatchList matchList={matchList} />
        </View>
      </SafeAreaView>
    </>
  )
}

export default MatchListScreen;