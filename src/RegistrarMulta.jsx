import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegistrarMulta.css';

const RegistrarMulta = () => {
  const [costo, setCosto] = useState('');
  const [torre, setTorre] = useState('');
  const [edificio, setEdificio] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('http://localhost:3000/api/multas', { costo, torre, edificio });

      setCosto('');
      setTorre('');
      setEdificio('');

      setTimeout(() => {
        setLoading(false);
        setShowAlert(true);
      }, 500); // La pantalla se oscurece después de 0.5s
    } catch (error) {
      console.error('Error al registrar la multa:', error);
      setLoading(false);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    navigate('/multas');
  };

  return (
    <div className="registrar-multa-container">
      <h1>Registrar Nueva Multa</h1>

      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Costo" value={costo} onChange={(e) => setCosto(e.target.value)} required />
        <input type="text" placeholder="Torre" value={torre} onChange={(e) => setTorre(e.target.value)} required />
        <input type="text" placeholder="Edificio" value={edificio} onChange={(e) => setEdificio(e.target.value)} required />
        <button type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrar Multa'}
        </button>
      </form>

      {loading && <div className="loader"></div>}

      {showAlert && (
        <div className="overlay">
          <div className="alerta-exito">
            <p>✅ Multa registrada con éxito.</p>
            <button onClick={handleCloseAlert}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrarMulta;
