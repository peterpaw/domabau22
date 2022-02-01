import React from 'react';
import { Link } from 'gatsby';
import styles from '../../css/navbar.module.css';
import logo from '../../images/domabau-logo.svg';

const DesktopNav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.center}>
        <Link to="/" className={styles.logoLink}>
          <img width="350" src={logo} alt="DOMA-Bau Logo"></img>
        </Link>

        <ul className={styles.links}>
          <li className={styles.dropDownContainer}>
            <Link to="/#leistungen" className={styles.dropBtn}>
              Leistungen
            </Link>
          </li>
          <li className={styles.dropDownContainer}>
            <Link to="/#referenzen" className={styles.dropBtn}>
              Referenzen
            </Link>
          </li>
          <li className={styles.dropDownContainer}>
            <Link to="/#kontakt" className={styles.dropBtn}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
