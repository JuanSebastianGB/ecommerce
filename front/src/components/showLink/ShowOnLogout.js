import { useSelector } from 'react-redux';

const ShowOnLogout = ({ children }) => {
  const user = useSelector((state) => state.auth);
  return !user.isLoggedIn ? children : null;
};

export default ShowOnLogout;
