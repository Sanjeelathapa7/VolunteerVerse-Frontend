// import React from 'react';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

// const Homepage = () => {
//   return (
//     <div style={{ width: '100%', position: 'relative' }}>
//       <Navbar />
      
//       <div style={{ textAlign: 'center', padding: '0px 0px' }}>
//       <img
//           src="/assets/images/Home.png"
//           alt="VolunteerVerse Logo"
//           style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
//         />
//         <h1>Welcome to VolunteerVerse</h1>
//         <p>VolunteerVerse is a dedicated platform connecting volunteers with opportunities to make a difference in
//           their communities and beyond. Whether you're passionate about environmental conservation, social justice,
//           education, or humanitarian aid, VolunteerVerse provides a hub where you can find meaningful ways to
//           contribute your time and skills.</p>
        
//       </div>
      
//       <Footer />
//     </div>
//   );
// };

// export default Homepage;


import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Homepage = () => {
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <Navbar />

      <div style={{ textAlign: 'center', padding: '0px' }}>
        <img
          src="/assets/images/Home.png"
          alt="VolunteerVerse Logo"
          style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
        />
        <h1>Welcome to VolunteerVerse</h1>
        <p>VolunteerVerse is a dedicated platform connecting volunteers with opportunities to make a difference in
          their communities and beyond. Whether you're passionate about environmental conservation, social justice,
          education, or humanitarian aid, VolunteerVerse provides a hub where you can find meaningful ways to
          contribute your time and skills.</p>
      </div>

      
       <div style={{ display: 'flex', alignItems: 'start', margin: '30px 20px' }}>
        <div style={{ width: '40%' }}>
          <img
            src="/assets/images/Home1.jpg" // Replace with your actual image path
            alt="Volunteer in Nepal"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div style={{ width: '50%', padding: '0 30px' }}>
          <div style={{ marginTop: '0px'}}> 
            <h2>Volunteer in Nepal</h2>
            <p>VolunteerVerse aims to foster a connected community of individuals and organizations dedicated to making a positive impact through volunteerism. By providing a comprehensive platform, VolunteerVerse ensures that volunteers can easily find opportunities that match their interests and skills, while organizations can efficiently recruit and manage volunteers for their projects.</p>
          </div>
        </div>
        
        
        <div style={{ width: '60%', padding: '0 30px' }}>
          
          <h2>Internship in Nepal</h2>
          <p>Internship in Nepal offers valuable opportunities for individuals to gain practical experience in meaningful projects while immersing themselves in a rich cultural setting. Whether you are a student, recent graduate, or professional looking to expand your skills, an internship in Nepal can provide you with unique experiences that are both professionally and personally rewarding.</p>
        </div>
        <div style={{ width: '40%' }}>
          <img
            src="/assets/images/Intern.jpg" // Replace with your actual image path
            alt="Internship in Nepal"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>


      
        


      </div>




      <Footer />
    </div>
  );
};

export default Homepage;
