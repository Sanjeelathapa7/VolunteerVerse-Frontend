import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; // Import the Footer component
import ComProject from "./ComProject";
import Com from "./Com";
import D from "./D";

const DRR = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
    },
    content: {
      flex: 1,
      marginRight: "20px",
    },
    imageTextContainer: {
      display: "flex",
    },
    image: {
      width: "40%",
      height: "auto",
      marginRight: "20px",
    },
    text: {
      flex: 1,
    },
    sidebar: {
      width: "25%",
      borderLeft: "1px solid #ccc",
      paddingLeft: "10px",
    },
    sidebarHeader: {
      marginBottom: "20px",
      fontSize: "1.2em",
      textAlign: "center",
    },
    program: {
      display: "flex",
      marginBottom: "20px",
    },
    programImage: {
      width: "35%",
      height: "45%",
      marginRight: "15px",
    },
    programContent: {
      flex: 1,
    },
    programTitle: {
      fontWeight: "bold",
      color: "#007BFF",
      fontSize: "0.9em",
    },
    programDescription: {
      fontSize: "0.8em",
      color: "#333",
    },
    objectivesHeader: {
      marginTop: "20px",
      fontWeight: "bold",
    },
    objectivesList: {
      listStyleType: "disc",
      marginLeft: "20px",
    },
    objectivesListItem: {
      marginBottom: "10px",
    },
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.content}>
          <h1>DRR Research Volunteer </h1>
          <div style={styles.imageTextContainer}>
            <img
              src="assets/images/women.jpg"
              alt="Women Education"
              style={styles.image}
            />
            <div style={styles.text}>
              <p>
                DRR Research Volunteer Project aims to analysis and identifying
                the socio-economic vulnerabilities caused by a disaster among
                particular groups of people.
              </p>
              <p>
                Nepal is a hub for natural disasters and every year thousands of
                people lose their life due to flood, landslide, earthquake,
                avalanche etc. And yet, many structures in Nepal are unsafe for
                human use. Many houses that had been destroyed by the earthquake
                in 2012 are still inhibited by people. We see numerous schools
                in rural areas with hazardous cracks on the walls. Many
                buildings are held together by bamboo and wood. Effective study
                and research is important to develop seismic resilient
                structures. However, the Government of Nepal has not been able
                to focus on this arena of development.
              </p>
            </div>
          </div>
          <h1>What will be your role?</h1>
          <p>
                      During your placement, you will be placed in one of the VIN host program locations,
                      either in Kathmandu, Nuwakot or Okhaldunga.  You will be organizing disaster risk reduction research
                      in various locations. You will be visiting various schools and community buildings to analyse the condition
                      of building. You will help the community people develop a disaster risk reduction plan.
                      As a DRR research volunteer you will conduct a wide-ranging study in the sector of Disaster Management
                      and ways to tackle the after-effects of a tragedy. You will also develop plans and approaches to mitigate
                      the long-lasting effects of natural hazards.
          </p>
<Com/>
          <h1>Who Can Apply?</h1>

                  <p>Anyone with knowledge and experience in DRR can apply for this project.
                      You should have good facilitation and communication skills as you will be working with community people.
                      Research skill will be an added advantage.</p>

          <D />
        </div>
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarHeader}>Other Volunteering Programs</h2>
          <div style={styles.program}>
            <img
              src="assets/images/DRR.jpg"
              alt="DRR Research Volunteer"
              style={styles.programImage}
            />
            <div style={styles.programContent}>
              <div style={styles.programTitle}>DRR Research Volunteer</div>
              <div style={styles.programDescription}>
                DRR Research Volunteer Project aims to analyze and identify the
                socio-economic vulnerabilities caused by a disaster among
                particular groups of people.
              </div>
            </div>
          </div>
          <div style={styles.program}>
            <img
              src="assets/images/Edu.jpg"
              alt="DRR Education Volunteer"
              style={styles.programImage}
            />
            <div style={styles.programContent}>
              <div style={styles.programTitle}>DRR Education Volunteer</div>
              <div style={styles.programDescription}>
                DRR Education Volunteer Project aims to raise awareness among
                the public on what to do/what not to do in the events of...
              </div>
            </div>
          </div>
          <div style={styles.program}>
            <img
              src="assets/images/Art.jpeg"
              alt="Art and Craft Volunteer"
              style={styles.programImage}
            />
            <div style={styles.programContent}>
              <div style={styles.programTitle}>Art and Craft Volunteer</div>
              <div style={styles.programDescription}>
                Art and Craft Volunteer Project aims to provide meaningful
                active engagement and promote creativity among communities.
              </div>
            </div>
          </div>
          <div style={styles.program}>
            <img
              src="assets/images/Eng.jpg"
              alt="Art and Craft Volunteer"
              style={styles.programImage}
            />
            <div style={styles.programContent}>
              <div style={styles.programTitle}>
                English and Career Development Volunteer
              </div>
              <div style={styles.programDescription}>
                English & Career Development Volunteer aims to teach English
                language and career development skills to the youth of 16 to
                30...
              </div>
            </div>
          </div>
          <div style={styles.program}>
            <img
              src="assets/images/Animal.jpg"
              alt="Art and Craft Volunteer"
              style={styles.programImage}
            />
            <div style={styles.programContent}>
              <div style={styles.programTitle}>Animal Care Volunteer</div>
              <div style={styles.programDescription}>
                Animal Care Volunteer Project aims to contribute towards
                protection of stray animals and prevent them from further
                mistreatment. Numerous animals such as...
              </div>
            </div>
          </div>
          <div style={styles.program}>
            <img
              src="assets/images/Schild.jpg"
              alt="Art and Craft Volunteer"
              style={styles.programImage}
            />
            <div style={styles.programContent}>
              <div style={styles.programTitle}>
                Volunteer for Street Children
              </div>
              <div style={styles.programDescription}>
                Volunteer for Street Children in Nepal Project aims to give
                support, care and guidance to the most neglected section of
                children...
              </div>
            </div>
          </div>
          <div style={styles.program}>
            <img
              src="assets/images/Elderly.jpg"
              alt="Art and Craft Volunteer"
              style={styles.programImage}
            />
            <div style={styles.programContent}>
              <div style={styles.programTitle}>
                Volunteer for the Elderly People
              </div>
              <div style={styles.programDescription}>
                Volunteer for the Elderly People in Nepal Project aims to
                protect and promote the wellbeing of the aging population. As
                you walk on...
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer component here */}
    </div>
  );
};

export default DRR;
