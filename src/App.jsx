// App.jsx
import { Routes, Route } from 'react-router-dom';
import { Principal } from './Principal';
import { HomeApp } from './pages/HomeApp';
import { MarvelGrid } from './pages/MarvelPage';
import { Likes } from './pages/LikesPage';
import { PomodoroPage } from './pages/PomodoroPage';
import { ProductDetail } from './components/catalogo-prod/ProductDetail';
import {ProductPage} from './pages/ProductPage';
import { ListadoPage } from './pages/ListadoPage';
import { TiendaLayout } from './pages/Layout/TiendaLayout';
import { Catalogo } from './components/catalogo-prod/Catalogo';
import { CarCheckout } from './components/catalogo-prod/CarCheckout';

function App() {
  return (
    <Routes>
      {/* Layout principal con Outlet */}
      <Route path="/" element={<Principal />}>
        <Route index element={<HomeApp />} />      
        <Route path="movies" element={<MarvelGrid/>} />
        <Route path="likes" element={<Likes />} />
        <Route path="pomodoro" element={<PomodoroPage />} />
        <Route path="tienda" element={<TiendaLayout />} >
          <Route index element={<Catalogo />} />
          <Route path=":slug" element={<ProductDetail />} /> 
          <Route path="checkout" element={<CarCheckout />} />      
        </Route>
        <Route path="formulario" element={<ProductPage />} />
         <Route path="formulario/:id" element={<ProductPage />} />
        <Route path="admin" element={<ListadoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
