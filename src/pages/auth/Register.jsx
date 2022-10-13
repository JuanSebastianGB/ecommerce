import React from 'react';
import styles from './auth.module.scss';
import registerImage from '@/assets/register.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from '@/components';
import { InputStyled } from './InputStyles';

const Register = () => {
  return (
    <section className={`${styles.auth} container`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form action="">
            <InputStyled type="email" placeholder="Email" />
            <InputStyled type="password" placeholder="Password" />
            <InputStyled type="password" placeholder="Confirm Password" />
            <button className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span className={styles.register}>
            <p>Already an account?</p>
          </span>
          <Link end="true" to="/login">
            Login
          </Link>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={registerImage} alt="login" width="400" />
      </div>
    </section>
  );
};

export default Register;
