// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import { getSingleDonationApi, updateDonationApi } from "../../apis/Apis";
 
// const AdminEditDonation = () => {
//   //Receive product id from URL
//   const { id } = useParams();
 
//   //useEffect (details haru aafai import huna lai)
//   useEffect(() => {
//     getSingleDonationApi(id).then((res) => {
//       console.log(res.data);
//       setDonationName(res.data.donation.donationName);
//       setDonor(res.data.donation.donor);
//       setTotalDonor(res.data.donation.totalDonor);
//       setTime(res.data.donation.time);
//       setTarget(res.data.donation.target);
//       setPercentage(res.data.donation.percentage);
//       setDonationDetails(res.data.donation.donationDetails);
//       setOldImage(res.data.donation.donationImageUrl);
//     });
//   }, [id]); //useEffect chalauna lai id chaincha chaincha
 
//   // Make useState
//   const [donationName, setDonationName] = useState("");
//   const [donor, setDonor] = useState("");
//   const [totalDonor, setTotalDonor] = useState("");
//     const [time, setTime] = useState("");
//     const [target, setTarget] = useState("");
//     const [percentage, setPercentage] = useState("");
//     const [donationDetails, setDonationDetails] = useState("");
//   const [oldImage, setOldImage] = useState("");
 
//   // make useState for image
//   const [donationImage, setDonationImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);
 
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     console.log(file);
//     setDonationImage(file);
//     setPreviewImage(URL.createObjectURL(file));
//   };
 
//   //handle submit function
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("donationName", donationName);
//     formData.append("donor", donor);
//     formData.append("totalDonor", totalDonor);
//     formData.append("time", time);
//     formData.append("target", target);
//     formData.append("percentage", percentage);
//     formData.append("donationDetails", donationDetails);
 
//     //make a api call
//     updateDonationApi(id, formData)
//       .then((res) => {
//         if (res.data.success == false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//           navigate("/admin/dashboard");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Internal server Error!");
//       });
//   };
//   return (
//     <>
//       <div className="m-4">
//         <h3>
//           {" "}
//           Editing Donation - <span className="text-danger">{donationName}</span>
//         </h3>
 
//         <div className="d-flex gap-3">
//           <form action="">
//             <label>Donation Name</label>
//             <input
//               value={donationName}
//               onChange={(e) => setDonationName(e.target.value)}
//               className="form-control mb-2"
//               type="text"
//               name=""
//               id=""
//               placeholder="Enter donation name"
//             />
 
//             <label htmlFor="">Product Description</label>
//             <textarea
//               value={productDescription}
//               onChange={(e) => setProductDescription(e.target.value)}
//               className="form-control mb-2"
//               placeholder={"Enter description"}
//               cols="4"
//               rows="4"
//             ></textarea>
 
//             <label htmlFor="">Price</label>
//             <input
//               value={productPrice}
//               onChange={(e) => setProductPrice(e.target.value)}
//               type="number"
//               className="form-control mb-2"
//               placeholder="Enter your price"
//             />
 
//             <label htmlFor="">Select category</label>
//             <select
//               value={productCategory}
//               onChange={(e) => setProductCategory(e.target.value)}
//               className="form-control mb-2"
//             >
//               <option value="Common Cold">Flower</option>
//               <option value="Eye">Electronics</option>
//               <option value="Kidney">Gadgets</option>
//               <option value="Mobile">Mobile</option>
//             </select>
 
//             <label>Product Image</label>
//             <input
//               onChange={handleImageUpload}
//               type="file"
//               className="form-control"
//             />
//             <button
//               onClick={handleSubmit}
//               className="btn btn-primary w-100 mt-2"
//             >
//               Update Product
//             </button>
//           </form>
 
