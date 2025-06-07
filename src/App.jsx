// App.jsx
import { Routes, Route } from 'react-router-dom';
import { Principal } from './Principal';
import { HomeApp } from './pages/HomeApp';
import { MarvelGrid } from './pages/MarvelPage';
import { Likes } from './pages/LikesPage';
import { PomodoroPage } from './pages/PomodoroPage';

function App() {
  return (
    <Routes>
      {/* Layout principal con Outlet */}
      <Route path="/" element={<Principal />}>
        <Route index element={<HomeApp />} />      
        <Route path="movies" element={<MarvelGrid/>} />
        <Route path="likes" element={<Likes />} />
        <Route path="pomodoro" element={<PomodoroPage />} />
      </Route>
    </Routes>
  );
}


export default App;
