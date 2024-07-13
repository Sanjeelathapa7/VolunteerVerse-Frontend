import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Whatwedo = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily:"InkutAntiqua"
  };

  const imageSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '30%',
    height: 'auto',
    // borderRadius: '8px',
  };

  const contentSectionStyle = {
    maxWidth: '1100px',
    // textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    fontFamily:"InkutAntiqua"
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '5vh',
    fontFamily:"Inder"

  };

  return (
    <div>
      <Navbar/>
      <div style={containerStyle}>
        <div style={imageSectionStyle}>
          <img src="/assets/images/What.jpg" alt="Volunteers with children" style={imageStyle} />
          <img src="/assets/images/Ww.webp" alt="Volunteer with kids" style={imageStyle} />
          <img src="/assets/images/Work.jpeg" alt="Volunteer working" style={imageStyle} />
        </div>
        <div style={contentSectionStyle}>
          <h2 style={headingStyle}>Our Mission</h2>
          <p style={paragraphStyle}>
            VolunteerVerse is founded on the dream that brave and generous volunteers from across all backgrounds can work together to bring about genuine, sustainable change for Nepali communities. We encourage and invite international volunteers to improve the situation of Nepal. We do this by being flexible to our volunteers’ needs and keeping costs low.
          </p>
          <h2 style={headingStyle}>Why VolunteerVerse</h2>
          <p style={paragraphStyle}>
            VIN is one of the few organizations currently operating in Nepal whose mission serves to
            directly empower Nepali youths and promote a greater sense of volunteerism in Nepal.
            Our programs operate year-round and overseas volunteers can be satisfied in contributing
            to an organization that is working to improve the quality of life of Nepali peoples—with an
            emphasis on improving education for marginalized groups such as women and children.
            This means that.
            You will be making a sustainable difference in the most marginalized communities.
            You’ll take part in structured programmes where you’ll have the opportunity to contribute,
            together with VIN onsite team, in achieving a lasting difference for your target community’s
            shared vision. Overseas volunteers will form part of an already existing local network of volunteers
            and have the opportunity to fully immerse themselves in Nepali culture and life.
            VolunteerVerse can be an extremely rewarding and life-changing experience. Your efforts can bring great changes in the lives of individual people and the wider community. This cannot be said enough. In the difficult times that Nepal is facing, your contribution of time or resources is extremely valuable. Our unique position as a Nepali run company means we know our country better and this allows us to reduce overheads, yet still provide fantastic service equal to the high cost international agencies. From the the very first day of our volunteers’ arrival until your departure from Nepal, we do everything possible to make sure our volunteers will have a safe, meaningful and pleasant stay. We make sure all our volunteers are well prepared before beginning work as a volunteer. We provide you orientations, training in Nepali language, culture, work practices and guided sight-seeing tours.


          </p>
          <h2 style={headingStyle}>Why Volunteering</h2>
          <p style={paragraphStyle}>
            VolunteerVerse can be an extremely rewarding and life-changing experience.
            Your efforts can bring great changes in the lives of individual people and the wider
            community. This cannot be said enough. In the difficult times that Nepal is facing,
            your contribution of time or resources is extremely valuable. Our unique position as a
            Nepali run company means we know our country better and this allows us to reduce overheads,
            yet still provide fantastic service equal to the high cost international agencies.
            From the the very first day of our volunteers’ arrival until your departure from Nepal,
            we do everything possible to make sure our volunteers will have a safe,
            meaningful and pleasant stay. We make sure all our volunteers are well prepared before
            beginning work as a volunteer. We provide you orientations, training in Nepali language,
            culture, work practices and guided sight-seeing tours.


          </p>
         
          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Whatwedo;
