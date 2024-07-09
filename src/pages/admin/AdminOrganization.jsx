
import React, { useState, useEffect } from "react";
import { createOrganizationApi, getAllOrganizationsApi, deleteOrganizationApi } from "../../apis/Apis";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar"; 

const AdminOrganization = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationDetails, setOrganizationDetails] = useState("");
  const [organizationImage, setOrganizationImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [organizations, setOrganizations] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setOrganizationImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const fetchOrganizations = async () => {
    try {
      const res = await getAllOrganizationsApi();
      if (res.data && res.data.organizations) {
        setOrganizations(res.data.organizations);
      } else {
        setOrganizations([]);
      }
    } catch (error) {
      console.error('Failed to fetch organizations:', error);
      toast.error("Failed to fetch organizations");
    }
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("organizationName", organizationName);
    formData.append("organizationDetails", organizationDetails);
    formData.append("organizationImage", organizationImage);

    try {
      const res = await createOrganizationApi(formData);
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        fetchOrganizations(); 
        setOrganizationDetails("");
        setOrganizationImage(null);
        setPreviewImage(null);
      }
    } catch (error) {
      console.error('Failed to create organization:', error);
      toast.error("Internal Server Error!");
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this organization?");
    if (!confirm) return;

    try {
      const res = await deleteOrganizationApi(id);
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        fetchOrganizations(); // Fetch events again after deleting an event
      }
    } catch (error) {
      console.error('Failed to delete organization:', error);
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
            Add Organization
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
                  Create a new organization!
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
                  <label>Organization Name</label>
                  <input
                    onChange={(e) => setOrganizationName(e.target.value)}
                    value={organizationName}
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter organization name"
                  />
                  
                  
                  
                  <label>Organization Details</label>
                  <input
                    onChange={(e) => setOrganizationDetails(e.target.value)}
                    value={organizationDetails}
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter organization details"
                  />
                  <label>Organization Image</label>
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
                    Save Organization
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <table className="table table-bordered mt-2">
          <thead className="table-dark">
            <tr>
              <th>Organization Image</th>
              <th>Organization Name</th>
              <th>Organization Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={item.organizationImageUrl}
                    height={100}
                    width={100}
                    alt={item.organizationName}
                  />
                </td>
                <td>{item.organizationName}</td>
                <td>{item.eventDetails}</td>
                <td>
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <Link
                      to={`/admin/edit/organization/${item._id}`}
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

export default AdminOrganization;
