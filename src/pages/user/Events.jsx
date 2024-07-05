// // import React from 'react';

// // const Event = () => {
// //   return (
// //     <>
// //           <div className="calendar-container">
// //             <div className="calendar-header">
// //               <button className="header-button">Today</button>
// //               <button className="header-button">Back</button>
// //               <button className="header-button">Next</button>
// //               <div className="header-title">May 2024</div>
// //               <div className="header-views">
// //                 <button className="header-button">Months</button>
// //                 <button className="header-button">Week</button>
// //                 <button className="header-button">Day</button>
// //               </div>
// //             </div>
// //             <table className="calendar-table">
// //               <thead>
// //                 <tr>
// //                   <th>Sun</th>
// //                   <th>Mon</th>
// //                   <th>Tue</th>
// //                   <th>Wed</th>
// //                   <th>Thu</th>
// //                   <th>Fri</th>
// //                   <th>Sat</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 <tr>
// //                   <td className="prev-month">31</td>
// //                   <td>01</td>
// //                   <td>02</td>
// //                   <td>03</td>
// //                   <td>04</td>
// //                   <td>05</td>
// //                   <td>06</td>
// //                 </tr>
// //                 <tr>
// //                   <td>07</td>
// //                   <td>08</td>
// //                   <td>09</td>
// //                   <td>10</td>
// //                   <td>11</td>
// //                   <td>12</td>
// //                   <td>13</td>
// //                 </tr>
// //                 <tr>
// //                   <td>14</td>
// //                   <td>15</td>
// //                   <td>16</td>
// //                   <td className="event">
// //                     17<div className="event-label">Blood Donation</div>
// //                   </td>
// //                   <td>18</td>
// //                   <td>19</td>
// //                   <td>20</td>
// //                 </tr>
// //                 <tr>
// //                   <td>21</td>
// //                   <td>22</td>
// //                   <td>23</td>
// //                   <td>24</td>
// //                   <td>25</td>
// //                   <td>26</td>
// //                   <td>27</td>
// //                 </tr>
// //                 <tr>
// //                   <td>28</td>
// //                   <td className="event">
// //                     29<div className="event-label">Bagmati Clean</div>
// //                   </td>
// //                   <td>30</td>
// //                   <td className="next-month">01</td>
// //                   <td className="next-month">02</td>
// //                   <td className="next-month">03</td>
// //                   <td className="next-month">04</td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //           </div>
// //     </>
// //   );
// // };

// // export default Event;


// import React, { useState } from 'react';
// import dayjs from 'dayjs';
// import isToday from 'dayjs/plugin/isToday';
// import weekOfYear from 'dayjs/plugin/weekOfYear';

// dayjs.extend(isToday);
// dayjs.extend(weekOfYear);

// const Event = () => {
//   const [currentDate, setCurrentDate] = useState(dayjs());
//   const [view, setView] = useState('month');

//   const handleToday = () => {
//     setCurrentDate(dayjs());
//   };

//   const handleBack = () => {
//     setCurrentDate((prevDate) =>
//       view === 'month' ? prevDate.subtract(1, 'month') :
//       view === 'week' ? prevDate.subtract(1, 'week') :
//       prevDate.subtract(1, 'day')
//     );
//   };

//   const handleNext = () => {
//     setCurrentDate((prevDate) =>
//       view === 'month' ? prevDate.add(1, 'month') :
//       view === 'week' ? prevDate.add(1, 'week') :
//       prevDate.add(1, 'day')
//     );
//   };

//   const handleViewChange = (newView) => {
//     setView(newView);
//   };

//   const renderCalendar = () => {
//     if (view === 'month') {
//       return renderMonthView();
//     } else if (view === 'week') {
//       return renderWeekView();
//     } else {
//       return renderDayView();
//     }
//   };

//   const renderMonthView = () => {
//     const startOfMonth = currentDate.startOf('month').startOf('week');
//     const endOfMonth = currentDate.endOf('month').endOf('week');
//     const weeks = [];
//     let current = startOfMonth;

