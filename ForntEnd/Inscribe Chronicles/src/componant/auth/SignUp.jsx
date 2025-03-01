import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField, IconButton, InputAdornment, Button } from '@mui/material';
import axios from "axios";
import { useState } from 'react';


function SignUp({handleCloseModal}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
     const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
     const [formErrors, setFormErrors] = useState({});
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

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (validateSignUpForm()) {
          try {
            const response = await axios.post("/api/auth/signup", formData, {
              headers: {
                "Content-Type": "application/json",
              },
            });
            setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                });
            console.log("Success:", response.data);
            const JwtToken = response.data.JWT;
            console.log("JWT:", JwtToken);
           localStorage.setItem("Inscribe_Barrer_Token", JwtToken);
           window.location.reload();
          } catch (error) {
            console.error("Error occurred:", error.response?.data || error.message);
          } finally {
            console.log("FormData:", formData);
          }
        }
      };
    return (
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
        </div>
      </div>
    );
}

export default SignUp;