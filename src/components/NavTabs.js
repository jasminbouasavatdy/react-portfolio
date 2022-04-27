import React from 'react';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
    background: '#e8eaf6',
  },
  h1: {
    color:'#3f51b5',
    fontSize:'50px'
  }
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <h1 style={styles.h1}className='text-center pt-5'>Jasmin Bouasavatdy</h1>
  
    <ul className="nav nav-tabs" style={styles.nav}>
      <li className="nav-item px-2">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item px-2">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
         

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item px-2">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item px-2">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>

    </>
  );
}

export default NavTabs;
