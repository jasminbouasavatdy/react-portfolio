import React from 'react';
import Headshot from "../../images/Profile_Pic_2.jpg"
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
    color: '#3f51b5'
  }
};
export default function About() {
  return (
    <div className="text-center py-4"style={styles.card}>
      <h1 style={styles.heading}>About Page</h1>
      <img className='pt-5 text-center'src={Headshot} alt="Headshot of me"></img>
      <p style={styles.p}className='text-left mx-5 px-5 pb-5 pt-4'>
        My name is Anusone Jasmin Bouasavatdy. I am 23 years old and born and raised in
        Charlotte, NC.I am a Front-end web developer with a background to build a more intuitive user
        experience on the web. With recently developed skills in JavaScript, CSS, and responsive web
        design.Known as an innovative problem solver passionate about developing apps, with a focus
        on mobile-first design and development.With each project, my goal is to best engage my
        Client and audience with an astonishing user experience.I am adaptable, motivated, organized and ready to boost my skills by being a part of a fast-paced,
                    quality-driven team
      </p>
    </div>
  );
}
