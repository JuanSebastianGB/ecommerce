import React from 'react';
import resetImage from '@/assets/forgot.png';
import styles from './auth.module.scss';
import { Card } from '@/components';
import { InputStyled } from './InputStyles';
import { Link } from 'react-router-dom';

const Reset = () => {
  return (
    <section className={`${styles.auth} container`}>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form action="">
            <InputStyled type="email" placeholder="Email" />
            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <Link to="/login">- Login</Link>
              <Link to="/register">- Register</Link>
            </div>
          </form>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={resetImage} alt="login" width="400" />
      </div>
    </section>
  );
};

export default Reset;
