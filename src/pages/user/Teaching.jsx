

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; // Import the Footer component
import ProjectSummary from "./ProjectSummary";
import TeachingProject from "./TeachingProject";

const Teaching = () => {
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
      fontFamily: "Inder",
      textAlign: "justify",
      fontSize:'14px',
      marginBottom: "10px"
    },
    sidebar: {
      width: "25%",
      borderLeft: "1px solid #ccc",
      paddingLeft: "10px",
    },
    sidebarHeader: {
      marginBottom: "20px",
      fontSize: "14px",
      textAlign: "center",
      fontFamily:"Inknut Antiqua",
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
      fontSize: "12px",
      fontFamily: "Inknut Antiqua",
    },
    programDescription: {
      fontSize: "0.8em",
      color: "#333",
      fontFamily: "Inder",
    },
    objectivesHeader: {
      marginTop: "20px",
      fontFamily:"Inknut Antiqua",
      fontWeight: "bold",
      fontSize: "14px",
    },
    objectivesList: {
      listStyleType: "disc",
      marginLeft: "20px",
    },
    objectivesListItem: {
      marginBottom: "15px",
      fontFamily: "Inder",
      fontSize: '14px',
      marginTop:'10px'    },
  };
  const hstyle = {
    fontFamily:"Inknut Antiqua",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom:'10px'
  }
  const hhstyle = {
    fontFamily:"Inknut Antiqua",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: '5px',
    marginTop:'7px'
  }
  const hostyle = {
    fontFamily:"Inknut Antiqua",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: '5px',
    marginTop:'15px'
  }


  const pstyle = {
    fontFamily: "Inder",
    textAlign: "justify",
    fontSize:'14px',
    marginTop: "8px"
  }

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={hstyle}>Teaching English in Community Schools</h1>
          <div style={styles.imageTextContainer}>
            <img
              src="assets/images/women.jpg"
              alt="Women Education"
              style={styles.image}
            />
            <div style={styles.text}>
              <p>
                              English Teaching in Nepali Community Schools Program targets international volunteers who
                              are looking to take part in a hands-on, Nepali classroom experience.
              </p>
              <p>
                              In these local schools, you as a volunteer will not only teach the English language,
                              but will also engage in an effort to teach the children how to apply those language skills
                              in various extracurricular activities.
                          </p>
                          <p>VIN believes that by doing this, the children will have a better grasp of English and will be
                              able to use what they know, in real life situations, where communication is core. With your help,
                                VIN hopes to deliver the children and their local communities a crucial life skill: the English language. Acquiring this life skill has huge implications for Nepali, more that you might think. Knowing English is key to a more internationally connected Nepal, as well as opening the door for career opportunities.</p>
            </div>
                  </div>
                  <h1 style={hostyle}>Problems Faced by Nepalese Migrant Workers</h1>
          <p style={pstyle}>
                      Out of a population of 27 million, over 4 million Nepali work abroad,
                      in places such as the Middle-East and Malaysia. Since the year 2000 it is estimated that 10,000
                      have died abroad from a range of issues associated with poor conditions. VIN sees education as the
                      key to empowering children to make informed decisions about their future and that of their country.
                      The benefits of this knowledge is that it protects the individual, limits the very real risk of exploitation,
                      and is conducive to positive progress.
          </p>
          

          <h1 style={hostyle}>What to Teach</h1>
          <p style={pstyle}>
                      In Nepal, each school has its own English teachers who may be available to assist volunteers with teaching methods,
                      offer advice on solving communication barriers, or simply providing suitable curricula for the classroom.
                      English teaching volunteers do not have to be native English speakers. During holidays and slow periods,
                      volunteers can also help local teachers create teaching resources and design effective lessons plans,
                      as well as co-teach certain lessons. This offers a new opportunity of learning and exchanging ideas on
                      educational practice.
                  </p>
                  <p style={pstyle}>Due to the lack of resources and other disturbances, schools are often closed, sometimes for days at a time.
                      Therefore, it is very important that volunteers provide English lessons after school, for groups of all ages,
                      so that children can continue their studies as well as simply have something productive to do with their time.
                      These classes also reach out to those in the community who cannot attend formal school, either because of
                      financial difficulties or other responsibilities.

</p>
                  
                  <TeachingProject /> 
                  
                  

                
                      




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

export default Teaching;
