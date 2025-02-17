import React from 'react';
import { Link } from 'react-router-dom';  // Usamos Link para la navegación
import './Administracion.css';

const Pagos = () => {
  return (
    <div>
      {/* Navbar dentro de la pestaña Pagos */}
      <div className="navbar">
        <ul>
          <li><Link to="/administracion">Administración</Link></li>
          <li><Link to="/pagos">Pagos</Link></li>
          <li><Link to="/multas">Multas</Link></li>
          <li><Link to="/portones">Portones</Link></li>
          <li><Link to="/login" className="logout-button">Cerrar</Link></li> {/* Botón Cerrar */}
        </ul>
      </div>
      <div className="table-container">
        <h1>Pagos</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Estatus</th>
              <th>Torre</th>
              <th>Edificio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan Pérez</td>
              <td>123456789</td>
              <td>No Pagado</td>
              <td>Torre 1</td>
              <td>Edificio A</td>
            </tr>
            <tr>
              <td>María López</td>
              <td>987654321</td>
              <td>Pagado</td>
              <td>Torre 2</td>
              <td>Edificio B</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pagos;