//     while (current.isBefore(endOfMonth)) {
//       const days = [];
//       for (let i = 0; i < 7; i++) {
//         days.push(
//           <td key={current.format('DD-MM-YYYY')} className={current.month() !== currentDate.month() ? 'other-month' : ''}>
//             {current.date()}
//           </td>
//         );
//         current = current.add(1, 'day');
//       }
//       weeks.push(<tr key={current.format('WW-YYYY')}>{days}</tr>);
//     }

//     return (
//       <table className="calendar-table">
//         <thead>
//           <tr>
//             <th>Sun</th>
//             <th>Mon</th>
//             <th>Tue</th>
//             <th>Wed</th>
//             <th>Thu</th>
//             <th>Fri</th>
//             <th>Sat</th>
//           </tr>
//         </thead>
//         <tbody>{weeks}</tbody>
//       </table>
//     );
//   };

//   const renderWeekView = () => {
//     const startOfWeek = currentDate.startOf('week');
//     const days = [];

//     for (let i = 0; i < 7; i++) {
//       days.push(
//         <td key={startOfWeek.format('DD-MM-YYYY')}>
//           {startOfWeek.format('dddd, MMM D')}
//         </td>
//       );
//       startOfWeek = startOfWeek.add(1, 'day');
//     }

//     return (
//       <table className="calendar-table">
//         <thead>
//           <tr>
//             <th>Sun</th>
//             <th>Mon</th>
//             <th>Tue</th>
//             <th>Wed</th>
//             <th>Thu</th>
//             <th>Fri</th>
//             <th>Sat</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>{days}</tr>
//         </tbody>
//       </table>
//     );
//   };

//   const renderDayView = () => {
//     return (
//       <div className="calendar-table">
//         {currentDate.format('dddd, MMM D, YYYY')}
//       </div>
//     );
//   };

//   return (
//     <div className="dashboard">
//       <style jsx>{`
//         body {
//           font-family: Arial, sans-serif;
//         }

//         .dashboard {
//           display: flex;
//           height: 100vh;
//         }

//         nav {
//           width: 250px;
//           background-color: #f0f0f0;
//           padding: 20px;
//           box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         nav img.logo {
//           width: 80%;
//           margin-bottom: 20px;
//         }

//         nav ul {
//           list-style: none;
//           padding: 0;
//           width: 100%;
//         }

//         nav ul li {
//           margin: 15px 0;
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
//           background-color: #007bff;
//           color: #fff;
//         }

//         main {
//           flex-grow: 1;
//           padding: 20px;
//           overflow-y: auto;
//         }

//         .calendar-container {
//           padding: 20px;
//         }

//         .calendar-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 20px;
//         }

//         .header-button {
//           padding: 10px 20px;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//           background-color: #f9f9f9;
//           cursor: pointer;
//         }

//         .header-title {
//           font-size: 24px;
//         }

//         .calendar-table {
//           width: 100%;
//           border-collapse: collapse;
//         }

//         .calendar-table th,
//         .calendar-table td {
//           border: 1px solid #ddd;
//           padding: 10px;
//           text-align: center;
//         }

//         .calendar-table .event {
//           background-color: #e0f7fa;
//           position: relative;
//         }

//         .event-label {
//           position: absolute;
//           bottom: 5px;
//           left: 5px;
//           font-size: 12px;
//           background-color: #007bff;
//           color: #fff;
//           padding: 2px 5px;
//           border-radius: 3px;
//         }

//         .prev-month, .next-month {
//           color: #ccc;
//         }
//       `}</style>
//       <nav>
//         <img src="/assets/images/logo.png" alt="VolunteerVerse Logo" className="logo" />
//         <ul>
//           <li>
//             <a href="user/dashboard">Dashboard</a>
//           </li>
//           <li className="active">
//             <a href="#">Events</a>
//           </li>
//           <li>
//             <a href="#">Notification</a>
//           </li>
//           <li>
//             <a href="#">Chat</a>
//           </li>
//           <li>
//             <a href="#">Performance</a>
//           </li>
//           <li>
//             <a href="#">Profile</a>
//           </li>
//         </ul>
//       </nav>
//       <main>
//         <div className="calendar-container">
//           <div className="calendar-header">
//             <button className="header-button" onClick={handleToday}>Today</button>
//             <button className="header-button" onClick={handleBack}>Back</button>
//             <button className="header-button" onClick={handleNext}>Next</button>
//             <div className="header-title">{currentDate.format('MMMM YYYY')}</div>
//             <div className="header-views">
//               <button className="header-button" onClick={() => handleViewChange('month')}>Month</button>
//               <button className="header-button" onClick={() => handleViewChange('week')}>Week</button>
//               <button className="header-button" onClick={() => handleViewChange('day')}>Day</button>
//             </div>
//           </div>
//           {renderCalendar()}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Event;


