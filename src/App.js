import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from './auth/PrivateRoute';
import Collection from './pages/Collection';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/collection" element={
            <PrivateRoute>
              <Collection />
            </PrivateRoute>
          } />
          <Route path="/" element={<Navigate to="/collection" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;