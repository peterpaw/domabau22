import React from 'react';
import { Link } from 'gatsby';
import { IconContext } from 'react-icons';
import { MdPhone, MdMail } from 'react-icons/md';
import styles from '../css/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id="kontakt">
      <div className={styles.grid}>
        <IconContext.Provider
          value={{
            style: { verticalAlign: 'middle', marginRight: '1rem' },
            size: '2em',
            color: '#996D23',
          }}
        >
          <div className={styles.phone}>
            <MdPhone />
            <a href="tel:00491749160117" className={styles.phoneClick}>
              <span className={styles.phone}>+49 174 91 60 117</span>
            </a>
          </div>
          <div className={styles.mail}>
            <a href="mailto:info@doma-bauunternehmen.de">
              <MdMail />
              <span>Info@DOMA-Bauunternehmen.de</span>
            </a>
          </div>
        </IconContext.Provider>

        <div className={styles.address}>
          <ul>
            <li className={styles.heading}>DOMA-Bauunternehmen</li>
            <li>Am Borsdorfer 58</li>
            <li>60435 Frankfurt am Main</li>
          </ul>
        </div>

        <div className={styles.info}>
          ¬© {new Date().getFullYear()}{' '}
          <Link to="/">DOMA-Bauunternehmen.de</Link> - Alle Rechte vorbehalten.
        </div>
        <ul className={styles.links}>
          <li>
            <Link to="/impressum" className={styles.impLink}>
              Impressum
            </Link>
          </li>
          <li>
            <Link to="/datenschutz" className={styles.impLink}>
              Datenschutzerkl√§rung
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
