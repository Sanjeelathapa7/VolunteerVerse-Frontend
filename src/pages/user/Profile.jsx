

import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { toast } from "react-toastify";
import { getUserProfileApi } from "../../apis/Apis";
// import "../../css/profile.css";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  // const [previewProfileImage, setPreviewProfileImage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Token not found. Please log in.");
      setLoading(false);
      return;
    }

    const userId = decodeTokenAndGetUserId(token);
    if (!userId) {
      toast.error("Unable to verify your identity. Please log in again.");
      setLoading(false);
      return;
    }

    getUserProfileApi(userId)
      .then((res) => {
        if (res.data.success === true) {
          setUserData(res.data.userProfile);
          console.log("User ID:", res.data);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error fetching user profile");
      })
      .finally(() => {
        setLoading(false);
      });
    console.log("User ID:", userData?._id);
  }, []);

  const decodeTokenAndGetUserId = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.id;
    } catch (error) {
      console.error("Error decoding token:", error.message);
      return null;
    }
  };

  const styles = {
    nav: {
      width: "250px",
      height: "100vh",
      backgroundColor: "#ffffff",
      padding: "23px",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid rgba(0, 0, 0.1, 0.2)",
      flexShrink: 0,
    },
    logo: {
      width: "95%",
      marginBottom: "0px",
    },
    ul: {
      listStyle: "none",
      padding: "0",
      width: "100%",
    },
    li: {
      margin: "10px 0",
    },
    a: {
      textDecoration: "none",
      color: "#333",
      display: "block",
      padding: "10px 20px",
      borderRadius: "5px",
      transition: "background-color 0.3s",
      fontFamily: "Inknut Antiqua, serif",
      fontSize: "15px",
    },
    active: {
      backgroundColor: "rgba(26, 76, 110, 0.21)",
      color: "#333",
    },
    profilePageContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      fontFamily: "Inknut Antiqua ",
    },
    profileDetailsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "30px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "2rem",
    },
    oldImageBox: {
      margin: "0 2rem",
      padding: "2rem",
    },
    oldProfileImage: {
      objectFit: "cover",
      maxWidth: "200px",
      maxHeight: "120px",
      borderRadius: "20%",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    defaultImage: {
      objectFit: "cover",
      maxWidth: "300px",
      maxHeight: "190px",
      borderRadius: "50%",
      marginBottom: "45px",
    },
    profileDetails: {
      borderTop: "1px solid #ddd",
      paddingBottom: "65px",
      fontFamily: "Inder",
      fontSize: "15px",
    },
    profileImagePreview: {
      objectFit: "cover",
      maxWidth: "300px",
      maxHeight: "300px",
      borderRadius: "50%",
    },
    button: {
      marginTop: "190px",
      fontFamily: "Inknut Antiqua",
      backgroundColor: "#4869a3",
      color: "black",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },

    errorText: {
      color: "red",
    },
    loadingText: {
      color: "blue",
    },
  };

  return (
    <div className="d-flex">
      <nav style={styles.nav}>
        <img
          src="/assets/images/logo.png"
          alt="VolunteerVerse Logo"
          style={styles.logo}
        />
        <ul style={styles.ul}>
          <li style={styles.li}>
            <a href="/user/dashboard" style={styles.a}>
              Dashboard
            </a>
          </li>
          <li style={styles.li}>
            <a href="/event" style={styles.a}>
              Calendar
            </a>
          </li>
          <li style={styles.li}>
            <a href="/eventDetails" style={styles.a}>
              Events
            </a>
          </li>
          <li style={styles.li}>
            <a href="/chat" style={styles.a}>
              Chat
            </a>
          </li>
          <li style={styles.li}>
            <a href="/performance" style={styles.a}>
              Performance
            </a>
          </li>
          <li style={styles.li}>
            <a href="/profile" style={{ ...styles.a, ...styles.active }}>
              Profile
            </a>
          </li>
        </ul>
      </nav>
      <div style={styles.profilePageContainer}>
        <h2 className="mb-2">Welcome to Your Profile, {userData?.firstName}</h2>
        {loading ? (
          <p style={styles.loadingText}>Loading user data...</p>
        ) : userData ? (
          <div style={styles.profileDetailsContainer}>
            <div style={styles.oldImageBox}>
              {userData.profileImage ? (
                <img
                  src={userData.profileImage}
                  alt="Old Profile Image"
                  style={styles.oldProfileImage}
                />
              ) : (
                <img
                  src="https://static.vecteezy.com/system/resources/previews/020/213/738/non_2x/add-profile-picture-icon-upload-photo-of-social-media-user-vector.jpg"
                  alt="Default Image"
                  style={styles.defaultImage}
                />
              )}
            </div>

            <div style={styles.profileDetails}>
              <p className="mt-6"  >
                <strong
                  style={{
                    fontFamily: "Inknut Antiqua, serif",
                    fontSize: "13px",
                  }}
                >
                  First Name:
                </strong>{" "}
                {userData.firstName}
              </p>
              <p >
                <strong
                  style={{
                    fontFamily: "Inknut Antiqua, serif",
                    fontSize: "13px",
                  }}
                >
                  Last Name:
                </strong>{" "}
                {userData.lastName}
              </p>
              <p>
                <strong
                  style={{
                    fontFamily: "Inknut Antiqua, serif",
                    fontSize: "13px",
                  }}
                >
                  Email Address:
                </strong>{" "}
                {userData.email}
              </p>
              <p>
                <strong
                  style={{
                    fontFamily: "Inknut Antiqua, serif",
                    fontSize: "13px",
                  }}
                >
                  Contact:
                </strong>{" "}
                {userData.contact}
              </p>
            </div>
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile Preview"
                style={styles.profileImagePreview}
              />
            )}
            <Link to={`/profile/edit/${userData.id}`} style={styles.button}>
              <button
                className="btn "
                style={{ color: "white", fontSize: "14px" }}
              >
                Edit Profile
              </button>
            </Link>
          </div>
        ) : (
          <p style={styles.errorText}>
            Unable to fetch user data. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
