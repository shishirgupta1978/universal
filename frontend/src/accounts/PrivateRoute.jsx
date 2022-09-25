import React,{ useContext }   from 'react';
import { useLocation,Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const PrivateRoute =props=> {
  let location = useLocation();
  let {user} = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/loginreg" state={{ from: location }} />;
  }

  return props.children;
}

/*const PrivateRoute= props => {
const authenticated =false;
  return (
    <Route {...props}>{!authenticated ? <Navigate to='/loginreg' />: props.children}</Route>
    
  );
};
*/
export default PrivateRoute