import { useState } from 'react';

export const FirstComponent = () => {

  const [nombre, setNombre] = useState("");
  const [saludo, setSaludo] = useState("");

  const receivedNameChange = (e) => setNombre(e.target.value);

  const receivedName = (e) => {
    e.preventDefault();
    if( nombre.trim() !=='' ) {
      setSaludo(` Hola ${ nombre }`)
    }
    else {
      setSaludo(`	No puedo saludarte, porque no se quien eres.`)
    }
  }

  return (
    <>
      <div className="container my-4">
        <div className="row g-3">
          <div className="col-auto">
            <label htmlFor="name" className='visually-hidden'>Escribe tu nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={receivedNameChange}
            />
          </div>
          <div className="col-auto">
            <button onClick={receivedName} className="btn btn-primary mb-3">
              Enviar
            </button>
          </div>
        </div>

        {saludo && (
        <div className="alert alert-success mt-3" role="alert">
          {saludo}
        </div>
      )}
      </div>
    </>

  )

} 