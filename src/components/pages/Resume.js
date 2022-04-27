import React from 'react';
import Pdf from '../../images/Resume.pdf';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
  p: {
    margin: 20,
    color: '#3f51b5'
  }
};
export default function Resume() {
  return (
    <div className='text-center py-4' style={styles.card}>
      <h1 className='text-center'style={styles.heading}>Resume</h1>
      <div className='text-left' style={styles.p}>
      <a href={Pdf} download><span>Download Resume </span></a>
      </div>
      <p className="text-left"style={styles.p}>
        Front-End Proficencies
        <li> HTML </li>
        <li> CSS </li>
        <li> BootStrap </li>
        <li> JavaScript </li>
        <li> Responsive Design </li>

      </p>
      <p className="text-left"style={styles.p}>
        Back-End Proficencies
        <li> mySql </li>
        <li> REACT </li>
        <li> MERN </li>
        <li> MongoDB </li>
      </p>
    </div>
  );
}
