import React from 'react';
import styles from './Loader.module.scss';
import loaderGif from '@/assets/loader.gif';
import ReactDOM from 'react-dom';

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderGif} alt="Loading..." />
      </div>
    </div>,
    document.getElementById('loader')
  );
};

export default Loader;
