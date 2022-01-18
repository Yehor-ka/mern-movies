import Home from './pages/home/Home';
import './app.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate replace to="/register" />} />
      {user && (
        <>
          <Route path="/movies" element={<Home type="movies" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch/:id" element={<Watch />} />
        </>
      )}

      <Route path="/login" element={!user ? <Login /> : <Navigate replace to="/" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
