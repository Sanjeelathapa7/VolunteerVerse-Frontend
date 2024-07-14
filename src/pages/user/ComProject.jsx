import React from 'react';

const ComProject = () => {
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
          <td style={styles.td}>Health / Medical Care </td>
        </tr>
        <tr>
          <td style={styles.td}>Project:</td>
          <td style={styles.td}>Public Health and Medical Care
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
          <td style={styles.td}>Shadow doctor at health post, conduct awareness programs on health and hygiene, First Aid to local youth, women, children clubs, conducting medical camps
          </td>
        </tr>
        <tr>
          <td style={styles.td}>Beneficiaries:</td>
          <td style={styles.td}>Local women, children, youth, teachers and other community people in general
          </td>
        </tr>
        <tr>
          <td style={styles.td}>Working Hours:</td>
          <td style={styles.td}>3 to 5 hours a day, 5 to 6 days a week</td>
        </tr>
        <tr>
          <td style={styles.td}>Required Qualifications and Skills:</td>
          <td style={styles.td}>Medical / public health background either currently studying or practicing in the medical field. doctors, nurses, medical students, and nursing students. keen to work in rural community with basic facilities</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ComProject;
