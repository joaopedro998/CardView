import api from './axiosConfig';

export const challengePlayer = async (challengerId, opponentId) => {
  const response = await api.post('/battles/challenge', {
    challengerId,
    opponentId
  });
  return response.data;
};