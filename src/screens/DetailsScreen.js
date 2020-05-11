import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import AppStyles from '@styles/AppStyles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import FootballActions from '@actions/FootballActions';
import { SvgUri } from 'react-native-svg';
import Avatar from '@components/Avatar';
import PlayerList from '@components/PlayerList';
import MatchList from '@components/MatchList';
import Icon from 'react-native-vector-icons/Ionicons';

const _DetailsScreen = ({
  route,
  navigation,
  getTeamPlayers,
  getTeamFutureMatches,
  cleanupTeamStore,
  playerList,
  matchList,
}) => {

  const [isLoadingPlayers, setLoadingPlayers] = useState(false);
  const [team, setTeam] = useState(route.params?.team);


  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      cleanupTeamStore()
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const getTeamPlayersAsync = async () => {
      setLoadingPlayers(true);
      await getTeamPlayers({ teamId: team.id });
    };
    const getTeamFutureMatchesAsync = async () => {
      await getTeamFutureMatches({ teamId: team.id });
    }
    getTeamPlayersAsync();
    getTeamFutureMatchesAsync();
  }, []);

  useEffect(() => {
    if (playerList && playerList.length > 0) {
      setLoadingPlayers(false);
    }
  }, [playerList])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={AppStyles.screen}>
        <Avatar
          imageUrl={team.crestUrl}
          name={team.name}
          containerStyle={{ alignSelf: 'center', width: 150, height: 150 }}
          assetStyle={{ width: 150, height: 150 }}
          placeholder={<Icon name={'md-football'} size={150} color={'green'}/>}
        />
        <View style={[
          AppStyles.card,
          { maxHeight: '30%', flexGrow: 1 }
        ]}>
          <PlayerList playerList={playerList} />
        </View>
        <View style={[
          AppStyles.card,
          { maxHeight: '40%', flexGrow: 2 }
        ]}>
          <MatchList
            matchList={matchList}
            teamId={team.id}
          />
        </View>
      </SafeAreaView>
    </>
  )
}
const renderSvg = ({ imageUrl }) => (
  <View style={AppStyles.avatarContainer}>
    <SvgUri
      width={50}
      height={50}
      uri={imageUrl}
    />
  </View>
);

const props = ({ football: { playerList, matchList } }) => ({
  playerList,
  matchList
});

const actions = (dispatch) => bindActionCreators({
  getTeamPlayers: FootballActions.getTeamPlayers,
  getTeamFutureMatches: FootballActions.getTeamFutureMatches,
  cleanupTeamStore: FootballActions.cleanupTeamStore,
}, dispatch);

const DetailsScreen = connect(props, actions)(_DetailsScreen)

export default DetailsScreen;