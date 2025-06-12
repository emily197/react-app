import { Link } from 'react-router-dom';
          
export const MenuLateral = () => {

  return (
    <>    
        <ul className="nav flex-column py-4">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link text-light" aria-current="page">
              Peliculas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/likes" className="nav-link text-light" aria-current="page">
              Like
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pomodoro" className="nav-link text-light" aria-current="page">
              Pomodoro
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/tienda" className="nav-link text-light" aria-current="page">
              Tienda
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/formulario" className="nav-link text-light" aria-current="page">
              Formulario
            </Link>
          </li>

        </ul>

    </>
  );
}