import { Fragment, useState } from 'react';
import resetImage from '@/assets/forgot.png';
import styles from './auth.module.scss';
import { Card } from '@/components';
import { InputStyled } from './InputStyles';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase/credentials';
import { Loader } from '@/components';
import { toast } from 'react-toastify';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return (
    <Fragment>
      {loading && <Loader />}
      <section className={`${styles.auth} container`}>
        <Card>
          <div className={styles.form}>
            <h2>Reset Password</h2>
            <form action="" onSubmit={handleGoogleResetPassword}>
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
    </Fragment>
  );
};

export default Reset;
