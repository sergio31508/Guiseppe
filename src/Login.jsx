import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Realiza la solicitud POST al backend
      const response = await axios.post('http://localhost:3000/api/usuarios/login', {
        phone,
        password
      });

      setLoading(false);
      console.log('Respuesta del servidor:', response.data);

      // Redirige si el login es exitoso
      navigate('/administracion');

    } catch (error) {
      setLoading(false);
      console.error('Error al iniciar sesión:', error.response?.data || error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Inicio de Sesión</h1>
        <input
          type="text"
          placeholder="Número de Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-group">
          <button type="submit" disabled={loading}>
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
          <button type="button" onClick={() => navigate('/registrar')}>Registrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
