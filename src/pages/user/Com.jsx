import React from 'react';

const Com = () => {
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
          <th style={styles.th}>How would a typical day look like?</th>
          <th style={styles.th}></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={styles.td}>07:00-08:00</td>
          <td style={styles.td}>Tea/Leisure Time </td>
        </tr>
        <tr>
          <td style={styles.td}>08:00-09:00	</td>
          <td style={styles.td}>Breakfast/Brunch (Nepali meal – Daal-Bhaat)
          </td>
        </tr>
        <tr>
          <td style={styles.td}>09:00-10:00</td>
          <td style={styles.td}>Preparation for sessions
          </td>
        </tr>
        <tr>
          <td style={styles.td}>10:00-13:00	</td>
          <td style={styles.td}>Deliver sessions
          </td>
        </tr>
        <tr>
          <td style={styles.td}>13:00-14:00	</td>
          <td style={styles.td}>Lunch (Packed lunch)
          </td>
        </tr>
        <tr>
          <td style={styles.td}>15:00-17:00	</td>
          <td style={styles.td}>Deliver sessions/Extracurricular activities
          </td>
        </tr>
        <tr>
          <td style={styles.td}>17:00-20:00	</td>
          <td style={styles.td}>Preparation for next day/Leisure time
          </td>
        </tr>
        <tr>
          <td style={styles.td}>20:00-21:00	</td>
          <td style={styles.td}>Dinner (Nepali meal – Daal-Bhaat)
          </td>
        </tr>
        
      </tbody>
    </table>
  );
};

export default Com;
