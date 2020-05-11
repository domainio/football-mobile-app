import * as React from 'react';
import AppStyles from '@styles/AppStyles';
import { View, Text, FlatList } from 'react-native';
import AvatarTitle from '@components/AvatarTitle';
import AvatarSubTitle from '@components/AvatarSubTitle';

const PlayerList = ({ playerList }) => {

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
        <AvatarTitle style>{item.name}</AvatarTitle>
        <AvatarSubTitle style={{ paddingLeft: 5 }}>({item.position})</AvatarSubTitle>
      </View>
    )
  };

  return (
    <FlatList
      data={playerList}
      renderItem={({ item, index, separators }) => renderItem({ item })}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default PlayerList;