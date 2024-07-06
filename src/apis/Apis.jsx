import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

//configuration for axios

const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};






  
//register 
export const registerApi = (data) => Api.post("/api/user/register", data)


//login
export const loginApi = (data) => Api.post("/api/user/login", data)

//forget pass
export const sendEmailApi = (data) => Api.post("/api/user/resetpassword", data);
export const verifyCodeApi = (data) => Api.post("/api/user/resetcode", data, config);
export const updatePasswordApi = (data) => Api.post("/api/user/updatepassword", data);


//create donation

export const createDonationApi = (formData) =>
  Api.post("/api/donation/create_donation", formData);

// get donation API
export const getAllDonationsApi = () => Api.get("/api/donation/get_donations");

//get single donation API
export const getSingleDonationApi = (id) =>
  Api.get(`/api/donation/get_donation/${id}`);

//update donation
export const updateDonationApi = (id, formData) =>
  Api.put(`/api/donation/update_donation/${id}`, formData, config);

//delete donation
export const deleteDonationApi = (id) =>
  Api.delete(`/api/donation/delete_donation/${id}`, config);




//create events

export const createEventApi = (formData) =>
  Api.post("/api/event/create_event", formData);

// get event API
export const getAllEventsApi = () => Api.get("/api/event/get_events");

//get single event API
export const getSingleEventApi = (id) =>
  Api.get(`/api/event/get_event/${id}`);

//update event
export const updateEventApi = (id, formData) =>
  Api.put(`/api/event/update_event/${id}`, formData, config);

//delete event
export const deleteEventApi = (id) =>
  Api.delete(`/api/event/delete_event/${id}`, config);



//for profile 
export const getUserProfileApi = () => {
  return Api.get("/api/user/profile", config); // Ensure `config` is passed here
};
export const updateUserProfileApi = (userId, data) =>
  Api.put(`/api/user/update_profile/${userId}`, data,config);


