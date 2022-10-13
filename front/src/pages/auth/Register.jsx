import { useState, Fragment } from 'react';
import styles from './auth.module.scss';
import registerImage from '@/assets/register.png';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Loader } from '@/components';
import { InputStyled } from './InputStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import app, { auth } from '@/firebase/credentials';

const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',
};
const Register = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { email, password, confirmPassword } = formData;
    if (password !== confirmPassword)
      return toast.error('Password do not match');
    setLoading(true);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredentials;
      setLoading(false);
      toast.success('User Registered successfully...');
      navigate('/login');
    } catch (error) {
      toast.error(`something went wrong ${error}`);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      {loading && <Loader />}
      <section className={`${styles.auth} container`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>
            <form action="" onSubmit={handleRegisterUser}>
              <InputStyled
                type="email"
                placeholder="Email"
                name="email"
                j
                required
                value={formData.email}
                onChange={handleChange}
              />
              <InputStyled
                type="password"
                placeholder="Password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <InputStyled
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
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
    </Fragment>
  );
};

export default Register;
