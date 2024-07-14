

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OurIm from './OurIm';

const OurImpact = () => {
  const headingStyle = {
    fontFamily:"Inknut Antiqua",
  fontSize: "15px",
  fontWeight:"bold"

  };

  const paragraphStyle = {
    fontFamily: "Inder",
  fontSize: "16px", // Adjust the font size as needed
  textAlign: "justify",
  marginTop: "8px"

  };
  const hostyle = {
    fontFamily:"Inknut Antiqua",
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: '5px',
    marginTop:'15px'
  }

  return (
    <div>
      <Navbar />
      <div
        style={{
          textAlign: "center",
          padding: "0px",
          backgroundColor: "#f7f7f7",
        }}
      >
        <img
          src="/assets/images/Womenn.jpg"
          alt="VolunteerVerse Logo"
          style={{ width: "100%", height: "420px", objectFit: "cover", marginBottom: "20px" }}
        />
        <div style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "85%", textAlign: "left", paddingRight: "60px" }}>
            <h2 style={headingStyle}>Empowering Women</h2>
            <p style={paragraphStyle}>Women have a difficult position in Nepal. They have less access to education and, in addition to caring for their children, often have to do a lot of work. In order to empower these women, the provision of education for these disadvantaged women is very important. We want to teach them more independence through education, support and training.</p>
            <p style={paragraphStyle}>Therefore, in 2017, thanks to a large donation, we have been able to build and open a center for women who are not yet able to read, write or calculate well. We also teach in English. Most women are over 30 years old. Some are going to school for the first time! Here are some examples of how your donation could be used:</p>
            <p style={paragraphStyle}>50 euros will fund:</p>
          </div>
          <div style={{ maxWidth: "70%" }}>
            <img
              src="/images/assets/Womenn.jpeg" // Use the uploaded image path here
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          
          </div>
          
        </div>
        <OurIm/>
      </div>
      <Footer />
    </div>
  );
}

export default OurImpact;
