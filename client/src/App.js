import './App.css';
import React, { Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }


  const isAuth = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseResponse = await response.json();

      parseResponse === true ? setIsAuthenticated(true) : setIsAuthenticated(false);

    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    isAuth();
  });



  return (
    <Fragment>
    <Header isAuth={isAuthenticated}/>
    <Router>
    <div className='container'>
          <Routes>
              <Route exact path='/login' element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/dashboard"/>} />
              <Route exact path='/register' element={!isAuthenticated ? <Register setAuth={setAuth} /> : <Navigate to="/login" />} />
              <Route exact path='/dashboard' element={isAuthenticated ? <Dashboard/> : <Navigate to="/login"/>}/>
            </Routes>
          </div>
      </Router>
    </Fragment>

  );
}

export default App;
