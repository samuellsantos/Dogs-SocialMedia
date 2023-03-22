import React from 'react';
import styles from './Footer.module.css';
import footer from '../../Assets/dogs-footer.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={footer} />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
};
