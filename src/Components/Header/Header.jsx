import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Dogs from '../../Assets/dogs.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <img src={Dogs} alt="Dog - Home" />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};
