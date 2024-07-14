

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Andrew Steffen",
    role: "Volunteer",
    image: "/assets/images/andrew.jpeg", // Replace with the actual path to the image
    testimonial:
      "My program allowed me to see in practice a triumph of human hope. My students - no matter the background - were able to participate, unveil, and contribute to the offered knowledge with a newly found methodological perspective.",
  },
  {
    name: "Floreyn Iscc",
    role: "Volunteer",
    image: "/assets/images/Floreyn.jpg", // Replace with the actual path to the image
    testimonial:
      "My experiences in the Women Life Skill Project at VolunteerVerse showed me how to feel to be a part of a community and taught me in my social work profession to be pro-active. I loved to work together with the local people and volunteers.",
  },
  {
    name: "James Stephen",
    role: "Volunteer",
    image: "/assets/images/James.webp", // Replace with the actual path to the image
    testimonial:
      "Engaging in Education Empowerment Project at VolunteerVerse allowed me to experience the profound impact of community involvement and highlighted the significance of proactive engagement in the field of education.",
  },
];
const paragraphStyle = {
  fontFamily: "Inder",
  fontSize: "16px", // Adjust the font size as needed
  marginTop: "20px" // Adjust the space before the paragraph as needed
};
const pStyle = {
  fontFamily: "Inder",
  fontSize: "16px", // Adjust the font size as needed
  textAlign: "justify",
  marginTop: "8px"
}

const rStyle = {
  fontFamily: "Inder",
  textAlign: "right" ,
  textAlign: "justify",
  marginTop: "8px"

}
const ourStyle = {
  textAlign: "center",
  marginBottom: "20px",
  fontFamily: "Inknut Antiqua",

}

const headingStyle = {
  fontFamily:"Inknut Antiqua",
  fontSize: "15px",
  fontWeight:"bold"
  
}

const empStyle = {
  textDecoration: "underline",
  fontFamily:"Inknut Antiqua",
  fontSize: "15px",

}
const paStyle = {
  fontFamily: "Inder",
  textAlign: "justify",
  fontSize:'14px',
  marginTop: "8px"
}
const vhStyle = {
  fontFamily:"Inknut Antiqua",
  fontSize: "13px",
  fontWeight:"bold"
}

