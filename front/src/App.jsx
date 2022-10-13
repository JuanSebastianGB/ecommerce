import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from '@/components';
import { Contact, Login, Home, Register, Reset } from '@/pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
