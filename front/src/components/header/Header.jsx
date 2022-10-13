import { useState } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { auth } from '@/firebase/credentials';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/">
      Cart <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const activeLink = ({ isActive }) => (isActive ? `active` : '');
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const handleHideMenu = () => setMenuOpen(false);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success('logout successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav
          className={
            menuOpen ? `${styles['show-nav']}` : `${styles['hide-nav']}`
          }
        >
          <div
            className={styles['nav-wrapper']}
            onClick={handleToggleMenu}
          ></div>
          <ul onClick={handleHideMenu}>
            <li className={`${styles['logo-mobile']}`}>
              {logo} <FaTimes size={22} color="#fff" onClick={handleHideMenu} />
            </li>
            <li>
              <NavLink end="true" to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink end="true" to="/contact" activeclassname="active">
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className={styles['header-right']} onClick={handleHideMenu}>
            <NavLink end="true" to="/login" activeclassname="active">
              Login
            </NavLink>
            <NavLink end="true" to="/register" activeclassname="active">
              Register
            </NavLink>
            <NavLink end="true" to="/orders" activeclassname="active">
              My orders
            </NavLink>
            <NavLink end="true" to="/" onClick={handleSignOut}>
              Sign Out
            </NavLink>
          </div>
          {cart}
        </nav>

        <div className={styles['menu-icon']}>
          {cart}
          <BiMenuAltRight size={30} onClick={() => setMenuOpen(true)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
