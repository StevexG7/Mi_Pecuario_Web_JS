import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/LogIn';
import Inicio from './Pages/Inicio';
import NoEncontrado from './Pages/NoEncontrado';
import { CssBaseline } from '@mui/material';

function App() {
  const isAuthenticated = false;

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/inicio" 
          element={isAuthenticated ? <Inicio /> : <Navigate to="/login" replace />} 
        />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </>
  );
}

export default App;