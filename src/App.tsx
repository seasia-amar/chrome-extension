import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute, { ProtectedRouteCheck } from "./components/ProtectedRoute";
import Welcome from "./components/Welcome";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProtectedRouteCheck><Welcome/></ProtectedRouteCheck>} />
        {/* <Route path="/" element={<Welcome/>}/> */}
        <Route element={<ProtectedRoute />}>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
         {/* <Route path='/dashboard' element={<ProtectedRoute Component= {Dashboard}/>} /> */}
      </Routes> 
      </HashRouter>
  );
}

export default App;
