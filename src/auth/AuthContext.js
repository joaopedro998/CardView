import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); // Alterado para null inicial
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  const login = async (email, password) => {
    try {
      // Simulação de login válido apenas para credenciais específicas
      if (!email || !password) {
        throw new Error("Email e senha são obrigatórios");
      }

      const mockUser = {
        id: 'mock-user-id',
        name: 'Treinador Pokémon',
        email: email
      };
      
      const mockToken = 'mock-jwt-token';
      
      localStorage.setItem('token', mockToken);
      setToken(mockToken);
      setUser(mockUser);
      setNotifications([{
        id: 1,
        message: "Bem-vindo ao sistema Pokémon!",
        date: new Date().toISOString()
      }]);
      
      return mockUser;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const storedToken = localStorage.getItem('token');
      
      // Só considera token válido se for o mockToken
      if (storedToken === 'mock-jwt-token') {
        try {
          const mockUser = {
            id: 'mock-user-id',
            name: 'Treinador Pokémon',
            email: 'mock@pokemon.com'
          };
          
          setUser(mockUser);
          setToken(storedToken);
        } catch (error) {
          logout();
        }
      } else {
        logout(); // Limpa token inválido
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setNotifications([]);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      login, 
      logout, 
      loading,
      notifications,
      setNotifications
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);