import { MenuLateral } from './components/MenuLateral';
import { Outlet } from 'react-router-dom';

export const Principal = () => {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <nav className="col-12 col-md-3 col-lg-2 bg-dark sidebar d-flex flex-column p-0">
          <MenuLateral />
        </nav>
        <main className="col-12 col-md-9 col-lg-10 px-4 py-4 bg-light flex-grow-1">
          <Outlet /> {/* Aquí se mostrarán Movies, Series, etc */}
        </main>
      </div>
    </div>
  );
};
