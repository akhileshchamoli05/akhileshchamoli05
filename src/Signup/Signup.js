import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
    try {
      // Create a new user object to post to Firebase
      const newUser = {
        email,
        password,
      };

      // Make the POST request using axios
      const response = await axios.post(
        'https://mailboxclient-dc20b-default-rtdb.firebaseio.com/users.json', // Replace with your Firebase URL
        newUser
      );

      console.log('User data saved:', response.data);

      // Reset the form and state after successful submission
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setValidated(false);
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">Please confirm your password.</Form.Control.Feedback>
      </Form.Group>

      <Button type="submit">Register</Button>
    </Form>
  );
};

export default Signup;
