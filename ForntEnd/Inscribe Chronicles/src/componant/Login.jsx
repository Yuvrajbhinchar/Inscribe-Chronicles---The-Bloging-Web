import React, { useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import { TextField, IconButton, InputAdornment, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

function Login({ handleCloseModal }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateSignInForm = () => {
    let errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSigninWithEmail = async (e) => {
    e.preventDefault();
    if (validateSignInForm()) {
      try {
        const response = await axios.post("/api/auth/login", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Success:", response.data);
        setFormData({
          username: "",
          email: "",
          password: "",
        });
        const JwtToken = response.data.JWT;
        localStorage.setItem("Inscribe_Barrer_Token", JwtToken);
        console.log(localStorage.getItem("Inscribe_Barrer_Token"));
      } catch (error) {
        console.error("Error occurred", error);
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
  );
}

export default Login;
