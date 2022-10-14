import { useSelector } from 'react-redux';

const ShowOnLogin = ({ children }) => {
  const user = useSelector((state) => state.auth);
  return user.isLoggedIn ? children : null;
};

export default ShowOnLogin;
