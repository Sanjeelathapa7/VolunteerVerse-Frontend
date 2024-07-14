import React from 'react';

const ChildProject = () => {
  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      backgroundColor: '#f2f2f2',
      border: '1px solid #dddddd',
      textAlign: 'left',
      padding: '8px',
      fontFamily: "Inknut Antiqua",
      fontSize: "14px",
    },
    td: {
      border: '1px solid #dddddd',
      textAlign: 'left',
      padding: '8px',
      fontFamily: "Inder",
      fontSize: "14px",
    },
  };

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Project Summary</th>
          <th style={styles.th}></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={styles.td}>Program:</td>
          <td style={styles.td}>Children's Development</td>
        </tr>
        <tr>
          <td style={styles.td}>Project:</td>
          <td style={styles.td}>Child Care: Early Childhood Development
          </td>
        </tr>
        <tr>
          <td style={styles.td}>Start Dates:</td>
          <td style={styles.td}>1st and 15th of each month</td>
        </tr>
        <tr>
          <td style={styles.td}>Language Requirements:</td>
          <td style={styles.td}>English (Basic Nepali is provided)</td>
        </tr>
        <tr>
          <td style={styles.td}>Food and Accommodation:</td>
          <td style={styles.td}>Nepali standard with host family in the working community</td>
        </tr>
        <tr>
          <td style={styles.td}>Key Activities:</td>
          <td style={styles.td}>Organizing creative and child friendly activities, teaching, arts, musics
          </td>
        </tr>
        <tr>
          <td style={styles.td}>Beneficiaries:</td>
          <td style={styles.td}>Children age 3 to 6, local volunteers, teachers, parents, overseas volunteers
          </td>
        </tr>
        <tr>
          <td style={styles.td}>Working Hours:</td>
          <td style={styles.td}>4 to 5 hours</td>
        </tr>
        <tr>
          <td style={styles.td}>Required Qualifications and Skills:</td>
          <td style={styles.td}>Keen interest to working with children, skills to perform above mentioned activities</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ChildProject;
