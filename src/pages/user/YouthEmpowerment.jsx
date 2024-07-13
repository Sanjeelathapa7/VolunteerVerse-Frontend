

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; // Import the Footer component
import ProjectSummary from "./ProjectSummary";

const YouthEmpowerment = () => {
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
          <h1>Youth Club and Life Skills</h1>
          <div style={styles.imageTextContainer}>
            <img
              src="assets/images/women.jpg"
              alt="Women Education"
              style={styles.image}
            />
            <div style={styles.text}>
              <p>
                              Volunteerverse youth empowerment volunteer program looks to inspire and make proactive
                              the youth of Nepal by integrating them into children’s or women’s empowerment causes,
                              as well as teaching them life skills.
                              {/* You as a volunteer may help in many ways.
                              You may teach the youth English, or set up workshops that give the youth valuable
                              {/* vocational skills such as CV writing. Another option you will have will be to hold
                              sessions on problem-solving and effective communication. If you feel you are not fit
                              to instruct the youth on the above-mentioned matters, then you may also just set up
                              discussions on issues of child and women’s rights. This way, you will raise awareness
                              among the young adults, and possibly even motivate them or stir them enough to turn
                              their words into actions in the near future. */}
              </p>
              <p>
                              Volunteerverse youth program has a three-fold aim: to prepare the youth of Nepal for all future endeavors by
                              enhancing their social and professional life skills; as well as developing confidence within them,
                              in order to help them deal with all problematic situations; and to get them to be an integral part
                              of the women’s and children’s empowerment movements. The collective aim is therefore to encourage
                              the youth to be a part of VIN’s endeavor to bring changes into the communities. By giving the youth
                              this opportunity to take initiative VIN is preparing them for a future career where the similar drive
                              and willpower may be necessary. This program is one that will make the young, socially responsible.
              </p>
            </div>
          </div>
          <p>
            Many challenges within the community stem from the fact that
            educated men tend to leave their communities to find work, while
            women stay home. A locally based women’s empowerment program has the
            potential to transform these women into powerful force within their
            community. VIN understands that the future of many communities lies
            in the hands of empowered female leaders, who may share their
            knowledge in the communities’ best interests.
          </p>
          <div style={styles.objectivesHeader}>Volunteerverse's aim is to:</div>
          <ul style={styles.objectivesList}>
            <li style={styles.objectivesListItem}>Develop life skills in youth and deploy them for the local community development process.</li>
            <li style={styles.objectivesListItem}>Equip and provide volunteers with a platform to link their academic learning into practical life.</li>
            <li style={styles.objectivesListItem}>Provide vocational skills for those who missed school education or dropped out from their education.</li>
            <li style={styles.objectivesListItem}>Make youth more proactive with regard to social transformation and fighting against existing discrimination.</li>
            <li style={styles.objectivesListItem}>Provide volunteering opportunities in the local, national and international level.</li>
          </ul>
         
          <div style={styles.objectivesHeader}>
            What can a volunteer do?
          </div>
          <ul style={styles.objectivesList}>
            <li style={styles.objectivesListItem}>
            Conduct English Language classes at the local community;
            </li>
            <li style={styles.objectivesListItem}>
            Conduct workshops on career development topics such CV writing, interview skills, Formal letter writing etc;
            </li>
            <li style={styles.objectivesListItem}>
            Help them plan for their monthly activities;
            </li>
            <li style={styles.objectivesListItem}>
            Conduct vocational and technology training;
            </li>
            <li style={styles.objectivesListItem}>
            Conduct life skills training such as – decision making, problem solving, coping with stress, communication;
                      </li>
                      <li style={styles.objectivesListItem}>
                      Organize competitive activities such as quizzes, debates, speeches, master of ceremony (MC), interactions;
                      </li>
                      <li style={styles.objectivesListItem}>
                      Organize visits to resourceful places.
            </li>
          </ul>

          <h1>What is the current program for youth?</h1>
          <p>
                      VIN has set up a local youth club at Jitpur community representing all youth from the community.
                      A variety of activities are conducted at this to empower the rural community youth.
                      This has been a great platform for the local youth to get involved in career development.
                      You can learn more about this here.
                  </p>
                  
                  <ProjectSummary /> 
                  
                  

                
                      




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

export default YouthEmpowerment;
