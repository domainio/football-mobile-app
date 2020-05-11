import * as React from 'react';
import AppStyles from '@styles/AppStyles';
import { View, Text, FlatList } from 'react-native';
import TranslationService from '@services/TranslationService';
import AvatarTitle from '@components/AvatarTitle';
import AvatarSubTitle from '@components/AvatarSubTitle';

const PlayerList = ({ playerList }) => {

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', paddingVertical:5 }}>
        <AvatarTitle style>{item.name}</AvatarTitle>
        <AvatarSubTitle style={{ paddingLeft: 5 }}>({item.position})</AvatarSubTitle>
      </View>
    )
  };

  return (
    <>
      <Text style={{ fontWeight: 'bold', fontSize: 16, paddingVertical: 10 }}>
        {TranslationService.get('player-list')(playerList.length)}
      </Text>
      <FlatList
        data={playerList}
        renderItem={({ item, index, separators }) => renderItem({ item })}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default PlayerList;