//           <div>
//             <h6>Old Image Preview</h6>
//             <img
//               className="img-fluid rounded-4 object-fit-cover"
//               width={300}
//               height={300}
//               src={oldImage}
//               alt=""
//             />
//             <h6 className="mt-4">New Image</h6>
//             {previewImage ? (
//               <img
//                 src={previewImage}
//                 alt="product Image"
//                 className="img-fluid rounded-4 object-fit-cover"
//                 width={300}
//                 height={300}
//               />
//             ) : (
//               <p>No Image Selected</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
 
// export default AdminEditProduct;
 

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleDonationApi, updateDonationApi } from "../../apis/Apis";

const AdminEditDonation = () => {
  // Receive donation id from URL
  const { id } = useParams();

  // useEffect to fetch donation details
  useEffect(() => {
    getSingleDonationApi(id).then((res) => {
      console.log(res.data);
      setDonationName(res.data.donation.donationName);
      setDonor(res.data.donation.donor);
      setTotalDonor(res.data.donation.totalDonor);
      setTime(res.data.donation.time);
      setTarget(res.data.donation.target);
      setPercentage(res.data.donation.percentage);
      setDonationDetails(res.data.donation.donationDetails);
      setOldImage(res.data.donation.donationImageUrl);
    });
  }, [id]);

  // useState for donation details
  const [donationName, setDonationName] = useState("");
  const [donor, setDonor] = useState("");
  const [totalDonor, setTotalDonor] = useState("");
  const [time, setTime] = useState("");
  const [target, setTarget] = useState("");
  const [percentage, setPercentage] = useState("");
  const [donationDetails, setDonationDetails] = useState("");
  const [oldImage, setOldImage] = useState("");

  // useState for image
  const [donationImage, setDonationImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setDonationImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // handle submit function
  const navigate = useNavigate();
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

    // make an API call
    updateDonationApi(id, formData)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate("/admin/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Internal server error!");
      });
  };

  return (
    <>
      <div className="m-4">
        <h3>
          Editing Donation - <span className="text-danger">{donationName}</span>
        </h3>

        <div className="d-flex gap-3">
          <form onSubmit={handleSubmit}>
            <label>Donation Name</label>
            <input
              value={donationName}
              onChange={(e) => setDonationName(e.target.value)}
              className="form-control mb-2"
              type="text"
              placeholder="Enter donation name"
            />

            <label>Donor</label>
            <input
              value={donor}
              onChange={(e) => setDonor(e.target.value)}
              className="form-control mb-2"
              type="text"
              placeholder="Enter donor name"
            />

            <label>Total Donor</label>
            <input
              value={totalDonor}
              onChange={(e) => setTotalDonor(e.target.value)}
              className="form-control mb-2"
              type="number"
              placeholder="Enter total donors"
            />

            <label>Time</label>
            <input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="form-control mb-2"
              type="datetime-local"
            />

            <label>Target</label>
            <input
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="form-control mb-2"
              type="number"
              placeholder="Enter target amount"
            />

            <label>Percentage</label>
            <input
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              className="form-control mb-2"
              type="number"
              placeholder="Enter percentage"
            />

            <label>Donation Details</label>
            <textarea
              value={donationDetails}
              onChange={(e) => setDonationDetails(e.target.value)}
              className="form-control mb-2"
              placeholder="Enter donation details"
              cols="4"
              rows="4"
            ></textarea>

            <label>Donation Image</label>
            <input
              onChange={handleImageUpload}
              type="file"
              className="form-control"
            />
            <button type="submit" className="btn btn-primary w-100 mt-2">
              Update Donation
            </button>
          </form>

          <div>
            <h6>Old Image Preview</h6>
            <img
              className="img-fluid rounded-4 object-fit-cover"
              width={300}
              height={300}
              src={oldImage}
              alt="Old Donation"
            />
            <h6 className="mt-4">New Image</h6>
            {previewImage ? (
              <img
                src={previewImage}
                alt="Donation Image"
                className="img-fluid rounded-4 object-fit-cover"
                width={300}
                height={300}
              />
            ) : (
              <p>No Image Selected</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEditDonation;
