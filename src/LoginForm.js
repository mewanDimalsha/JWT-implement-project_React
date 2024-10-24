import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        email,
        password,
      });

      const { token } = response.data; // Extract token from the response
      localStorage.setItem('jwtToken', token); // Store the token in localStorage
      navigate('/users'); // Redirect to users page
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed, please check your credentials');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Sign In
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSignIn}
        fullWidth
      >
        Sign In
      </Button>

      <Typography variant="p" component="p" gutterBottom>
        Don't have an account? 
      </Typography>
        <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/register')}
            fullWidth
        >
            Sign Up
        </Button>
    </Container>
  );
};

export default LoginForm;
