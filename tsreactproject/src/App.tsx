import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
 
import Dashboard from './components/Dashboard'; 
import AppBar from './components/AppBar1';
import Preferences from './components/Preferences';
import Login from './components/Login';
import useToken from './components/useToken';
 


 
function App() {

    const { token, setToken } = useToken();

    console.info("App.txt App() tokens :" + token);
    if (!token ||token==="") {
        return <Login setToken={setToken} />
    }

    return (
        <div className="App">
            <AppBar setToken={setToken} />
            <BrowserRouter>  
                <Routes>
                    <Route path="/preferences" element={<Preferences />} />
                    <Route path="/dashboard" element={<Dashboard/>} />  
                </Routes>
            </BrowserRouter> 
        </div>
    );
}
export default App ;
