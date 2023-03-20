import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import MinhasFotos from '../../Assets/Feed.svg';
import estatisticas from '../../Assets/estatisticas.svg';
import adicionarFoto from '../../Assets/adicionar.svg';
import sair from '../../Assets/sair.svg';

import styles from './UserHeaderNav.module.css';

export const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);

  const { userLogout } = React.useContext(UserContext);
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <img src={MinhasFotos} alt="Minhas Fotos" />
        {mobile && 'Minhas fotos'}
      </NavLink>

      <NavLink to="/conta/estatisticas">
        <img src={estatisticas} alt="estatisticas" />
        {mobile && 'Estatisticas'}
      </NavLink>

      <NavLink to="/conta/postar">
        <img src={adicionarFoto} alt="adicionarFoto" />
        {mobile && 'Adicionar Foto'}
      </NavLink>

      <button onClick={userLogout}>
        {' '}
        <img src={sair} alt="adicionarFoto" />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};
