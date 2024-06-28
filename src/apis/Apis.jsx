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

