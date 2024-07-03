

// import React from "react";
// import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const NavbarContainer = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px 20px;
//   background-color: white;
//   border-bottom: 1px solid #eee;
//   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
// `;

// const Logo = styled.img`
//   max-width: 100px;
// `;

// const NavLinks = styled.ul`
//   display: flex;
//   list-style: none;
//   gap: 20px;
// `;

// const NavLink = styled(RouterNavLink)`
//   font-size: 16px;
//   cursor: pointer;
//   padding: 5px 10px;
//   text-decoration: none;
//   color: black;

//   &.active {
//     border-bottom: 2px solid blue;
//     color: blue;
//   }

//   &:hover {
//     color: blue;
//   }
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #4869a3;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #365083;
//   }
// `;



// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <NavbarContainer>
//       <img
//         src="/assets/images/Logo.png"
//         alt="VolunteerVerse Logo"
//         style={{ height: "70px" }}
//       />
//       <NavLinks>
//         <NavLink to="/home" activeClassName="active" className="text-font">
//           Home
//         </NavLink>
//         <NavLink to="/whatwedo" activeClassName="active" className="text-font">
//           What we do
//         </NavLink>
//         <NavLink to="/ourimpact" activeClassName="active" className="text-font">
//           Our Impact
//         </NavLink>
//         <NavLink to="/register" activeClassName="active" className="text-font">
//           Donate
//         </NavLink>
//       </NavLinks>
//       <ButtonContainer>
//         <Button onClick={() => navigate("/register")}>Register</Button>
//         <Button onClick={() => navigate("/login")}>Login</Button>
//       </ButtonContainer>
//     </NavbarContainer>
//   );
// };

// export default Navbar;


import React from "react";
import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  max-width: 100px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

const NavLink = styled(RouterNavLink)`
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  text-decoration: none;
  color: black;

  &.active {
    border-bottom: 2px solid blue;
    color: blue;
  }

  &:hover {
    color: blue;
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
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <NavbarContainer>
      <img
        src="/assets/images/Logo.png"
        alt="VolunteerVerse Logo"
        style={{ height: "70px" }}
      />
      <NavLinks>
        <NavLink to="/home" activeClassName="active" className="text-font">
          Home
        </NavLink>
        {user && user.isAdmin ? (
          <>
            <NavLink
              to="/admin/donation"
              activeClassName="active"
              className="text-font"
            >
              Donation
            </NavLink>
            <NavLink
              to="/admin/event"
              activeClassName="active"
              className="text-font"
            >
              Event
            </NavLink>
            <NavLink
              to="/admin/blogs"
              activeClassName="active"
              className="text-font"
            >
              Blogs
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/user/colleges"
              activeClassName="active"
              className="text-font"
            >
              Colleges
            </NavLink>
            <NavLink
              to="/user/courses"
              activeClassName="active"
              className="text-font"
            >
              Courses
            </NavLink>
            <NavLink
              to="/user/blogs"
              activeClassName="active"
              className="text-font"
            >
              Blogs
            </NavLink>
          </>
        )}
        <NavLink to="/whatwedo" activeClassName="active" className="text-font">
          What we do
        </NavLink>
        <NavLink to="/ourimpact" activeClassName="active" className="text-font">
          Our Impact
        </NavLink>
        <NavLink to="/register" activeClassName="active" className="text-font">
          Donate
        </NavLink>
      </NavLinks>
      {user ? (
        <ButtonContainer>
          <Button onClick={handleLogout}>Logout</Button>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Button onClick={() => navigate("/register")}>Register</Button>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </ButtonContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
