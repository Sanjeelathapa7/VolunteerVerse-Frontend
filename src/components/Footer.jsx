// import React from "react";
// import styled from "styled-components";

// const FooterContainer = styled.footer`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   padding: 20px;
//   background-color: #617CB5;
//   color: white;
//   font-family: Arial, sans-serif;
// `;

// const FooterSection = styled.div`
//   flex: 1;
//   padding: 10px;
// `;

// const Logo = styled.img`
//   max-width: 90px;
//   margin-bottom: 10px;
// `;

// const Quote = styled.p`
//   margin: 10px 0;
// `;

// const Title = styled.h3`
//   margin-bottom: 10px;
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// const SocialIcon = styled.img`
//   width: 30px;
//   height: 30px;
// `;

// const ContactButton = styled.a`
//   display: inline-block;
//   margin-top: 10px;
//   padding: 10px;
//   background-color: #333;
//   color: white;
//   text-decoration: none;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #555;
//   }
// `;

// const Copyright = styled.p`
//   margin-top: 20px;
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterSection>
//         <Logo
//           src="/assets/images/Logoo2.png"
//           alt="VolunteerVerse Logo"
//         />
//         <Quote>
//           Volunteering is at the very core of being a human. No one has made it
//           through life without someone else's help.
//         </Quote>
//         <Copyright>
//           Copyright © 2024 VolunteerVerse. All rights reserved.
//         </Copyright>
//       </FooterSection>
//       <FooterSection id="contact-info">
//         <Title>Contact Info</Title>
//         <p>VolunteerVerse</p>
//         <p>Tel: 01488930</p>
//         <p>Mobile: +9779866281020</p>
//         <p>Post Box: 22934 Kathmandu, Nepal.</p>
//       </FooterSection>
//       <FooterSection>
//         <Title>Follow us</Title>
//         <SocialIcons>
//           <a
//             href="https://www.facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <SocialIcon
//               src="/assets/images/facebook.png"
//               alt="Facebook"
//               style={{ height: "50px" }}
//             />
//           </a>
//           <a
//             href="https://www.instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <SocialIcon src="/assets/images/Ig.webp" alt="Instagram" />
//           </a>
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <SocialIcon src="/assets/images/Linkedin.webp" alt="LinkedIn" />
//           </a>
//         </SocialIcons>
//         <ContactButton href="/contactus">Contact Info</ContactButton>
//       </FooterSection>
//     </FooterContainer>
//   );
// };

// export default Footer;

import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  background-color: #617cb5;
  color: white;
  font-family: Arial, sans-serif;
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 20px;

  &#contact-info {
    margin-left: 80px;
    margin-top: 30px;
  }

  &#follow-us {
    margin-top: 30px;
        margin-left: 90px;

  }
`;

const Logo = styled.img`
  max-width: 100px;
  margin-bottom: 10px;
`;

const Quote = styled.p`
  margin: 10px 0;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const ContactButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
  margin-top:20px

  &:hover {
    background-color: #555;
  }
`;

const Copyright = styled.p`
  margin-top: 30px;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Logo src="/assets/images/Logoo2.png" alt="VolunteerVerse Logo" />
        <Quote>
          Volunteering is at the very core of being a human. No one has made it
          through life without someone else's help.
        </Quote>
        <Copyright>
          Copyright © 2024 VolunteerVerse. All rights reserved.
        </Copyright>
      </FooterSection>
      <FooterSection id="contact-info">
        <Title>Contact Info</Title>
        <p>VolunteerVerse</p>
        <p>Tel: 01488930</p>
        <p>Mobile: +9779866281020</p>
        <p>Post Box: 22934 Kathmandu, Nepal.</p>
      </FooterSection>
      <FooterSection id="follow-us">
        <Title>Follow us</Title>
        <SocialIcons>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon
              src="/assets/images/face.png"
              alt="Facebook"
              
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src="/assets/images/Ig.webp" alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src="/assets/images/Linkedin.webp" alt="LinkedIn" />
          </a>
        </SocialIcons>
        <ContactButton href="/contactus">Contact Info</ContactButton>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
