


// import React, { useState, useEffect } from "react";
// import {
//   createEventApi,
//   getAllEventsApi,
//   deleteEventApi,
// } from "../../apis/Apis";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import AdminNavbar from "../../components/AdminNavbar";
// const AdminEvent = () => {
//   // Make useState
//   const [eventName, setEventName] = useState("");
//   const [organizer, setOrganizer] = useState("");
//   const [volunteer, setVolunteer] = useState("");
//   const [location, setLocation] = useState("");
//   const [eventTime, setEventTime] = useState("");
//   const [eventDetails, setEventDetails] = useState("");

//   // make useState for image
//   const [eventImage, setEventImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);

//   // image upload function
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     console.log(file);
//     setEventImage(file);
//     setPreviewImage(URL.createObjectURL(file));
//   };

//   // Load all events when page loads
//   const [events, setEvents] = useState([]);
//   useEffect(() => {
//     getAllEventsApi()
//       .then((res) => {
//         if (res.data && res.data.donations) {
//           setEvents(res.data.donations);
//         } else {
//           setEvents([]);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Failed to fetch donations");
//       });
//   }, []);

//   // submit function
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("eventName", eventName);
//     formData.append("organizer", organizer);
//     formData.append("volunteer", volunteer);
//     formData.append("location", location);
//     formData.append("eventTime", eventTime);
//     formData.append("eventDetails", eventDetails);
//     formData.append("eventImage", eventImage);

//     // send request to backend API
//     createEventApi(formData)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//           window.location.reload();
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Internal Server Error!");
//       });
//   };

//   //delete event function
//   const handleDelete = (id) => {
//     //confirm dialog box
//     const confirm = window.confirm(
//       "Are you sure you want to delete this event?"
//     );
//     if (!confirm) {
//       return;
//     } else {
//       deleteEventApi(id).then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//           window.location.reload();
//         }
//       });
//     }
//   };

//   return (
//     <>
//       <AdminNavbar /> {/* Opening AdminNavbar component */}
      
//       <div className="m-5">
//         <div className="d-flex justify-content-between mb-2">
            
//           <h1>Admin Dashboard</h1>
//           <button
//             type="button"
//             className="btn btn"
//             style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}
//             data-bs-toggle="modal"
//             data-bs-target="#exampleModal"
//           >
//             Add Event
//           </button>
//         </div>

//         <div
//           className="modal fade"
//           id="exampleModal"
//           tabIndex="-1"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div
//                 className="modal-header"
//                 style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}
//               >
//                 <h1 className="modal-title fs-5" id="exampleModalLabel">
//                   Create a new event!
//                 </h1>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleSubmit}>
//                   <label>Event Name</label>
//                   <input
//                     onChange={(e) => setEventName(e.target.value)}
//                     className="form-control mb-2"
//                     type="text"
//                     placeholder="Enter event name"
//                   />
//                   <label>Organizer</label>
//                   <input
//                     onChange={(e) => setOrganizer(e.target.value)}
//                     className="form-control mb-2"
//                     type="text"
//                     placeholder="Enter organizer name"
//                   />
//                   <label>Volunteer</label>
//                   <input
//                     onChange={(e) => setVolunteer(e.target.value)}
//                     className="form-control mb-2"
//                     type="number"
//                     placeholder="Enter volunteer"
//                                   />
//                                   <label>Location</label>
//                   <input
//                     onChange={(e) => setLocation(e.target.value)}
//                     className="form-control mb-2"
//                     type="text"
//                     placeholder="Enter Location"
//                   />
//                   <label>Event Time</label>
//                   <input
//                     onChange={(e) => setEventTime(e.target.value)}
//                     className="form-control mb-2"
//                     type="datetime-local"
//                   />
                
//                   <label>Event Details</label>
//                   <input
//                     onChange={(e) => setEventDetails(e.target.value)}
//                     className="form-control mb-2"
//                     type="text"
//                     placeholder="Enter event details"
//                   />
//                   <label>Event Image</label>
//                   <input
//                     onChange={handleImageUpload}
//                     type="file"
//                     className="form-control"
//                   />

