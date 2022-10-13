import { useState, Fragment } from 'react';
import styles from './auth.module.scss';
import loginImage from '@/assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { Card, Loader } from '@/components';
import { InputStyled } from './InputStyles';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/firebase/credentials';
import { toast } from 'react-toastify';

const userLoginInitialState = {
  email: '',
  password: '',
};
const Login = () => {
  const [userLogin, setUserLogin] = useState(userLoginInitialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password } = userLogin;

  const handleChange = (e) =>
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    try {
      const userLogged = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userLogged;
      setLoading(false);
      toast.success('Login successfully...');
      navigate('/');
    } catch (error) {
      toast.error(`${error.message}`);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      toast.success('login with google successfully', user);
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Fragment>
      {loading && <Loader />}
      <section className={`${styles.auth} container`}>
        <div className={styles.img}>
          <img src={loginImage} alt="login" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
              <InputStyled
                value={email}
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <InputStyled
                value={password}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <input
                type="submit"
                value="login"
                className="--btn --btn-primary --btn-block"
              />
              <div className={styles.links}>
                <Link to="/reset">Reset Password</Link>
              </div>
              <p className="--text-center">-- or --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block"
              onClick={handleGoogleSignIn}
            >
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
    </Fragment>
  );
};

export default Login;
