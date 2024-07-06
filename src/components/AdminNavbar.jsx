

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



// const AdminNavbar = () => {
//   const navigate = useNavigate();

//   return (
//     <NavbarContainer>
//       <img
//         src="/assets/images/Logo.png"
//         alt="VolunteerVerse Logo"
//         style={{ height: "70px" }}
//       />
//       <NavLinks>
        
//         <NavLink to="/admin/dashboard" activeClassName="active" className="text-font">
// Donation        </NavLink>
//         <NavLink to="/admin/event" activeClassName="active" className="text-font">
//           Event
//         </NavLink>
//         <NavLink to="/admin/notification" activeClassName="active" className="text-font">
//           Notification
//         </NavLink>
//       </NavLinks>
 
//     </NavbarContainer>
//   );
// };

// export default AdminNavbar;




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

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <img
        src="/assets/images/Logo.png"
        alt="VolunteerVerse Logo"
        style={{ height: "70px" }}
      />
      <NavLinks>
        <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? "active text-font" : "text-font")}>
          Donation
        </NavLink>
        <NavLink to="/admin/event" className={({ isActive }) => (isActive ? "active text-font" : "text-font")}>
          Event
        </NavLink>
        <NavLink to="/admin/notification" className={({ isActive }) => (isActive ? "active text-font" : "text-font")}>
          Notification
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default AdminNavbar;
