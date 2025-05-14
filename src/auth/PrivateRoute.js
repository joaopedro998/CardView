import { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { token, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !token) {
      navigate('/login', { replace: true });
    }
  }, [token, loading, navigate]);

  if (loading) return <div>Verificando autenticação...</div>;
  if (!token) return null;

  return children;
};

export default PrivateRoute;