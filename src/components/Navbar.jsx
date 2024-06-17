// src/components/Navbar.jsx
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
  border-bottom: 1px solid #ccc;
`;

const Logo = styled.img`
  max-width: 100px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

const NavLink = styled.li`
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4869a3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #365083;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <img src="/assets/images/Logo.png" alt="VolunteerVerse Logo" style={{ height: '90px'  }} />
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>What we do</NavLink>
        <NavLink>Our Impact</NavLink>
        <NavLink>Donate</NavLink>
      </NavLinks>
      <ButtonContainer>
        <Button>Register</Button>
        <Button>Login</Button>
      </ButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
