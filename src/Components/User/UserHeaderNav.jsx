import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import MinhasFotos from '../../Assets/Feed.svg';
import estatisticas from '../../Assets/estatisticas.svg';
import adicionarFoto from '../../Assets/adicionar.svg';
import sair from '../../Assets/sair.svg';

import styles from './UserHeaderNav.module.css';
import { useMedia } from '../../Hooks/useMedia';

export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <img src={MinhasFotos} alt="Minhas Fotos" style={{ opacity: '1' }} />
          {mobile && 'Minhas fotos'}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          <img src={estatisticas} alt="estatisticas" style={{ opacity: '1' }} />
          {mobile && 'Estatisticas'}
        </NavLink>

        <NavLink to="/conta/postar">
          <img
            src={adicionarFoto}
            alt="adicionarFoto"
            style={{ opacity: '1' }}
          />
          {mobile && 'Adicionar Foto'}
        </NavLink>

        <button onClick={userLogout}>
          {' '}
          <img src={sair} alt="adicionarFoto" style={{ opacity: '1' }} />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};
