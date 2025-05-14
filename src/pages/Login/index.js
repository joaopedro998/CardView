import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Certifique-se de que esse CSS contém o conteúdo do style.css que você enviou

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login"; // Altera o título
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/collection');
    } catch (error) {
      alert('Login falhou: ' + error.message);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2 className="title">Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="input-group">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button className="button" type="submit">Entrar</button>
          <p className="register-link">
            Não tem uma conta? <a href="/register">Criar conta</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;