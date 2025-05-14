import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
    useEffect(() => {
      document.title = "Cadastro"; // Altera o título
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulação de registro - substitua pela chamada real depois
      alert('Cadastro simulado com sucesso!');
      await login(email, password); // Autologin após cadastro
      navigate('/collection');
    } catch (error) {
      alert('Cadastro falhou');
    }
  };

  return (
    <div className="register-container">
  <form onSubmit={handleSubmit}>
    <h2>Cadastro</h2>  {/* Agora está dentro da box */}
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Digite seu nome"
      required
    />
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Digite seu email"
      required
    />
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Digite sua senha"
      required
    />
    <button type="submit">Cadastrar</button>
  </form>
</div>
  );
};

export default Register;