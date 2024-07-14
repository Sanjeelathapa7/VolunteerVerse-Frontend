


// import React from 'react';

// function Performance() {
//   return (
//     <div>
//       <style>
//         {`

//         nav {
//           width: 260px;
//           height: 100vh;
//           background-color: #ffffff;
//           padding: 23px;
//           box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           border: 1px solid rgba(0, 0, 0.1, 0.2);
//         }

//         nav img.logo {
//           width: 95%;
//           margin-bottom: 0px;
//         }

//         nav ul {
//           list-style: none;
//           padding: 0;
//           width: 100%;
//         }

//         nav ul li {
//           margin: 10px 0;
//         }

//         nav ul li a {
//           text-decoration: none;
//           color: #333;
//           display: block;
//           padding: 10px 20px;
//           border-radius: 5px;
//           transition: background-color 0.3s;
//         }

//         nav ul li a:hover,
//         nav ul li.active a {
//           background-color: rgba(26, 76, 110, 0.21);
//           color: #333;
//         }

//         .container {
//           width: 50%;
//           margin: auto;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .chart-container {
//           width: 100%;
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-end;
//         }

//         .bar {
//           width: 30px;
//           background-color: #6aa6e2;
//           margin: 0 5px;
//           position: relative;
//         }

//         .bar span {
//           position: absolute;
//           bottom: 100%;
//           left: 50%;
//           transform: translateX(-50%);
//           text-align: center;
//           font-size: 12px;
//           margin-bottom: 5px;
//         }

//         .sectors-container {
//           display: flex;
//           justify-content: space-around;
//           width: 100%;
//           margin-top: 20px;
//         }

//         .sector {
//           text-align: center;
//         }

//         .sector .circle {
//           width: 100px;
//           height: 100px;
//           border-radius: 50%;
//           background: conic-gradient(#a7e5a7 0% 80%, #e5e5e5 80%);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           margin: auto;
//         }

//         .sector .circle span {
//           font-size: 24px;
//           font-weight: bold;
//         }
//         `}
//       </style>
      
//       <nav>
//         <img src="/assets/images/logo.png" alt="VolunteerVerse Logo" className="logo" />
//         <ul>
//           <li className="active">
//             <a href="#">Dashboard</a>
//           </li>
//           <li>
//             <a href="/event">Calendar</a>
//           </li>
//           <li>
//             <a href="/eventDetails">Events</a>
//           </li>
//           <li>
//             <a href="/chat">Chat</a>
//           </li>
//           <li>
//             <a href="/performance">Performance</a>
//           </li>
//           <li>
//             <a href="/profile">Profile</a>
//           </li>
//         </ul>
//       </nav>

//       <div className="container">
//         <h2>Working Hours</h2>
//         <div className="chart-container" style={{paddingTop:'50px'}}>
//           <div className="bar" style={{ height: '100px' }}><span>4 hours</span></div>
          
//         </div>

//         <h2>Sectors that I have been involved</h2>
//         <div className="sectors-container">
//           <div className="sector">
//             <div className="circle">
//               <span>1%</span>
//             </div>
//             <p>Bagmati Clean</p>
//           </div>
//           <div className="sector">
//             <div className="circle" style={{ background: 'conic-gradient(#a7e5a7 0% 68%, #e5e5e5 68%)' }}>
//               <span>0%</span>
//             </div>
//             <p>Blood Donation</p>
//           </div>
//           <div className="sector">
//             <div className="circle" style={{ background: 'conic-gradient(#a7e5a7 0% 89%, #e5e5e5 89%)' }}>
//               <span>1%</span>
//             </div>
//             <p>Shelter Build up Donation</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Performance;


import React from 'react';

function Performance() {
  return (
    <div>
      <style>
        {`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }

        .main-container {
          display: flex;
        }

        nav {
          width: 260px;
          height: 100vh;
          background-color: #ffffff;
          padding: 23px;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(0, 0, 0.1, 0.2);
        }

        nav img.logo {
          width: 95%;
          margin-bottom: 0px;
        }

        nav ul {
          list-style: none;
          padding: 0;
          width: 100%;
        }

        nav ul li {
          margin: 10px 0;
        }

        nav ul li a {
          text-decoration: none;
          color: #333;
          display: block;
          padding: 10px 20px;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        nav ul li a:hover,
        nav ul li.active a {
          background-color: rgba(26, 76, 110, 0.21);
          color: #333;
        }

        .container {
          width: 100%;
          margin: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .chart-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .bar {
          width: 40px;
          background-color: #6aa6e2;
          margin: 0 40px;
          position: relative;
        }

        .bar span {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          font-size: 12px;
          margin-bottom: 6px;
        }

        .sectors-container {
          display: flex;
          justify-content: space-around;
          width: 100%;
          margin-top: 0px;
        }

        .sector {
          text-align: center;
        }

        .sector .circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: conic-gradient(#a7e5a7 0% 80%, #e5e5e5 80%);
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
        }

        .sector .circle span {
          font-size: 24px;
          font-weight: bold;
        }
        `}
      </style>
      
      <div className="main-container">
        <nav>
          <img src="/assets/images/logo.png" alt="VolunteerVerse Logo" className="logo" />
          <ul>
            <li>
              <a href="/user/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/event">Calendar</a>
            </li>
            <li>
              <a href="/eventDetails">Events</a>
            </li>
            <li>
              <a href="/chat">Chat</a>
            </li>
            <li  className="active">
              <a href="/performance">Performance</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </nav>

        <div className="container">
          <h2>Working Hours</h2>
          <div className="chart-container" style={{paddingTop:'50px'}}>
            <div className="bar" style={{ height: '120px' }}><span>4 hours</span></div>
          </div>


          <h2 style={{margin:"60px"}}>Sectors that I have been involved</h2>

          <div className="sectors-container">
            
            <div className="sector">
              <div className="circle">
                <span>0%</span>
              </div>
              <p>Bagmati Clean</p>
            </div>
            <div className="sector">
              <div className="circle" style={{ background: 'conic-gradient(#a7e5a7 0% 68%, #e5e5e5 68%)' }}>
                <span>0%</span>
              </div>
              <p>Blood Donation</p>
            </div>
            <div className="sector">
              <div className="circle" style={{ background: 'conic-gradient(#a7e5a7 0% 89%, #e5e5e5 89%)' }}>
                <span>0%</span>
              </div>
              <p>Shelter Build up Donation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
