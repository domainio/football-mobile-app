const ActionTypes = {

  getAllCompetitionsStart: 'getAllCompetitionsStart',
  getAllCompetitionsSuccess: 'getAllCompetitionsSuccess',
  getAllCompetitionsFail: 'getAllCompetitionsFail',

  getCompetitionTeamStart: 'getCompetitionTeamsStart',
  getCompetitionTeamSuccess: 'getCompetitionTeamsSuccess',
  getCompetitionTeamFail: 'getCompetitionTeamsFail',

  getAllTeamsStart: 'getAllTeamsStart',
  getAllTeamsSuccess: 'getAllTeamsSuccess',
  getAllTeamsFailed: 'getAllTeamsFail',

  getTeamPlayersStart: 'getTeamPlayersStart',
  getTeamPlayersSuccess: 'getTeamPlayersSuccess',
  getTeamPlayersFail: 'getTeamPlayersFail',

  getTeamFutureMatchesStart: 'getTeamFutureMatchesStart',
  getTeamFutureMatchesSuccess: 'getTeamFutureMatchesSuccess',
  getTeamFutureMatchesFail: 'getTeamFutureMatchesFail',

  cleanupTeamStore: 'cleanupTeamStore',
};

export default ActionTypes;