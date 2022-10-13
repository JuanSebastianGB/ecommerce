import React from 'react';
import styles from './auth.module.scss';
import loginImage from '@/assets/login.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { Card } from '@/components';
import { InputStyled } from './InputStyles';

const Login = () => {
  return (
    <section className={`${styles.auth} container`}>
      <div className={styles.img}>
        <img src={loginImage} alt="login" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form action="">
            <InputStyled type="email" placeholder="Email" />
            <InputStyled type="password" placeholder="Password" />
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className={styles.links}>
              <Link to="/reset">Reset Password</Link>
            </div>
            <p className="--text-center">-- or --</p>
          </form>
          <button className="--btn --btn-danger --btn-block">
            <FaGoogle />
            &nbsp; Login with Google
          </button>
          <span className={styles.register}>
            <p>Don't have an account?</p>
          </span>
          <Link end="true" to="/register">
            Register
          </Link>
        </div>
      </Card>
    </section>
  );
};

export default Login;
