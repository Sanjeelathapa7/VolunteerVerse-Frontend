

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; // Import the Footer component
import W from "./W";

const WomenEmpowerment = () => {
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
      marginBottom: "10px",
      fontFamily: "Inder",
      fontSize:'14px',

    },
  };
  const hstyle = {
    fontFamily:"Inknut Antiqua",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom:'10px'
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
          <h1 style={hstyle}>Women Education, Rights and Life Skills</h1>
          <div style={styles.imageTextContainer}>
            <img
              src="assets/images/women.jpg"
              alt="Women Education"
              style={styles.image}
            />
            <div style={styles.text}>
              <p style={pstyle}>
                “If you really want to change a culture, to empower women,
                improve basic hygiene and health care, and fight high rates of
                infant mortality, the answer is to educate girls.” – Greg
                Mortenson in Three Cups of Tea
              </p>
              <p  style={pstyle}>
                VolunteerVerse believes in the equal opportunities of women in
                Nepal, therefore we have created a variety of projects which
                assist women to overcome current adversity to not only survive,
                but thrive in society. According to UNESCO only 44.5 per cent of
                Nepali females are literate, at disparate odds from their 77.6
                per cent of their male counterparts. Through this program VIN
                volunteers have a chance to assist women’s empowerment, by
                boosting literacy and skills.
              </p>
            </div>
          </div>
          <p  style={pstyle}>
            Many challenges within the community stem from the fact that
            educated men tend to leave their communities to find work, while
            women stay home. A locally based women’s empowerment program has the
            potential to transform these women into powerful force within their
            community. VIN understands that the future of many communities lies
            in the hands of empowered female leaders, who may share their
            knowledge in the communities’ best interests.
          </p>
          <div style={styles.objectivesHeader}>Objectives</div>
          <ul style={styles.objectivesList}>
            <li style={styles.objectivesListItem}>Family health</li>
            <li style={styles.objectivesListItem}>Women’s rights</li>
            <li style={styles.objectivesListItem}>Access to resources</li>
            <li style={styles.objectivesListItem}>Income generation</li>
          </ul>
          <p style={pstyle}>
            Volunteers have the opportunity to exchange ideas, collaborate in
            ongoing projects, teach Basic English skills, help with small
            businesses, and be positive role models. You can also provide
            support in many other ways, depending on your skills and interests
            and the needs of the local community.
          </p>
          <div style={styles.objectivesHeader}>
            VolunteerVerse women’s empowerment program includes:
          </div>
          <ul style={styles.objectivesList}>
            <li style={styles.objectivesListItem}>
              Education (Literacy), rights and life skills
            </li>
            <li style={styles.objectivesListItem}>
              Saving and credit – micro-credit through cooperatives
            </li>
            <li style={styles.objectivesListItem}>
              Income generative skills training
            </li>
            <li style={styles.objectivesListItem}>
              Women’s health and maternity education
            </li>
            <li style={styles.objectivesListItem}>
              Teaching English Language to young women
            </li>
          </ul>

          <h1 style={hstyle}>Achievements</h1>
          <p style={pstyle}>
            In 2013 VIN taught 118 women through literacy classes, and over 500
            since its inception in 2004. These classes were taught in
            partnership with local teachers and overseen by the women’s
            empowerment program to ensure a standard quality of teaching. Women
            must to be able to speak good English if they wish access career
            options through the internet, but also to impress locally based
            multinational companies. Education is also a tool through which
            discrimination of women in Nepal can be ended. Your role may be to
            illustrate how learning English leads to an exposure of outside
            knowledge and ideas. Discriminated women within the program receive
            skills-orientated training so that they may independently generate
            income through projects such as vegetable farming (organic and
            non-organic), livestock, sewing and carving, incense and candle
            making, and dry food processing. So, if you have the skills to
            produce marketable items and would like to help women in these
            communities overcome discrimination, let us know!
          </p>
          <W/>

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

export default WomenEmpowerment;
