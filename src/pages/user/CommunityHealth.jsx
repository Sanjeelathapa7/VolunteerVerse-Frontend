

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; // Import the Footer component
import ProjectSummary from "./ProjectSummary";
import ComProject from "./ComProject";

const CommunityHealth = () => {
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
          <h1>Public Health and Medical Care </h1>
          <div style={styles.imageTextContainer}>
            <img
              src="assets/images/women.jpg"
              alt="Women Education"
              style={styles.image}
            />
            <div style={styles.text}>
              <p>
                              VIN Community Health & Medical Care Program aims to improve conditions
                              through relevant education, services and public awareness programs.
                              The volunteers’ skills and interests, as well as the assessed needs of the community,
                              will act as a guide to making each program relevant and beneficial.
                          </p>
                          <p>VIN provides qualified doctors and nurses to staff local health clinics.
                              Medical internships in Nepal allow you to assist in reviewing patients at the
                              clinic, helping the staff and providing training, depending on their level of expertise.
                              The health clinic is open daily with a doctor present three days each week.</p>
              <p>
                              Community Health Education can sustainably improve the health of a community and is at the heart
                              of VIN’s health projects. Various sessions are provided for women’s groups, children’s groups,
                              as well as at schools. During a medical internship in Nepal the volunteer will formulate and run
                              health education sessions alongside local translators. Volunteers are also involved in designing
                              and conducting VIN assisted health surveys and diagnostic research to ensure optimum outcomes.
              </p>
            </div>
          </div>
                  <h1>Current Health Issues</h1>
                  <p>Rural Nepali are often reluctant to receive contemporary health services because of superstitious
                      belief systems as well as other cultural influences.
                      This in turn often leads to fatalities from preventable illness.
                      Medical internships in Nepal are an opportunity to illustrate the importance and benefits of making
                      the transition towards conventional medicine.</p>
                  
                  <p>Many of the health problems stem from a lack of basic hygiene practice and facilities.
                      VIN has supported toilet construction within the community, and recent research has shown
                      significant benefits achieved through this project, but education is still needed to encourage
                      the change of behavioural habits.</p>
                  
<p>VIN welcomes interested medical students, professionals, or organisations to join our Community Health and Medical Care Program.</p>


          <div style={styles.objectivesHeader}>How we do it:</div>
          <ul style={styles.objectivesList}>
            <li style={styles.objectivesListItem}>Health Institutions:  Volunteers are assigned to health institutions either run by the government or local community, both in rural and urban settings. Medical volunteers will work three to five hours a day, Monday to Friday.</li>
            <li style={styles.objectivesListItem}>Health Camps:  Medical Volunteers will be mobilised to work in health camps for a prearranged schedule: 1 day to a week. Local medical professionals operate within VIN, so as to assist volunteers. Volunteers’ responsibilities range from distributing medicine, consulting citizens about appropriate health care awareness.</li>
            <li style={styles.objectivesListItem}>Health Awareness Programs: Many Nepali people are unaware of health and hygiene and environmental issues. We therefore mobilise local and international medical volunteers mainly to work with the youth clubs, women’s groups, children’s clubs, women microcredit cooperatives, and other local organisations to teach them about proper health and sanitation habits. VIN aims to prepare local health advocates by training the local groups of women, youth, teachers and children.</li>
            
          </ul>
         
          
                  <ComProject /> 
                  
                  

                
                      




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
              <div style={styles.programTitle}>Volunteer for Street Children</div>
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
                Volunteer for the Elderly People in Nepal Project aims to protect
                and promote the wellbeing of the aging population. As you walk
                on...
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer component here */}
    </div>
  );
};

export default CommunityHealth;
