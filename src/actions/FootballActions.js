import ServerAPI from '@services/ServerAPI';
import ActionTypes from '@constants/ActionTypes';
import fake_all_teams from '@constants/fake_all_teams';
import TeamRoels from '@constants/TeamRoles';
import fake_matches from '@constants/fake_matches';

const getAllTeams = () => async (dispatch) => {
  dispatch({ type: ActionTypes.getAllTeamsStart });
  try {
    // const response = await ServerAPI.fetchAllTeams();
    // const { data: { teams: teamList } } = response;
    const { teams: teamList } = fake_all_teams;
    dispatch({ type: ActionTypes.getAllTeamsSuccess, teamList });
  } catch (err) {
    console.log(err);
    dispatch({ type: ActionTypes.getAllTeamsFailed });
  }
}

const _filterPlayers = (entityList) => {
  return entityList.filter(entity => entity.role === TeamRoels.Player)
}

const getTeamPlayers = ({ teamId }) => async (dispatch) => {
  dispatch({ type: ActionTypes.getTeamPlayersStart });
  try {
    const response = await ServerAPI.fetchTeamPlayers(teamId);
    const { data: { squad: entityList } } = response;
    const playerList = _filterPlayers(entityList);
    dispatch({ type: ActionTypes.getTeamPlayersSuccess, playerList });
  } catch (err) {
    console.log(err);
    dispatch({ type: ActionTypes.getTeamPlayersFail });
  }
}

const getCompetitionTeams = ({ competitionId }) => async (dispatch) => {
  dispatch({ type: ActionTypes.getCompetitionTeamStart });
  try {
    const response = await ServerAPI.fetchCompetitionTeams(competitionId);
    const { teams } = response
    // dispatch({ type: ActionTypes.getComÎpetitionTeamSuccess, team });
  } catch (err) {
    console.log(err);
    dispatch({ type: ActionTypes.getCompetitionTeamFail });
  }
}

const _filterActiveCompetitions = (allCompetitions) => {
  const activeCompetitions = allCompetitions.map(competition => {
    const test1 = !moment(competition.currentSeason.endDate).isBefore(moment(), "day");
    const test2 = moment(competition.currentSeason.endDate).isAter(moment(), "day");
    const test3 = moment().diff(competition.currentSeason.endDate, 'days');
    return !!test3
  })
  return activeCompetitions;
}

const getAllCompetitions = () => async (dispatch) => {
  dispatch({ type: ActionTypes.getAllCompetitionsStart });
  try {
    const response = await ServerAPI.fetchAllCompetitions();
    const { data: { competitions: allCompetitions } } = response;
    // localStorage.setItem('allCompetitions', JSON.stringify(allCompetitions));
    const activeCompetitions = _filterActiveCompetitions(allCompetitions);
    competitionList.map(competition => {
      console.log(competition)
    })
    dispatch({ type: ActionTypes.getAllCompetitionsSuccess, competitionList: activeCompetitions });
  } catch (err) {
    console.log(err);
    dispatch({ type: ActionTypes.getAllCompetitionsFail });
  }
}

const getTeamFutureMatches = ({ teamId }) => async (dispatch) => {
  dispatch({ type: ActionTypes.getTeamFutureMatchesStart });
  try {
    // const response = await ServerAPI.fetchTeamFutureMatches(teamId);
    // const { data: { matches } } = response;
    const {matches: matchList} = fake_matches;
    dispatch({ type: ActionTypes.getTeamFutureMatchesSuccess, matchList });
  } catch (err) {
    console.log(err);
    dispatch({ type: ActionTypes.getTeamFutureMatchesFail });
  }
}

const cleanupTeamStore = ()  => async (dispatch) => {
  dispatch({ type: ActionTypes.cleanupTeamStore });
}

export default {
  getAllTeams,
  getAllCompetitions,
  getCompetitionTeams,
  getTeamPlayers,
  getTeamFutureMatches,
  cleanupTeamStore,
}