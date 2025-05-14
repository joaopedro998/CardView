export const mockProposeTrade = () => {
    return Promise.resolve({
      success: true,
      message: "Troca proposta com sucesso!"
    });
  };
  
  export const mockGetNotifications = () => {
    return Promise.resolve([
      {
        id: 1,
        message: "TreinadorAsh quer trocar Pikachu pelo seu Charmander",
        date: new Date().toISOString()
      }
    ]);
  };
  
  export const mockChallengePlayer = () => {
    return Promise.resolve({
      success: true,
      message: "Desafio enviado com sucesso!"
    });
  };