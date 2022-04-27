import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const styles = {
  footer: {
    margin: 20,
    background: '#e8eaf6',
  },
  h2: {
    color: '#3f51b5',
    fontSize: '1.2rem',
  },
  p: {
    color: '#3f51b5'
  },
  a:{
    fontSize:'30px'
  }
};

export default function Footer() {
  return (
    <>
      <footer className='text-center' style={styles.footer}>
        <h2 style={styles.h2}>Contact Me</h2>
        <a className='px-2' style={styles.a} href="https://github.com/jasminbouasavatdy">
          <FaGithub/>
          </a>
        <a style={styles.a}href="https://www.linkedin.com/in/jasmin-bouasavatdy-0a9559227/">
          <FaLinkedin />
          </a>
      </footer>
    </>
  );

}