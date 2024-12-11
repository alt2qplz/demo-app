import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({ children } : { children: JSX.Element }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={routePath.main} state={{ from: location }} replace/>;
  }

  return children;
};