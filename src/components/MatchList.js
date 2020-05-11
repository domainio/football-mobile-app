import * as React from 'react';
import AppStyles from '@styles/AppStyles';
import { View, Text, FlatList } from 'react-native';
import TranslationService from '@services/TranslationService';
import moment from 'moment';
import AvatarTitle from '@components/AvatarTitle';
import AvatarSubTitle from '@components/AvatarSubTitle';

const MatchList = ({ matchList, teamId }) => {

  const renderItem = ({ item }) => {
    const rivalTeam = (item.homeTeam.id !== teamId) ?
      item.homeTeam : item.awayTeam
    return (
      <View style={{ flexDirection: 'row', paddingVertical:10, justifyContent:'space-between' }}>
        <View>
          <AvatarTitle style={{fontWeight:'bold'}}>{rivalTeam.name}</AvatarTitle>
          <AvatarTitle>{item.competition.name}</AvatarTitle>
        </View>
        <View style={{alignSelf:''}}>
          <AvatarSubTitle>{moment(item.utcDate).format('DD/MM/YYYY')}</AvatarSubTitle>
        </View>
      </View>)
  };

  return (
    <FlatList
      data={matchList}
      renderItem={({ item, index, separators }) => renderItem({ item })}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default MatchList;