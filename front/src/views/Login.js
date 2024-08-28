import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { usuario, clave });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h2>Iniciar Sesión</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="usuario" className="form-label">Usuario</label>
                  <input
                    type="text"
                    id="usuario"
                    className="form-control"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="clave" className="form-label">Clave</label>
                  <input
                    type="password"
                    id="clave"
                    className="form-control"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
