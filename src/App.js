import logo from "./logo.svg";
import "./App.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Dropdown,
  Table,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { Users } from "./users";
import {Login } from "./Login"
import { BrowserRouter as Router,Route, Routes, } from "react-router-dom";



function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Login/>} ></Route>
          <Route  path="/Users" element={<Users/>} ></Route>
        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
