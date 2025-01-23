import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Registration({ handleCloseModal, handleSignUpWithEmail, handleSignInClick }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-2xl mx-4 md:mx-0">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mx-auto">Inscribe Chronicles</h2>
          <button onClick={handleCloseModal}>
            <CloseIcon className="text-gray-500 hover:text-black cursor-pointer" />
          </button>
        </div>
        <div className="flex flex-col space-y-6 mt-6">
          <button className="flex items-center justify-center border rounded-md py-3">
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
              className="mr-2"
            />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center border rounded-md py-3">
            <img
              src="https://img.icons8.com/color/24/facebook.png"
              alt="Facebook"
              className="mr-2"
            />
            Sign up with Facebook
          </button>
          <button
            className="flex items-center justify-center border rounded-md py-3"
            onClick={handleSignUpWithEmail}
          >
            <img
              src="https://img.icons8.com/ios-filled/24/email.png"
              alt="Email"
              className="mr-2"
            />
            Sign up with Email
          </button>
        </div>
        <p className="text-center mt-6">
          Already have an account?{' '}
          <a href="#signIn" className="text-blue-500" onClick={handleSignInClick}>
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Registration;
