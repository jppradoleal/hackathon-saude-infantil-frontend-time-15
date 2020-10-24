import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/User/Login';
import Signup from './pages/User/Signup';
import Dashboard from './pages/Dashboard';
import CreateChildRegistry from './pages/ChildRegistry/CreateChildRegistry';
import DetailChildRegistry from './pages/ChildRegistry/DetailChildRegistry';
import DeleteChildRegistry from './pages/ChildRegistry/DeleteChildRegistry';
import UpdateChildRegistry from './pages/ChildRegistry/UpdateChildRegistry';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/child/delete/:id" component={DeleteChildRegistry} />
        <Route path="/child/update/:id" component={UpdateChildRegistry} />
        <Route path="/child/:id" component={DetailChildRegistry} />
        <Route path="/child" component={CreateChildRegistry} />
      </Switch>
    </BrowserRouter>
  )
}