import React from 'react';

const D = () => {
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
    },
    td: {
      border: '1px solid #dddddd',
      textAlign: 'left',
      padding: '8px',
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
          <td style={styles.td}>Community Health </td>
        </tr>
        <tr>
          <td style={styles.td}>Project:</td>
          <td style={styles.td}>Youth Club and Life Skills</td>
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
          <td style={styles.td}>Working with youth Club: English Language, computer technology, career development workshops, sports</td>
        </tr>
        <tr>
          <td style={styles.td}>Beneficiaries:</td>
          <td style={styles.td}>18 to 30 years of local youth</td>
        </tr>
        <tr>
          <td style={styles.td}>Working Hours:</td>
          <td style={styles.td}>3 to 5 hours a day, 5 to 6 days a week</td>
        </tr>
        <tr>
          <td style={styles.td}>Required Qualifications and Skills:</td>
          <td style={styles.td}>Knowledge and skills on youth Empowerment</td>
        </tr>
      </tbody>
    </table>
  );
};

export default D;
