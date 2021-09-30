import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red",
        padding:'10px',
        textDecoration: 'none'
      }
    return (
        <div>
            <Navbar className="justify-content-md-center" bg="dark"  variant="light">
           <NavLink to="/home" style={{textDecoration:'none',padding:'15px',fontSize:'20px'}} activeStyle={activeStyle} > Home</NavLink>
            <NavLink to="/offer" style={{textDecoration:'none',padding:'15px',fontSize:'20px'}} activeStyle={activeStyle}> Offer</NavLink>
            <NavLink to="/cart" style={{textDecoration:'none',padding:'15px',fontSize:'20px'}} activeStyle={activeStyle} > Cart</NavLink>
            <NavLink to="/about" style={{textDecoration:'none',padding:'15px',fontSize:'20px'}} activeStyle={activeStyle} > About</NavLink>
          </Navbar >
            
        </div>
    );
};

export default Header;