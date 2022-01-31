import { AiOutlineSearch } from 'react-icons/ai';
import logoImg from '../../assets/logo.svg';

import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbarWrapper}>
      <a href='/'><img className={styles.logo} src={logoImg} alt='Logo' /></a>

      <div className={styles.searchInput}>
        <AiOutlineSearch size='32' />
        <div className={styles.divider} />
        <input type='search' placeholder='Write some community or user' />
      </div>

      <ul className={styles.navList}>
        <li>
          <a href='/signin'>
            Sign In
          </a>
        </li>

        <li>
          <a className={styles.signOut} href='/signup'>
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}
