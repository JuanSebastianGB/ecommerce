import { useState, useEffect, Fragment } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaTimes, FaRegUserCircle } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { auth } from '@/firebase/credentials';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { makeUserActive, resetAuth } from '@/redux/states/authSlice';
import { ShowOnLogin, ShowOnLogout } from '@/components';
import styled from 'styled-components';

const StyledUserNav = styled.a`
  color: orange;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const createUserName = (email) => {
  const userName = email.split('@', 1)[0];
  return `${userName.charAt(0).toUpperCase()}${userName.slice(1)}`;
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const handleHideMenu = () => setMenuOpen(false);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(resetAuth(''));
      toast.success('logout successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (!response) return;
      let { email, uid, displayName: userName } = response;
      userName = userName ? userName : createUserName(email);
      dispatch(makeUserActive({ email, uid, userName }));
    });
  }, [dispatch]);

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
              <ShowOnLogin>
                <NavLink end="true" to="/" activeclassname="active">
                  Home
                </NavLink>
              </ShowOnLogin>
            </li>
            <li>
              <ShowOnLogin>
                <NavLink end="true" to="/contact" activeclassname="active">
                  Contact us
                </NavLink>
              </ShowOnLogin>
            </li>
          </ul>
          <div className={styles['header-right']} onClick={handleHideMenu}>
            <ShowOnLogout>
              <NavLink end="true" to="/login" activeclassname="active">
                Login
              </NavLink>
            </ShowOnLogout>
            <ShowOnLogin>
              <StyledUserNav href="#home">
                Hi, {user.userName}
                <FaRegUserCircle size={20} />
              </StyledUserNav>
            </ShowOnLogin>
            <ShowOnLogin>
              <NavLink end="true" to="/orders" activeclassname="active">
                My orders
              </NavLink>
            </ShowOnLogin>
            <ShowOnLogin>
              <NavLink end="true" to="/" onClick={handleSignOut}>
                Sign Out
              </NavLink>
            </ShowOnLogin>
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
