


import React, { useState, useEffect } from "react";
import {
  createDonationApi,
  getAllDonationsApi,
  deleteDonationApi,
} from "../../apis/Apis";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar"; // assuming AdminNavbar is defined and imported correctly

const AdminDashboard = () => {
  // Make useState
  const [donationName, setDonationName] = useState("");
  const [donor, setDonor] = useState("");
  const [totalDonor, setTotalDonor] = useState("");
  const [time, setTime] = useState("");
  const [target, setTarget] = useState("");
  const [percentage, setPercentage] = useState("");
  const [donationDetails, setDonationDetails] = useState("");

  // make useState for image
  const [donationImage, setDonationImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // image upload function
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setDonationImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // Load all donations when page loads
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    getAllDonationsApi()
      .then((res) => {
        if (res.data && res.data.donations) {
          setDonations(res.data.donations);
        } else {
          setDonations([]);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to fetch donations");
      });
  }, []);

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("donationName", donationName);
    formData.append("donor", donor);
    formData.append("totalDonor", totalDonor);
    formData.append("time", time);
    formData.append("target", target);
    formData.append("percentage", percentage);
    formData.append("donationDetails", donationDetails);
    formData.append("donationImage", donationImage);

    // send request to backend API
    createDonationApi(formData)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Internal Server Error!");
      });
  };

  //delete donation function
  const handleDelete = (id) => {
    //confirm dialog box
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) {
      return;
    } else {
      deleteDonationApi(id).then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          window.location.reload();
        }
      });
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
            Add Donation
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
              <div
                className="modal-header"
                style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}
              >
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Create a new donation!
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
                  <label>Donation Name</label>
                  <input
                    onChange={(e) => setDonationName(e.target.value)}
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter donation name"
                  />
                  <label>Donor</label>
                  <input
                    onChange={(e) => setDonor(e.target.value)}
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter donor name"
                  />
                  <label>Total Donor</label>
                  <input
                    onChange={(e) => setTotalDonor(e.target.value)}
                    className="form-control mb-2"
                    type="number"
                    placeholder="Enter total donors"
                  />
                  <label>Time</label>
                  <input
                    onChange={(e) => setTime(e.target.value)}
                    className="form-control mb-2"
                    type="datetime-local"
                  />
                  <label>Target</label>
                  <input
                    onChange={(e) => setTarget(e.target.value)}
                    className="form-control mb-2"
                    type="number"
                    placeholder="Enter target amount"
                  />
                  <label>Percentage</label>
                  <input
                    onChange={(e) => setPercentage(e.target.value)}
                    className="form-control mb-2"
                    type="number"
                    placeholder="Enter percentage"
                  />
                  <label>Donation Details</label>
                  <input
                    onChange={(e) => setDonationDetails(e.target.value)}
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter donation details"
                  />
                  <label>Product Image</label>
                  <input
                    onChange={handleImageUpload}
                    type="file"
                    className="form-control"
                  />

                  {/* Preview Image */}
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
                    Save Donation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-bordered mt-2">
        <thead className="table-dark">
          <tr>
            <th>Donation Image</th>
            <th>Donation Name</th>
            <th>Donor</th>
            <th>Total Donor</th>
            <th>Time</th>
            <th>Target</th>
            <th>Percentage</th>
            <th>Donation Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={item.donationImageUrl}
                  height={100}
                  width={100}
                  alt={item.donationName}
                />
              </td>
              <td>{item.donationName}</td>
              <td>{item.donor}</td>
              <td>{item.totalDonor}</td>
              <td>{item.time}</td>
              <td>{item.target}</td>
              <td>{item.percentage}</td>
              <td>{item.donationDetails.slice(0, 20)}</td>
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <Link
                    to={`/admin/edit/${item._id}`}
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
    </>
  );
};

export default AdminDashboard;
