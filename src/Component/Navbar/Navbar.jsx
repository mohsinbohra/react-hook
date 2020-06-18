import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <NavLink exact activeClassName="active_class" to="/">Home </NavLink>
      <NavLink exact activeClassName="active_class" to="/about">About Us </NavLink>
      <NavLink activeClassName="active_class" to="/about/name">About/Name</NavLink>
      <NavLink activeClassName="active_class" to="/shop">Shop Now </NavLink>
      <NavLink activeClassName="active_class" to="/poca">POCA </NavLink>
      <NavLink activeClassName="active_class" to="/counter">Counter </NavLink>
      <NavLink activeClassName="active_class" to="/coma">ComA</NavLink>
      
    </div>
  );
};

export default Navbar;
