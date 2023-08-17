import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup/Signup'; // Import Signup component
import Login from './Login/Login';   // Import Login component

const App = () => {
  return (
    <div>
     <Signup/>
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
