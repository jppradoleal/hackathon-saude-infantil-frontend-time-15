import React, { useState, useContext } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

import UserContext from './context/UserContext';

import Home from './pages/Home';
import Login from './pages/User/Login';
import Signup from './pages/User/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardData from './pages/Dashboard/DashboardData';
import CreateChildRegistry from './pages/ChildRegistry/CreateChildRegistry';
import DetailChildRegistry from './pages/ChildRegistry/DetailChildRegistry';
import DeleteChildRegistry from './pages/ChildRegistry/DeleteChildRegistry';
import UpdateChildRegistry from './pages/ChildRegistry/UpdateChildRegistry';

function PrivateRoute(props) {
  const { token } = useContext(UserContext);
  const history = useHistory();
  if(!token) 
    history.push('/login');
  
  return (
    <Route {...props} />
  );
}

export default function Routes() {

  const [ token, setToken ] = useState('');

  return (
    <UserContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard/data" component={DashboardData} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/child/delete/:id" component={DeleteChildRegistry} />
          <PrivateRoute path="/child/update/:id" component={UpdateChildRegistry} />
          <Route path="/child/:id" component={DetailChildRegistry} />
          <PrivateRoute path="/child" component={CreateChildRegistry} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  )
}