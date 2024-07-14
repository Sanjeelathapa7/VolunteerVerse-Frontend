import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserProfileApi, updateUserProfileApi } from "../../apis/Apis";
import { jwtDecode } from "jwt-decode";

const EditProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found. Please log in.");
        }

        const decodedUserId = decodeTokenAndGetUserId(token);
        if (!decodedUserId) {
          throw new Error(
            "Unable to verify your identity. Please log in again."
          );
        }

        if (id !== decodedUserId) {
          throw new Error("You are not authorized to edit this profile.");
        }

        const response = await getUserProfileApi(id);
        if (response.data.success) {
          setUserData(response.data.userProfile);
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [id]);

  const decodeTokenAndGetUserId = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.id;
    } catch (error) {
      console.error("Error decoding token:", error.message);
      return null;
    }
  };

  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
  };

  const handleSaveProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("firstName", userData.firstName);
      formData.append("lastName", userData.lastName);
      formData.append("contact", userData.contact);
      formData.append("email", userData.email);

      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const response = await updateUserProfileApi(id, formData);
      if (response.data.success) {
        toast.success("Profile updated successfully");
        setUserData(response.data.userProfile);
        navigate("/Profile");
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating user profile");
    }
  };

  return (
    <div className="profile-page-container d-flex flex-column align-items-center justify-content-center "style={{marginTop:'30px'}}>
      <h2 style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'14px' }}>Edit Your Profile, {userData?.firstName}</h2>
      {loading ? (
        <p className="loading-text">Loading user data...</p>
      ) : userData ? (
        <div className="profile-details-container shadow-lg p-5">
          <div className="profile-details">
            <p>
              <strong className="text-center" style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'14px' }}>First Name:</strong>{" "}
              <input
                className="form-control"
                value={userData.firstName}
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
            </p>
            <p>
              <strong style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'14px' }}>Last Name:</strong>{" "}
              <input
                className="form-control"
                value={userData.lastName}
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </p>
            
            <p>
              <strong style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'14px' }}>Address:</strong>{" "}
              <input
                className="form-control"
                value={userData.location}
                onChange={(e) =>
                  setUserData({ ...userData, location: e.target.value })
                }
              />
            </p>
            <p>
              <strong style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'14px' }}>Email:</strong>{" "}
              <input
                className="form-control"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </p>
            <label>
              <strong style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'14px' }}>Profile Image:</strong>
              <input type="file" onChange={handleProfileImageUpload} />
              {profileImage && (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile Preview"
                  className="profile-image-preview"
                  style={{ objectFit: "cover", maxWidth: 300, maxHeight: 300 }}
                />
              )}
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="btn m-2 shadow-lg "
              style={{ backgroundColor: "rgba(97, 124, 181, 1)",  fontFamily:"Inknut Antiqua", color:'white'}}
              onClick={handleSaveProfile}
            >
              Save Profile
            </button>
          </div>{" "}
        </div>
      ) : (
        <p className="error-text">
          Unable to fetch user data. Please try again later.
        </p>
      )}
    </div>
  );
};

export default EditProfile;
