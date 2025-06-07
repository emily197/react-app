import { useState, useEffect, useRef } from 'react';

export const Pomodoro = () => {
  const [tiempo, setTiempo] = useState(25 * 60); // en segundos
  const [activo, setActivo] = useState(false);
  const timerRef = useRef(null);

  const formatoTiempo = (segundos) => {
    const min = String(Math.floor(segundos / 60)).padStart(2, '0');
    const seg = String(segundos % 60).padStart(2, '0');
    return `${min}:${seg}`;
  };

  const iniciarTemporizador = () => {
    if (!activo) setActivo(true);
  };

  const detenerTemporizador = () => {
    setActivo(false);
  };

  const reiniciarTemporizador = () => {
    setActivo(false);
    setTiempo(25 * 60);
  };

  useEffect(() => {
    if (activo) {
      timerRef.current = setInterval(() => {
        setTiempo((prev) => {
          if (prev === 0) {
            clearInterval(timerRef.current);
            setActivo(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [activo]);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow border-0" style={{ maxWidth: 350 }}>
        <div className="card-body text-center">
          <h3 className="mb-4 fw-bold" style={{ color: "#b31b6f" }}>Pomodoro</h3>
          <div
            className="display-1 fw-semibold mb-4"
            style={{
              color: "#025067",
              letterSpacing: "2px",
              background: "#f8f9fa",
              borderRadius: "1rem",
              padding: "1.2rem 0",
              boxShadow: "0 2px 12px #0001"
            }}
          >
            {formatoTiempo(tiempo)}
          </div>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <button
              onClick={iniciarTemporizador}
              disabled={activo}
              className="btn btn-outline-primary px-4"
            >
              Iniciar
            </button>
            <button
              onClick={detenerTemporizador}
              disabled={!activo}
              className="btn btn-outline-secondary px-4"
            >
              Pausar
            </button>
            <button
              onClick={reiniciarTemporizador}
              className="btn btn-outline-danger px-4"
            >
              Reiniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};