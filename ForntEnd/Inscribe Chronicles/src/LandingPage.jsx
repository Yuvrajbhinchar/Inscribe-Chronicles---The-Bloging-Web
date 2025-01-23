import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField, IconButton, InputAdornment, Button } from '@mui/material';
import axios from "axios";

const LandingPage = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showSignIn, setShowSignIN] = useState(false);
    const[signUpWithEmail, setSignUpWithEmail] = useState(false);
    const[signInWithEmail, setSignInWithEmail] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [otpFormVisible, setOtpFormVisible] = useState(false);
    

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [formErrors, setFormErrors] = useState({});

  const handleCloseModal = () => {
    setShowSignup(false);
    setShowSignIN(false);
    setSignUpWithEmail(false);
    setOtpFormVisible(false);
    setSignInWithEmail(false);
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({});
  };

    const handleSignUpClick = () => {
        setShowSignup(true);
        setShowSignIN(false);
    };
    
    const handleSignInClick = () => {
        setShowSignup(false);
        setShowSignIN(true);
    }

    const handleSignUpWithEmail = () => {
        setSignUpWithEmail(true);
        setShowSignup(false);
        setShowSignIN(false);
    }
   
    const SignInWithEmailClick = ()=>{
      setSignInWithEmail(true);
  }

    const validateSignUpForm = () => {
        const errors = {};
        if (!formData.username) errors.username = "Username is required";
        if (!formData.email) errors.email = "Email is required";
        if (!formData.password) errors.password = "Password is required";
        if (formData.password !== formData.confirmPassword) {
          errors.confirmPassword = "Passwords do not match";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
      };

      const validateSignInForm = () => {
        const errors = {};
        if (!formData.email) errors.email = "Email is required";
        if (!formData.password) errors.password = "Password is required";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
      }

      //handle form ------>
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (validateSignUpForm()) {
          try {
            const response = await axios.post("/api/auth/signup", formData, {
              headers: {
                "Content-Type": "application/json",
              },
            });
            console.log("Success:", response.data);
          } catch (error) {
            console.error("Error occurred:", error.response?.data || error.message);
          } finally {
            console.log("FormData:", formData);
          }
        }
      };
      
    
      const handleInputChange = async(e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSigninWithEmail = async(e) =>{
        e.preventDefault();
          if(validateSignInForm()){
            try{
              const response = await axios.post("/api/auth/login",formData,{
                headers:{
                  "Content-Type" : "application/json",
                }
                
              })
              console.log("Success:", response.data);
              const JwtToken = response.data.JWT;
              localStorage.setItem("JWT", JwtToken);
              console.log(localStorage.getItem("JWT"))
            }
            catch(error){
                console.error("Error occurred", error);
            }
          }
      }

    return (
        <div className="bg-gray-100 w-full h-screen">
            <nav className="flex items-center sm:justify-between p-4 pb-5 mb-3 border-b-2">
                <div className="flex items-center">
                    <h1 className="sm:text-2xl text-lg font-bold font-mono mr-2">INSCRIBE CHRONICLES</h1>
                </div>
                <div>
                    <ul className="flex sm:space-x-4">
                        <li><a href="#ourStory" className="hover:text-gray-400 hidden md:block">Our Story</a></li>
                        <li><a href="#membership" className="hover:text-gray-400 hidden md:block">Membership</a></li>
                        <li><a href="#write" className="hover:text-gray-400 hidden md:block">Write</a></li>
                        <li><button onClick={handleSignUpClick} className="hover:text-gray-400 hidden md:block">Sign In</button></li>
                        <li><a href="#getStarted" className="bg-black text-white font-bold sm:py-2 sm:px-4 rounded-md ml-3" onClick={handleSignUpClick} >Get Started</a></li>
                    </ul>
                </div>
            </nav>

            <div className="w-full h-content flex justify-evenly m-0">
                <div className="mt-16">
                    <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold">Human <br />stories & ideas</h1>
                    <h1 className="md:text-2xl sm:text-xl text-xl my-10">A place to read, write, and deepen your understanding</h1>
                    <button className="bg-black text-white font-bold py-2 px-4 rounded-md" onClick={handleSignUpClick} >Start reading</button>
                </div>
            </div>

            {showSignup && (
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
                                <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" className="mr-2" />
                                Sign up with Google
                            </button>
                            <button className="flex items-center justify-center border rounded-md py-3">
                                <img src="https://img.icons8.com/color/24/facebook.png" alt="Facebook" className="mr-2" />
                                Sign up with Facebook
                            </button>
                            <button className="flex items-center justify-center border rounded-md py-3" onClick={handleSignUpWithEmail}>
                                <img src="https://img.icons8.com/ios-filled/24/email.png" alt="Email" className="mr-2" />
                                Sign up with Email
                            </button>
                        </div>
                        <p className="text-center mt-6">
                            Already have an account? <a href="#signIn" className="text-blue-500" onClick={handleSignInClick}>Sign in</a>
                        </p>
                    </div>
                </div>
            )}
            {showSignIn && (
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
                            <button className="flex items-center justify-center border rounded-full py-2 px-3 sm:px-4 w-full text-sm sm:text-base"
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
            )
            }
            {signUpWithEmail && (
                  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-4 sm:p-6 rounded-md shadow-lg w-11/12 max-w-md mx-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl sm:text-2xl font-semibold">
                        Inscribe Chronicles
                      </h2>
                      <button onClick={handleCloseModal}>
                        <CloseIcon className="text-gray-500 hover:text-black cursor-pointer" />
                      </button>
                    </div>
                    {!otpFormVisible ? (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <TextField
                          fullWidth
                          label="Username"
                          name="username"
                          variant="outlined"
                          value={formData.username}
                          onChange={handleInputChange}
                          error={!!formErrors.username}
                          helperText={formErrors.username}
                        />
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          variant="outlined"
                          value={formData.email}
                          onChange={handleInputChange}
                          error={!!formErrors.email}
                          helperText={formErrors.email}
                        />
                        <TextField
                          fullWidth
                          label="Password"
                          name="password"
                          type={passwordVisible ? "text" : "password"}
                          variant="outlined"
                          value={formData.password}
                          onChange={handleInputChange}
                          error={!!formErrors.password}
                          helperText={formErrors.password}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() => setPasswordVisible(!passwordVisible)}
                                  edge="end"
                                >
                                  {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Confirm Password"
                          name="confirmPassword"
                          type={confirmPasswordVisible ? "text" : "password"}
                          variant="outlined"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          error={!!formErrors.confirmPassword}
                          helperText={formErrors.confirmPassword}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() =>
                                    setConfirmPasswordVisible(!confirmPasswordVisible)
                                  }
                                  edge="end"
                                >
                                  {confirmPasswordVisible ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Button fullWidth variant="contained" color="primary" type="submit">
                          Submit
                        </Button>
                      </form>
                    ) : (
                      <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-center">
                          Enter OTP to Verify
                        </h2>
                        <TextField
                          fullWidth
                          label="OTP"
                          variant="outlined"
                          type="text"
                        />
                        <Button fullWidth variant="contained" color="primary">
                          Verify
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )
            }

            {
              signInWithEmail && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-4 sm:p-6 rounded-md shadow-lg w-11/12 max-w-md mx-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl sm:text-2xl font-semibold">
                        Inscribe Chronicles
                      </h2>
                      <button onClick={handleCloseModal}>
                        <CloseIcon className="text-gray-500 hover:text-black cursor-pointer" />
                      </button>
                    </div>
                    <form onSubmit={handleSigninWithEmail} className="space-y-4">
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          variant="outlined"
                          value={formData.email}
                          onChange={handleInputChange}
                          error={!!formErrors.email}
                          helperText={formErrors.email}
                        />
                        <TextField
                          fullWidth
                          label="Password"
                          name="password"
                          type={passwordVisible ? "text" : "password"}
                          variant="outlined"
                          value={formData.password}
                          onChange={handleInputChange}
                          error={!!formErrors.password}
                          helperText={formErrors.password}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() => setPasswordVisible(!passwordVisible)}
                                  edge="end"
                                >
                                  {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                         <Button fullWidth variant="contained" color="primary" type="submit">
                          Submit
                        </Button>
                        </form>

                    </div>

                    </div>
              )
            }

            <footer className="mt-20 border-t-2">
                <h1 className="text-center pt-4">@All Rights Are Reserved</h1>
            </footer>
        </div>
    );
};

export default LandingPage;
