import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

function SignInPage({ handleCloseModal, SignInWithEmailClick, handleSignUpClick }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 sm:p-6 rounded-md shadow-lg w-11/12 max-w-md mx-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold">Welcome back.</h2>
          <button onClick={handleCloseModal}>
            <CloseIcon className="text-gray-500 hover:text-black cursor-pointer" />
          </button>
        </div>

        {/* Sign-In Options */}
        <div className="space-y-3 sm:space-y-4">
          <button className="flex items-center justify-center border rounded-full py-2 px-3 sm:px-4 w-full text-sm sm:text-base">
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
              className="mr-2"
            />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center border rounded-full py-2 px-3 sm:px-4 w-full text-sm sm:text-base">
            <img
              src="https://img.icons8.com/color/24/facebook.png"
              alt="Facebook"
              className="mr-2"
            />
            Sign in with Facebook
          </button>
          <button className="flex items-center justify-center border rounded-full py-2 px-3 sm:px-4 w-full text-sm sm:text-base">
            <img
              src="https://img.icons8.com/ios-filled/24/mac-os.png"
              alt="Apple"
              className="mr-2"
            />
            Sign in with Apple
          </button>
          <button className="flex items-center justify-center border rounded-full py-2 px-3 sm:px-4 w-full text-sm sm:text-base">
            <img
              src="https://img.icons8.com/ios-filled/24/twitter-squared.png"
              alt="X"
              className="mr-2"
            />
            Sign in with X
          </button>
          <button
            className="flex items-center justify-center border rounded-full py-2 px-3 sm:px-4 w-full text-sm sm:text-base"
            onClick={SignInWithEmailClick}
          >
            <img
              src="https://img.icons8.com/ios-filled/24/email.png"
              alt="Email"
              className="mr-2"
            />
            Sign in with Email
          </button>
        </div>

        {/* Footer Links */}
        <p className="text-center mt-4 text-sm sm:text-base">
          No account?{" "}
          <a
            href="#createAccount"
            className="text-green-600 font-semibold"
            onClick={handleSignUpClick}
          >
            Create one
          </a>
        </p>
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-2">
          Forgot email or trouble signing in?{" "}
          <a href="#getHelp" className="text-blue-500">
            Get help.
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
