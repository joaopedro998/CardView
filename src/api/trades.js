import api from './axiosConfig';

const USE_MOCK = true; // Altere para false quando a API real estiver pronta

export const proposeTrade = async (proposerId, receiverId, proposedCardId, requestedCardId) => {
  if (USE_MOCK) {
    console.log(`Mock: Proposta de troca enviada de ${proposerId} para ${receiverId}`);
    return { success: true, message: "Troca proposta com sucesso (mock)" };
  }
  
  try {
    const response = await api.post('/trades/propose', {
      proposerId,
      receiverId,
      proposedCardId, 
      requestedCardId
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao propor troca:', error);
    throw error;
  }
};

export const getTradeNotifications = async (userId) => {
  if (USE_MOCK) {
    return [
      {
        id: 1,
        message: "Treinador Ash quer trocar Pikachu pelo seu Charmander (mock)",
        date: new Date().toISOString()
      }
    ];
  }

  try {
    const response = await api.get(`/trades/notifications/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar notificações:', error);
    throw error;
  }
};