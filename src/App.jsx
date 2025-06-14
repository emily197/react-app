// App.jsx
import { Routes, Route } from 'react-router-dom';
import { Principal } from './Principal';
import { HomeApp } from './pages/HomeApp';
import { MarvelGrid } from './pages/MarvelPage';
import { Likes } from './pages/LikesPage';
import { PomodoroPage } from './pages/PomodoroPage';
import { HomeTienda } from './pages/HomeTienda';
import { ProductDetail } from './components/catalogo-prod/ProductDetail';
import {ProductPage} from './pages/ProductPage';
import { ListadoPage } from './pages/ListadoPage';

function App() {
  return (
    <Routes>
      {/* Layout principal con Outlet */}
      <Route path="/" element={<Principal />}>
        <Route index element={<HomeApp />} />      
        <Route path="movies" element={<MarvelGrid/>} />
        <Route path="likes" element={<Likes />} />
        <Route path="pomodoro" element={<PomodoroPage />} />
        <Route path="tienda" element={<HomeTienda />} />
        <Route path="tienda/:slug" element={<ProductDetail />} />
        <Route path="formulario" element={<ProductPage />} />
         <Route path="formulario/:id" element={<ProductPage />} />
        <Route path="admin" element={<ListadoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
