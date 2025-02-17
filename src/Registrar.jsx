import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registrar.css';

const Registrar = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profile, setProfile] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [loading, setLoading] = useState(false);  // Para mostrar el estado de carga

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/usuarios', {
        phone,
        password,
        name,
        profile,
        departamento,
      });

      setPhone('');
      setPassword('');
      setName('');
      setProfile('');
      setDepartamento('');

      setLoading(false);
      navigate('/login');  // Redirige después de un registro exitoso
    } catch (error) {
      setLoading(false);
      console.error('Error al registrar el usuario:', error.response || error);
    }
  };

  return (
    <div className="login-container">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="phone">Número de Teléfono:</label>
          <input
            type="tel"
            id="phone"
            placeholder="Introduce tu número de teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="text"
            id="password"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            placeholder="Introduce tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="profile">Selecciona tu perfil:</label>
          <select
            id="profile"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            required
          >
            <option value="administracion">Administración</option>
            <option value="dueno">Dueño</option>
            <option value="inquilino">Inquilino</option>
          </select>
        </div>
        <div>
          <label htmlFor="departamento">Departamento:</label>
          <input
            type="text"
            id="departamento"
            placeholder="Introduce el departamento"
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
          <button type="submit" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrar Usuario'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registrar;
