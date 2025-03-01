import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import PrivateRoute from './componant/PrivateRoute';
import AuthenticatedLayout from './componant/AuthenticateLayout';
import Home from './pages/Home';
import SingleBlog from './componant/SingleBlogCard';
import WritePost from './componant/post/WritePost';



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
                 <Home />
                </AuthenticatedLayout>
              </PrivateRoute>
            }
          />

          {/* Route for Single Blog Page with postId as a URL parameter */}
          <Route path="/singleBlog/:postId" element={
            <PrivateRoute>
              <AuthenticatedLayout>
                <SingleBlog />
              </AuthenticatedLayout>
            </PrivateRoute>
          }/>

          <Route path="/write" element={
            <PrivateRoute>
              <AuthenticatedLayout>
                <WritePost/>
              </AuthenticatedLayout>
            </PrivateRoute>
          } />

          {/* Redirect unauthenticated users to Landing Page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
