import axios from 'axios';
import Config from '@constants/Config';
import MatchStatuses from '@constants/MatchStatuses';

const axiosInstance = axios.create({
  baseURL: Config.baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': Config.API_KEY
  },
});

const fetchAllTeams = () => {
  return axiosInstance.get(`/teams`);
}

const fetchAllCompetitions = () => {
  return axiosInstance.get('/competitions')
}

const fetchCompetitionTeams = () => {
  return axiosInstance.get(`/competitions/${id}/teams`);
}

const fetchTeamPlayers = (teamId) => {
  return axiosInstance.get(`/teams/${teamId}`);
}

const fetchTeamFutureMatches = (teamId) => {
  return axiosInstance.get(`/teams/${teamId}/matches`, {
    status: MatchStatuses.Scheduled,
    limit: 10,
  });
}

export default {
  fetchAllTeams,
  fetchAllCompetitions,
  fetchCompetitionTeams,
  fetchTeamPlayers,
  fetchTeamFutureMatches,
}