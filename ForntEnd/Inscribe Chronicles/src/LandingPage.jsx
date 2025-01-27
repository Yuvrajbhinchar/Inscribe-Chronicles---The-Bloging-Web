import React, { useState } from 'react';
import SignUp from './componant/SignUp';
import Login from './componant/Login';
import Registration from './componant/Registration';
import SignInPage from './componant/SignInPage';
import { useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';


const LandingPage = () => {
  console.log("Landing Page");
  const [activeModal, setActiveModal] = useState(null); // Manages which modal to show

  const handleCloseModal = () => setActiveModal(null); // Closes any active modal
  const isAuth = useAuth();

  useEffect(() => {
    // If the user is authenticated, redirect them to the home page
    if (isAuth) {
      // We immediately redirect to the home page to prevent landing page from showing
    }
  }, [isAuth]);

  // If authenticated, redirect to home page automatically
  if (isAuth) return <Navigate to="/home" />;

  return (
    <div className="bg-gray-100 w-full h-screen">
      {/* Navbar */}
      <nav className="flex items-center sm:justify-between p-4 pb-5 mb-3 border-b-2">
        <div className="flex items-center">
          <h1 className="sm:text-2xl text-lg font-bold font-mono mr-2">
            INSCRIBE CHRONICLES
          </h1>
        </div>
        <div>
          <ul className="flex sm:space-x-4">
            <li>
              <a
                href="#ourStory"
                className="hover:text-gray-400 hidden md:block"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#membership"
                className="hover:text-gray-400 hidden md:block"
              >
                Membership
              </a>
            </li>
            <li>
              <a href="#write" className="hover:text-gray-400 hidden md:block">
                Write
              </a>
            </li>
            <li>
              <button
                onClick={() => setActiveModal('signin')}
                className="hover:text-gray-400 hidden md:block"
              >
                Sign In
              </button>
            </li>
            <li>
              <a
                href="#getStarted"
                className="bg-black text-white font-bold sm:py-2 sm:px-4 rounded-md ml-3"
                onClick={() => setActiveModal('signup')}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full h-content flex justify-evenly m-0">
        <div className="mt-16">
          <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold">
            Human <br /> stories & ideas
          </h1>
          <h1 className="md:text-2xl sm:text-xl text-xl my-10">
            A place to read, write, and deepen your understanding
          </h1>
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded-md"
            onClick={() => setActiveModal('signup')}
          >
            Start reading
          </button>
        </div>
      </div>

      {/* Modals */}
      {activeModal === 'signup' && (
        <Registration
          handleCloseModal={handleCloseModal}
          handleSignUpWithEmail={() => setActiveModal('signupEmail')}
          handleSignInClick={() => setActiveModal('signin')}
        />
      )}
      {activeModal === 'signin' && (
        <SignInPage
          handleCloseModal={handleCloseModal}
          SignInWithEmailClick={() => setActiveModal('signinEmail')}
          handleSignUpClick={() => setActiveModal('signup')}
        />
      )}
      {activeModal === 'signupEmail' && (
        <SignUp handleCloseModal={handleCloseModal} />
      )}
      {activeModal === 'signinEmail' && (
        <Login handleCloseModal={handleCloseModal} />
      )}

      {/* Footer */}
      <footer className="mt-20 border-t-2">
        <h1 className="text-center pt-4">@All Rights Are Reserved</h1>
      </footer>
    </div>
  );
};

export default LandingPage;
