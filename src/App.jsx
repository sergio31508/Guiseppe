// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registrar from './Registrar';
import Administracion from './Administracion';
import Pagos from './Pagos';
import Multas from './Multas';
import Portones from './Portones';
import Notificaciones from './Notificaciones';
import RegistrarMulta from './RegistrarMulta'; // Importar la nueva página de registro de multas

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/administracion" element={<Administracion />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/multas" element={<Multas />} />
        <Route path="/registrar-multa" element={<RegistrarMulta />} /> {/* Nueva ruta */}
        <Route path="/portones" element={<Portones />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
      </Routes>
    </Router>
  );
};

export default App;