const vpStyle = {
  fontFamily: "Inder",
  fontSize:'14px',
  marginTop: "8px"
  
}
const Homepage = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          padding: "0px",
          backgroundColor: "#f7f7f7",
        }}
      >
        <img
          src="/assets/images/Home.png"
          alt="VolunteerVerse Logo"
          style={{ width: "100%", height: "auto", marginBottom: "20px" }}
        />
        <h1 style={headingStyle}>Welcome to VolunteerVerse</h1>
        <p style={paragraphStyle}>
          VolunteerVerse is a dedicated platform connecting volunteers with
          opportunities to make a difference in their communities and beyond.
          Whether you're passionate about environmental conservation, social
          justice, education, or humanitarian aid, VolunteerVerse provides a hub
          where you can find meaningful ways to contribute your time and skills.
          
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "30px 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "start" }}>
          <div style={{ width: "50%" }}>
            <img
              src="/assets/images/Home1.jpg" // Replace with your actual image path
              alt="Volunteer in Nepal"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div style={{ width: "100%", padding: "0 30px" }}>
            <div style={{ marginTop: "0px" }}>
              <h2 style={headingStyle}>Volunteer in Nepal</h2>
              <p style={pStyle}>
                VolunteerVerse is a comprehensive platform dedicated to cultivating a vibrant
                community of individuals and organizations committed to making a positive impact
                through volunteerism. At its core, VolunteerVerse functions as a seamless bridge,
                connecting volunteers with opportunities that resonate with their passions, skills, and availability.

                Utilizing advanced matching algorithms, VolunteerVerse ensures that each volunteer can
                discover meaningful projects where they can contribute effectively. This not only enhances
                the volunteer experience but also amplifies the impact of their efforts.

                For organizations, VolunteerVerse offers a suite of powerful tools designed to streamline
                the volunteer management process. From recruitment to retention, the platform provides innovative
                solutions that empower organizations to efficiently harness volunteer enthusiasm and dedication.
                By facilitating smoother operations and fostering deeper engagement, VolunteerVerse supports
                organizations in achieving their goals and driving meaningful change within their communities.

                
                
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", alignItems: "start", marginTop: "40px" }}
        >
          <div style={{ width: "70%", padding: "0 40px", textAlign: "right" }}>
            <h2 style={headingStyle}>Internship in Nepal</h2>

            <p style={rStyle}>
              Internship in Nepal offers a unique and enriching opportunity for
              individuals to gain hands-on experience in a variety of meaningful
              projects while fully immersing themselves in the country's rich
              cultural heritage. This experience is ideal for students, recent
              graduates, and professionals seeking to enhance their skills and
              broaden their horizons. Interns in Nepal have the chance to work
              in diverse fields such as healthcare, education, environmental
              conservation, social work, and community development, among
              others. During an internship in Nepal, individuals are not only
              able to apply their academic knowledge and professional skills in
              real-world settings but also contribute significantly to local
              communities. The projects often address critical issues such as
              improving healthcare services, promoting sustainable practices,
              enhancing educational outcomes, and empowering marginalized
              groups. This hands-on involvement provides interns with practical
              insights and a deeper understanding of global challenges and local
              solutions.
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <img
              src="/assets/images/In.jpg"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div
          style={{
            padding: "30px",
            backgroundColor: "rgba(138, 172, 195, 0.19)",
            marginTop: "30px",
          }}
        >
          <h1
            style={ourStyle}
          >
            Our Volunteer and Internship Placements
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              margin: "20px",
            }}
          >
            <div style={{ flexBasis: "30%", margin: "10px" }}>
              <img
                src="/assets/images/Women.jpg"
                alt="Women Empowerment"
                style={{ width: "100%", height: "auto" }}
              />
              <h2>
                <Link
                  to="/women-empowerment"
                  style={empStyle}
                >
                  Women Empowerment
                </Link>
              </h2>
              <p style={paStyle}>
                Volunteering Nepal aims in empowering women from marginalized
                communities for projects. Click here to know more about women
                empowerment program.
              </p>
            </div>
            <div style={{ flexBasis: "30%", margin: "10px" }}>
              <img
                src="/assets/images/Youth.jpg"
                alt="Youth Empowerment"
                style={{ width: "100%", height: "64%" }}
              />
              <h2>
                <Link
                  to="/youth-empowerment"
                  style={empStyle}
                >
                  Youth Empowerment
                </Link>
              </h2>
              <p style={paStyle}>
                Work as volunteer for Youth Empowerment work with
                underprivileged youths in Nepal. You can make a difference!
              </p>
            </div>
            <div style={{ flexBasis: "30%", margin: "10px" }}>
              <img
                src="/assets/images/Child.jpeg"
                alt="Children Development"
                style={{ width: "100%", height: "64%" }}
              />
              <h2>
                <Link
                  to="/children-development"
                  style={empStyle}
                >
                  Children Development
                </Link>
              </h2>
              <p style={paStyle}>
                Be part of VolunteerVerse offer your love, care and support to
                early childhood development education in Nepal. Get involved now
                by volunteering.
              </p>
            </div>
            {/* <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
          <div style={{ flexBasis: "30%", margin: "20px" }}> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                margin: "20px",
              }}
            >
              <div style={{ flexBasis: "30%", margin: "10px" }}>
                <img
                  src="/assets/images/Com.jpg"
                  alt="Community Health"
                  style={{ width: "100%", height: "63", marginTop:'10px' }}
                />
                <h2>
                  <Link
                    to="/community-health"
                    className="text-font"
                    style={empStyle}
                  >
                    Community Health
                  </Link>
                </h2>
                <p style={paStyle}>
                  Be a part of volunteering Nepal – offer your care and support
                  to community health and medical care in Nepal. Click here to
                  see how you can help today!
                </p>
              </div>
              <div style={{ flexBasis: "30%", margin: "20px" }}>
                <img
                  src="/assets/images/DRR.jpg"
                  alt="DRR Research Volunteer"
                  style={{ width: "100%", height: "68%" }}
                />
                <h2>
                  <Link
                    to="/drr-research-volunteer"
                    className="text-font"
                    style={empStyle}
                  >
                    DRR Research Volunteer
                  </Link>
                </h2>
                <p style={paStyle}>
                  You will help the community people develop a disaster risk
                  reduction plan. DRR research volunteer will conduct a
                  wide-ranging study in the DRR sector.
                </p>
              </div>
              <div style={{ flexBasis: "30%", margin: "20px" }}>
                <img
                  src="/assets/images/images.jpeg"
                  alt="Teaching English"
                  style={{ width: "100%", height: "auto" }}
                />
                <h2>
                  <Link
                    to="/teaching-english"
                    className="text-font"
                    style={empStyle}
                  >
                    Teaching English
                  </Link>
                </h2>
                <p style={paStyle}>
                  In Nepal, each school has its own English teachers who may be
                  available to assist volunteers with teaching methods.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "30px",
            textAlign: "center",
            backgroundColor: "#f7f7f7",
          }}
        >
          <h1 style={headingStyle}>What Our Volunteers Say?</h1>
          <p className="text-font" style={{ marginTop: '15px' }}>
            Learn more about the experience of volunteering in Nepal with us
            through the testimonials of our past volunteers.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  width: "30%",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h2 style={vhStyle}>{testimonial.name}</h2>
                <h4 className="text-font" style={{marginTop:'10px'}}>{testimonial.role}</h4>
                <p style={vpStyle}>{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;