//                   {/* Preview Image */}
//                   {previewImage && (
//                     <img
//                       src={previewImage}
//                       className="img-fluid rounded object-cover mt-2"
//                       height={100}
//                       width={100}
//                       alt="Preview"
//                     />
//                   )}
//                   <button type="submit" className="btn btn-primary">
//                     Save Event
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <table className="table table-bordered mt-2">
//         <thead className="table-dark">
//           <tr>
//             <th>Event Image</th>
//             <th>Event Name</th>
//             <th>Organizer</th>
//             <th>Volunteer</th>
//             <th>Location</th>
//             <th>Time</th>
//             <th>Event Details</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map((item) => (
//             <tr key={item._id}>
//               <td>
//                 <img
//                   src={item.eventImageUrl}
//                   height={100}
//                   width={100}
//                   alt={item.eventName}
//                 />
//               </td>
//               <td>{item.eventName}</td>
//               <td>{item.organizer}</td>
//               <td>{item.volunteer}</td>
//               <td>{item.location}</td>
//               <td>{item.time}</td>
//               <td>{item.eventDetails.slice(0, 20)}</td>
//               <td>
//                 <div
//                   className="btn-group"
//                   role="group"
//                   aria-label="Basic example"
//                 >
//                   <Link
//                     to={`/admin/edit/event/${item._id}`}
//                     type="button"
//                     className="btn btn-outline-primary"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={() => handleDelete(item._id)}
//                     type="button"
//                     className="btn btn"
//                     style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default AdminEvent;


import React, { useState, useEffect } from "react";
import { createEventApi, getAllEventsApi, deleteEventApi } from "../../apis/Apis";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar"; 

const AdminEvent = () => {
  const [eventName, setEventName] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [volunteer, setVolunteer] = useState("");
  const [location, setLocation] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [events, setEvents] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setEventImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const fetchEvents = async () => {
    try {
      const res = await getAllEventsApi();
      if (res.data && res.data.events) {
        setEvents(res.data.events);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error('Failed to fetch events:', error);
      toast.error("Failed to fetch events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("eventName", eventName);
    formData.append("organizer", organizer);
    formData.append("volunteer", volunteer);
    formData.append("location", location);
    formData.append("eventTime", eventTime);
    formData.append("eventDetails", eventDetails);
    formData.append("eventImage", eventImage);

    try {
      const res = await createEventApi(formData);
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        fetchEvents(); // Fetch events again after adding a new event
        setEventName("");
        setOrganizer("");
        setVolunteer("");
        setLocation("");
        setEventTime("");
        setEventDetails("");
        setEventImage(null);
        setPreviewImage(null);
      }
    } catch (error) {
      console.error('Failed to create event:', error);
      toast.error("Internal Server Error!");
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this event?");
    if (!confirm) return;

    try {
      const res = await deleteEventApi(id);
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        fetchEvents(); // Fetch events again after deleting an event
      }
    } catch (error) {
      console.error('Failed to delete event:', error);
      toast.error("Internal Server Error!");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="m-5">
        <div className="d-flex justify-content-between mb-2">
          <h1>Admin Dashboard</h1>
          <button
            type="button"
            className="btn btn"
            style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Event
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}>
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Create a new event!
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <label>Event Name</label>
                  <input
                    onChange={(e) => setEventName(e.target.value)}
                    value={eventName}
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter event name"
                  />
                  <label>Organizer</label>
                  <input
                    onChange={(e) => setOrganizer(e.target.value)}
                    value={organizer}
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter organizer name"
                  />
                  <label>Volunteer</label>
                  <input
                    onChange={(e) => setVolunteer(e.target.value)}
                    value={volunteer}
                    className="form-control mb-2"
                    type="number"
                    placeholder="Enter volunteer"
                  />
                  <label>Location</label>
                  <input
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter Location"
                  />
                  <label>Event Time</label>
                  <input
                    onChange={(e) => setEventTime(e.target.value)}
                    value={eventTime}
                    className="form-control mb-2"
                    type="datetime-local"
                  />
                  <label>Event Details</label>
                  <input
                    onChange={(e) => setEventDetails(e.target.value)}
                    value={eventDetails}
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter event details"
                  />
                  <label>Event Image</label>
                  <input
                    onChange={handleImageUpload}
                    type="file"
                    className="form-control"
                  />
                  {previewImage && (
                    <img
                      src={previewImage}
                      className="img-fluid rounded object-cover mt-2"
                      height={100}
                      width={100}
                      alt="Preview"
                    />
                  )}
                  <button type="submit" className="btn btn-primary">
                    Save Event
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <table className="table table-bordered mt-2">
          <thead className="table-dark">
            <tr>
              <th>Event Image</th>
              <th>Event Name</th>
              <th>Organizer</th>
              <th>Volunteer</th>
              <th>Location</th>
              <th>Time</th>
              <th>Event Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={item.eventImageUrl}
                    height={100}
                    width={100}
                    alt={item.eventName}
                  />
                </td>
                <td>{item.eventName}</td>
                <td>{item.organizer}</td>
                <td>{item.volunteer}</td>
                <td>{item.location}</td>
                <td>{item.eventTime}</td>
                <td>{item.eventDetails.slice(0, 20)}</td>
                <td>
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <Link
                      to={`/admin/edit/event/${item._id}`}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      type="button"
                      className="btn btn"
                      style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminEvent;
