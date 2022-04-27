import React from 'react';
import Chiron from '../../images/Chiron-portfolio.png';
import Bw from '../../images/bw.png'
import Moon from '../../images/moonStanding.png'
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
  projectContainer: {
    height: '350px',
    overflow: 'scroll'
  }
};
export default function Portfolio() {
  return (
    <div className="text-center py-4"style={styles.card}>
      <h1 style={styles.heading}>Portfolio</h1>
      <div style={styles.projectContainer} className='projectContainer'>
      <a href="https://polar-peak-28753.herokuapp.com/">
        <img class="img-fluid" src={Chiron} alt="Chiron Site"></img>
        </a>
      </div>
      <div style={styles.projectContainer} className='projectContainer'>
      <a href="https://jasminbouasavatdy.github.io/binge-watching/">
        <img class="img-fluid" src={Bw} alt="Binge-Watching Site"></img>
        </a>
      </div>
      <div style={styles.projectContainer} className='projectContainer'>
        <a href='https://jasminbouasavatdy.github.io/mini_project_1/'>
        <img class="img-fluid" src={Moon} alt="Moon Site"></img>
        </a>
      </div>

    </div>
  );
}
