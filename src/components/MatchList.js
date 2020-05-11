import * as React from 'react';
import AppStyles from '@styles/AppStyles';
import { View, Text, FlatList } from 'react-native';
import TranslationService from '@services/TranslationService';
import moment from 'moment';

const MatchList = ({ matchList, teamId }) => {

  const renderItem = ({ item }) => {
    const rivalTeam = (item.homeTeam.id !== teamId) ?
      item.homeTeam : item.awayTeam
    return (
      <>
        <Text>{TranslationService.get('rival-team')}</Text>
        <Text>{rivalTeam.name}</Text>
        <Text>{TranslationService.get('data')}</Text>
        <Text>{moment(item.utcDate).format('DD-MM-YYYY')}</Text>
        <Text>{TranslationService.get('competition')}</Text>
        <Text>{item.competition.name}</Text>
      </>)
  };

  return (
    <>
      <Text style={{ fontWeight: 'bold', fontSize: 16, paddingVertical: 10 }}>
        {TranslationService.get('match-list-top-10')(matchList?.length)}
      </Text>
      <Text>

      </Text>
      <FlatList
        data={matchList}
        renderItem={({ item, index, separators }) => renderItem({ item })}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default MatchList;