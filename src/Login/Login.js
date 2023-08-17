import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send GET request to Firebase-like endpoint for login validation (for learning purposes only)
      const response = await axios.get(
        `https://your-firebase-like-api.com/login.json?email=${email}&password=${password}`
      );

      if (response.data.valid) {
        console.log('User logged in successfully');
      } else {
        console.log('Invalid login credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button type="submit">Login</Button>
    </Form>
  );
};

export default Login;
