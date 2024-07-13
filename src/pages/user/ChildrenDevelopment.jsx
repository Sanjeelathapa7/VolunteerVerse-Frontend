

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; // Import the Footer component
import ProjectSummary from "./ProjectSummary";
import ChildProject from "./ChildProject";

const ChildrenDevelopment = () => {
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
                            
                              “Learning starts from right at birth. Child Care at the Early Childhood Development (ECD) program
                              fosters a congenial learning environment for children of 3 to 5 years of age to develop motor,
                              mental, social and emotional skills.”
                          </p>
                          <h1>Volunteerverse's Mission for Early Childhood Development</h1>
              <p>
                              At Volunteerverse we believe in lasting change, therefore it is vital that we invest in our young children
                              for the Nepal of tomorrow. Due to the isolated nature of Nepalese mountain villages, institutions such as
                              local schools are still inaccessible for many children. As a result many children lack basic communicative
                              and social skills. Volunteerverse therefore aims to equip school-based Early Childhood Development (ECD) centres
                              and for the first time, provide effective education institutes for the Nepali in rural areas.
                              At Volunteerverse we believe in creating an engaging program, since we feel that learning should be fun.
                              With teachers we discuss how to make creative and engaging classes for children.
                              Additional support comes in the form of curriculum which was written in partnership with our partners
                              in Sustainable Learning from the United States.
              </p>
            </div>
                  </div>
                  <h1>Issue Nepal is Facing </h1>
          <p>
                      Issue Nepal is FacinAlthough we hear “encouragement” of Early Childhood Development from a seemingly confident government,
                      on the ground their intentions have not matched outcomes. While some regions in Nepal may appear to have access
                      to ECD centres the reality is that many regions lack the qualified teachers and materials to run them efficiently.
                      VIN first initiated a community based Early Childhood Development Centre (ECD) at Panchmane Community, Jitpur, Kathmandu.
                      We have, on average, 16 to 20 children each year; between 4 to 6 years of age, benefiting from this program.
                      We have constructed a 3 room building in partnership with the community and equipped it with child friendly
                      furniture and materials. This centre has been established in partnership with the government District Education Office.
                      Now VIN funds and runs over 30 Early Childhood Development centers (ECD) in the outskirt of Kathmandu, Okhaldhunga and Nuwakot.
</p>

                      <h1>Achievements</h1>
                      <p>VIN now supports over 30 early childhood education centres in schools and communities in
                          impoverished Nepalese communities. VIN estimates equipping each centre on average will cost $700,
                          but with our partners’ help we can continue to establish more centres around Nepal.
                          Individuals or organisations interested in lending a helping hand are greatly appreciated.
                      Support from abroad or directly become a part of this empowering project!</p>
                  <p>
                  “After VIN’s orientation to the ECD parents, now our kids are neat and clean and most of the children are bringing lunch from their own homes”
                  </p>


                  
          <div style={styles.objectivesHeader}>How Can I Help?</div>
          
          <ul style={styles.objectivesList}>
            <li style={styles.objectivesListItem}>Assist local teachers.</li>
            <li style={styles.objectivesListItem}>Teach children motor and kinaesthetic skills.</li>
            <li style={styles.objectivesListItem}>Play games and rhymes with children.</li>
            <li style={styles.objectivesListItem}>Supervise sports activities.</li>
            <li style={styles.objectivesListItem}>Provide child care support.</li>
            <li style={styles.objectivesListItem}>Create teaching/learning resources.</li>
            <li style={styles.objectivesListItem}>Organise student excursions. </li>
          </ul>
                  <h1>Who can apply?</h1>
                  <p>
                      Anybody who has a strong interest in supporting children from the most marginalised communities
                      and who enjoys working with young children. Prior experience in Montessori or early childhood
                      education methods will be an advantage. Lacking confidence? Not to worry, VIN provides an orientation
                      course for participants before any placement ensuring a smooth transition into the classroom.

                  </p>

                  <h1>More about ECD Program</h1>
                  <p>
                  Aspects of Children’s Rights Addressed:   Right to Education, Right to Development & Right to Participation



                  </p>
                 
                  <div style={styles.objectivesHeader}>
                      Problem Addressed
          </div>
          <ul style={styles.objectivesList}>
            <li style={styles.objectivesListItem}>
            Teachers not being able to adopt child friendly teaching/learning approaches in ECD classrooms, which can negatively impact the overall development of children in their early years.
            </li>
            <li style={styles.objectivesListItem}>
            Related parties (parent and school management) are not always aware of early childhood development education needs and practices, hence are unable to satisfy them. 
            </li>
           
          </ul>

          <h1>What is the current program for youth?</h1>
          <p>
                      VIN has set up a local youth club at Jitpur community representing all youth from the community.
                      A variety of activities are conducted at this to empower the rural community youth.
                      This has been a great platform for the local youth to get involved in career development.
                      You can learn more about this here.
                  </p>
                  
                  <ChildProject /> 
                  
                  

                
                      




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

export default ChildrenDevelopment;
