import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { useContext } from 'react';

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <>llllllll</>;
  }

  if (user && user?.email) {
    return children; 
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;