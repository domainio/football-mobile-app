import React, { useState, useEffect } from 'react';
import AppStyles from '@styles/AppStyles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import FootballActions from '@actions/FootballActions';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import TeamList from '@components/TeamList';
import Spinner from '@components/Spinner';

const _HomeScreen = ({ getAllTeams, teamList }) => {

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getAllTeamsAsync = async () => {
      setLoading(true);
      await getAllTeams();
    };
    getAllTeamsAsync();
  }, []);

  useEffect(() => {
    if (teamList && teamList.length > 0) {
      setLoading(false);
    }
  }, [teamList])

  // if (isLoading) {
  // return (<View><Spinner /></View>)
  // }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={AppStyles.screen}>
        <TeamList
          teamList={teamList}
        />
      </SafeAreaView>
    </>
  )
}

const props = ({ football: { teamList } }) => ({
  teamList
});

const actions = (dispatch) => bindActionCreators({
  getAllTeams: FootballActions.getAllTeams,
}, dispatch);

const HomeScreen = connect(props, actions)(_HomeScreen)

export default HomeScreen;