import moment from "moment";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventModal from "./EventModal";

const localizer = momentLocalizer(moment);

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };

  const goToToday = () => {
    toolbar.onNavigate("TODAY");
  };

  const setView = (view) => {
    toolbar.onView(view);
  };

  return (
    <div className="rbc-toolbar">
      <div className="rbc-btn-group">
        <button onClick={goToBack}>Back</button>
        <button onClick={goToToday}>Today</button>
        <button onClick={goToNext}>Next</button>
      </div>
      <span className="rbc-toolbar-label">{toolbar.label}</span>
      <div className="rbc-btn-group">
        <button onClick={() => setView("month")}>Month</button>
        <button onClick={() => setView("week")}>Week</button>
        <button onClick={() => setView("day")}>Day</button>
      </div>
    </div>
  );
};

const CustomHeader = ({ label }) => {
  return <div className="custom-header">{label}</div>;
};

const Event = () => {
  const [events] = useState([
    {
      start: new Date("2024-07-10"),
      end: new Date("2024-07-10"),
      title: "Event 1",
    },
    {
      start: new Date("2024-07-15"),
      end: new Date("2024-07-15"),
      title: "Event 2",
    },
    {
      start: new Date("2024-07-20"),
      end: new Date("2024-07-20"),
      title: "Event 3",
    },
  ]);

  const [view, setView] = useState("month");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSelectEvent = () => {
    openModal();
  };

  return (
    <div className="dashboard">
      <style jsx>{`
        body {
          font-family: "Roboto", sans-serif;
          background-color: #f0f2f5;
        }

        .dashboard {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        nav {
          width: 250px;
          background-color: #fff;
          padding: 20px;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        nav img.logo {
          width: 80%;
          margin-bottom: 20px;
        }

        nav ul {
          list-style: none;
          padding: 0;
          width: 100%;
        }

        nav ul li {
          margin: 15px 0;
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
          background-color: #007bff;
          color: #fff;
        }

        main {
          flex-grow: 1;
          padding: 20px;
          overflow: hidden;
        }

        .calendar-container {
          padding: 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          height: calc(100vh - 40px); /* Full height minus padding */
          display: flex;
          flex-direction: column;
        }

        .rbc-calendar {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .rbc-toolbar {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .rbc-toolbar button {
          background-color: #007bff;
          border: none;
          color: white;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
        }

        .rbc-toolbar button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }

        .rbc-toolbar .rbc-toolbar-label {
          font-weight: bold;
        }

        .rbc-toolbar .rbc-btn-group {
          display: flex;
          gap: 10px;
        }

        .rbc-event {
          background-color: #ff7f50;
          border: none;
          border-radius: 3px;
          padding: 2px 5px;
          color: #fff;
          font-size: 12px;
        }

        .rbc-month-view,
        .rbc-time-view,
        .rbc-agenda-view {
          flex-grow: 1;
        }

        .custom-header {
          font-weight: bold;
          font-size: 14px;
          color: #007bff;
          text-align: center;
          margin: 5px 0;
        }
      `}</style>
      <nav>
        <img
          src="/assets/images/logo.png"
          alt="VolunteerVerse Logo"
          className="logo"
        />
        <ul>
          <li>
            <a href="user/dashboard">Dashboard</a>
          </li>
          <li className="active">
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Notification</a>
          </li>
          <li>
            <a href="#">Chat</a>
          </li>
          <li>
            <a href="#">Performance</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="calendar-container">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView={view}
            views={["month", "week", "day"]}
            onView={(newView) => setView(newView)}
            onSelectEvent={handleSelectEvent}
            components={{
              toolbar: CustomToolbar,
              day: { header: CustomHeader },
              week: { header: CustomHeader },
              month: { header: CustomHeader },
            }}
            style={{ height: "100%" }}
          />
        </div>
        <EventModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </main>
    </div>
  );
};

export default Event;