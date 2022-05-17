import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Dropdown,
  Table,
} from "react-bootstrap";

import { useState, useEffect } from "react";

export const Users = () => {
 
  const [data, setData] = useState([]);
    const [mode, setMode] = useState("online");
    
  const clear = (event) => {
      const collect = localStorage.getItem('Users')
        var index=
        collect.splice(index,1)
      
      localStorage.setItem("Users",JSON.stringify(collect))
  }
  
  const addData = () => {
      localStorage.setItem("Users",)
  }
 
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((blob) => blob.json())
      .then((result) => {
        console.warn(result);
        setData(result);
        localStorage.setItem("Users", JSON.stringify(result));
      })
      .catch((err) => {
        setMode("offline");
        let collection = localStorage.getItem("Users");
        setData(JSON.parse(collection));
      });
  }, []);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" >
                Settings
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  User's Information
                  
                </Dropdown.Item>
                <Dropdown.Item >Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h3>Add Employee Details</h3>
        <div>
          <label htmlFor="employee">Add employee Name</label>
          <input type="text" id="employee"></input>
        </div>
        <div>
          <label htmlFor="employee1">Node ID</label>
          <input type="text" id="employee1"></input>
        </div>
        <div>
          <label htmlFor="employee2">URL</label>
          <input type="text" id="employee2"></input>
        </div>
        <button onClick={addData}>Submit</button>
      </div>
      <>
        <div>
          {mode === "offline" ? (
            <div class="alert alert-warning" role="alert">
              You are in Offline mode
            </div>
          ) : null}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
             <th>ID</th>
              <th> Name</th>
              <th>Node ID</th>
              <th>URL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
              <td>{item.id}</td>
                <td>{item.login}</td>
                <td>{item.node_id}</td>
                <td>{item.url}</td>
                <td>
                  <button onClick={clear}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};
