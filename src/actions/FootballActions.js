import ServerAPI from '@services/ServerAPI';
import ActionTypes from '@constants/ActionTypes';
import TeamRoels from '@constants/TeamRoles';

const getAllTeams = () => async (dispatch) => {
  dispatch({ type: ActionTypes.getAllTeamsStart });
  try {
    const response = await ServerAPI.fetchAllTeams();
    const { data: { teams: teamList } } = response;
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

const getTeamFutureMatches = ({ teamId }) => async (dispatch) => {
  dispatch({ type: ActionTypes.getTeamFutureMatchesStart });
  try {
    const response = await ServerAPI.fetchTeamFutureMatches(teamId);
    const { data: { matches: matchList } } = response;
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
  getTeamPlayers,
  getTeamFutureMatches,
  cleanupTeamStore,
}