import React from 'react';
import Chiron from '../../images/Chiron-portfolio.png';
import Bw from '../../images/bw.png'
import Moon from '../../images/moonStanding.png'
import Css from '../../images/csssnippet.png'
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
    overflow: 'scroll',
  },
  p: {
    color: '#3f51b5',
  }
};
export default function Portfolio() {
  return (
    <div className="text-center py-4"style={styles.card}>
      <h1 style={styles.heading}>Portfolio</h1>

        <p style={styles.p}>Chiron Web Application</p>
      <div style={styles.projectContainer} className='projectContainer'>
      <a href="https://polar-peak-28753.herokuapp.com/">
        <img class="img-fluid" src={Chiron} alt="Chiron Site"></img>
        </a>
      </div>
      <p style={styles.p}>Binge-Watching Web Application</p>
      <div style={styles.projectContainer} className='projectContainer'>
      <a href="https://jasminbouasavatdy.github.io/binge-watching/">
        <img class="img-fluid" src={Bw} alt="Binge-Watching Site"></img>
        </a>
      </div>
      <p style={styles.p}>Moon Web Application</p>
      <div style={styles.projectContainer} className='projectContainer'>
        <a href='https://jasminbouasavatdy.github.io/mini_project_1/'>
        <img class="img-fluid" src={Moon} alt="Moon Site"></img>
        </a>
      </div>
      <p style={styles.p}>CSS Snippet Project</p>
      <div style={styles.projectContainer} className='projectContainer'>
        <a href="https://jasminbouasavatdy.github.io/css-snippet/">
        <img class="img-fluid" src={Css} alt="CSS Snippet "></img>
        </a>
      </div>

    </div>
  );
}
