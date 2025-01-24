import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './LandingPage';
import PrivateRoute from './componant/PrivateRoute';
import AuthenticatedLayout from './componant/AuthenticateLayout';
import SingleBlogCard from './componant/SingleBlogCard';
import BlogCard from './componant/BlogCard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Route for Landing Page (unauthenticated users) */}
          <Route path="/" element={<LandingPage />} />

          {/* Protected Route (Home, Navbar visible only for authenticated users) */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <AuthenticatedLayout>
                  <SingleBlogCard />
                  <BlogCard />
                </AuthenticatedLayout>
              </PrivateRoute>
            }
          />

          {/* Redirect unauthenticated users to Landing Page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
