// import React from 'react'
// import Navbar from '../../components/Navbar'
// import Footer from '../../components/Footer'

// const OurImpact = () => {
//   return (
//       <div>
//            <div style={{ width: "100%", position: "relative", }}></div>
//           <Navbar />
//           <div
//         style={{
//           textAlign: "center",
//           padding: "0px",
//           backgroundColor: "#f7f7f7",
//         }}
//       >
//         <img
//           src="/assets/images/Womenn.jpg"
//           alt="VolunteerVerse Logo"
//           style={{ width: "100%", height: "420px", marginBottom: "20px" }}
//               />
              











//           <Footer/>
//           </div>
//           </div>
//   )
// }

// export default OurImpact



import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const OurImpact = () => {
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
            <h2>Empowering Women</h2>
            <p>Women have a difficult position in Nepal. They have less access to education and, in addition to caring for their children, often have to do a lot of work. In order to empower these women, the provision of education for these disadvantaged women is very important. We want to teach them more independence through education, support and training.</p>
            <p>Therefore, in 2017, thanks to a large donation, we have been able to build and open a center for women who are not yet able to read, write or calculate well. We also teach in English. Most women are over 30 years old. Some are going to school for the first time! Here are some examples of how your donation could be used:</p>
            <p>50 euros will fund:</p>
          </div>
          <div style={{ maxWidth: "70%" }}>
            <img
              src="/images/assets/Womenn.jpeg" // Use the uploaded image path here
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </div>
        </div>
        <div style={{ padding: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", padding: "10px", textAlign: "left", backgroundColor: "#f9f9f9" }}>Donation</th>
                <th style={{ borderBottom: "1px solid #ccc", padding: "10px", textAlign: "left", backgroundColor: "#f9f9f9" }}>Purposes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>€ 50</td>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>To buy books for a woman in the VSN’s literacy programs, or a woman in the VSN literacy classes</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>€ 100</td>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>To buy a sewing machine for the VSN’s training programs, or for a woman starting her own business</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>€ 150</td>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>To pay rent for the women center for a month.</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>€ 150</td>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>To hire a teacher who teaches 30 underprivileged women for a month</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>€ 250</td>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>To pay for a woman to take part in a 6 month tailoring training course</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>€ 250</td>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>To pay for a woman to take part in a 6 month weaving training course</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>€ 250</td>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>To buy a computer to run computer classes for the women</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>More than € 1000</td>
                <td style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>To set up a nice library for the women</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurImpact;
