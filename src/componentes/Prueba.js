import { useState } from 'react';

export function Prueba() {
  const [nombre, setNombre] = useState('');
  const [saludo, setSaludo] = useState('');

  const manejarEnvio = () => {
    if (nombre.trim() !== '') {
      setSaludo(`¡Hola, ${nombre}!`);
    } else {
      setSaludo('No sabemos a quien mandar el saludo 😔');
    }
  };

  return (
    <div class="container mt-5 mb-5">
      <div class="row g-3">
        <div class="col-auto">
          <label class="visually-hidden">
            Ingrese un nombre
          </label>
          <input
            id="nombreInput"
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div class="col-auto">
          <button class="btn btn-primary mb-3" onClick={manejarEnvio}>
            Enviar
          </button>
        </div>
      </div>

      {saludo && (
        <div class="alert alert-success mt-3" role="alert">
          {saludo}
        </div>
      )}
    </div>
  );
}
