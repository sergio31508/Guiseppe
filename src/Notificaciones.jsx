import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Notificaciones.css'; // Asegúrate de tener un archivo de estilos

const Notificaciones = () => {
  const [multas, setMultas] = useState([]);
  const [sumaCosto, setSumaCosto] = useState(0);

  // Función para obtener las multas desde la API
  useEffect(() => {
    const fetchMultas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/multas');
        setMultas(response.data); // Actualiza el estado con las multas obtenidas
        // Calcular la suma de los costos
        const totalCosto = response.data.reduce((acc, multa) => acc + multa.costo, 0);
        setSumaCosto(totalCosto); // Establecer la suma total
      } catch (error) {
        console.error('Error al obtener las multas:', error);
      }
    };

    fetchMultas();
  }, []);

  return (
    <div className="notificaciones-container">
      <h1>Notificaciones</h1>
      <p><strong>Suma total de las multas: </strong>${sumaCosto}</p>

     
    </div>
  );
};

export default Notificaciones;
