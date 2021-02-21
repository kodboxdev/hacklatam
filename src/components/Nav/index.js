import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Dropdown,
  ButtonGroup,
  DropdownButton
} from "react-bootstrap";

import { Link, Router, Switch, Route } from "react-router-dom";

import "./style.css";

import logo from "../../icons/kdbxcohete.png";
import menu from "../../icons/menu.png";
import campana from "../../icons/campana.png";
import corona from "../../icons/corona.png";
import user1 from "../../icons/user1.jpg";

const Menubar = () => {
  return (
    <>
      <Navbar className="nav-bar-d" variant="dark">
      <Link to="/">
        <img src={logo} alt="logo" className="icono" />
        </Link>

        <input placeholder="Buscar" className="barra-busqueda" type="text" />

        <Navbar.Collapse className="navUser justify-content-end ">
          <img src={campana} alt="logo" className=" icono-pequeño" />
          <img src={user1} alt="logo" className="icono-pequeño-user" />
          <div className="puntaje">
            <img src={corona} alt="logo" className="" />
            <p>126 pt</p>
          </div>
          <img src={menu} alt="logo" className=" icono-menu " />
          
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menubar;
