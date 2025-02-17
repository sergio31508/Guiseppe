import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Administracion.css';

const Multas = () => {
  const [multas, setMultas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMultas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/multas');
        setMultas(response.data);
      } catch (error) {
        console.error('Error al obtener las multas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMultas();
  }, []);

  return (
    <div>
      <div className="navbar">
        <ul>
          <li><a href="/administracion">Administración</a></li>
          <li><a href="/pagos">Pagos</a></li>
          <li><a href="/multas">Multas</a></li>
          <li><a href="/portones">Portones</a></li>
          <li><a href="/login" className="logout-button">Cerrar</a></li>
        </ul>
        <Link to="/notificaciones" className="notificaciones-link">
          <img className="circular-image" />
        </Link>
      </div>

      <div className="table-container">
        <h1>Multas</h1>

        <CSSTransition in={loading} timeout={300} classNames="fade" unmountOnExit>
          <p className="loading-message">Cargando multas...</p>
        </CSSTransition>

        <table>
          <thead>
            <tr>
              <th>Costo</th>
              <th>Torre</th>
               <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            {multas.length > 0 ? (
              multas.map((multa, index) => (
                <tr key={index}>
                  <td>{multa.costo}</td>
                  <td>{multa.torre}</td>
                  <td>{multa.edificio}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No se encontraron multas</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Botón para redirigir a la página de registro de multas */}
        <button type="button" onClick={() => navigate('/registrar-multa')}>
          Agregar Multa
        </button>
      </div>
    </div>
  );
};

export default Multas;
