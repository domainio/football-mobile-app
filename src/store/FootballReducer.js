import ActionTypes from '@constants/ActionTypes';

const INIT_STATE = {
  competitionList: [],
  teamList: [],
  playerList: [],
  matchList: [],
};

const FootballReducer = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case ActionTypes.getAllTeamsSuccess:
      return { ...state, teamList: action.teamList }
    case ActionTypes.getTeamPlayersSuccess:
      return { ...state, playerList: action.playerList }
    case ActionTypes.getTeamFutureMatchesSuccess:
      return { ...state, matchList: action.matchList }
    case ActionTypes.cleanupTeamStore:
      return { ...state, playerList: [], matchList: [] }
    default:
      return state;
  }
}

export default FootballReducer;