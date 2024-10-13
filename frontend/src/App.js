import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard';
import Create from "./views/Create";
import StepperForm from "./views/StepperForm";

function App(){
  return(
    <Router>
      <AuthProvider>
        <Switch>
          <Route component={Loginpage} path="/login" exact />
          <Route component={Registerpage} path="/register" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact/>
          <PrivateRoute component={Homepage} path="/homepage" exact />
          <PrivateRoute component={StepperForm} path="/inputs" exact />
          <PrivateRoute component={Create} path="/create" exact />
          <Redirect from="/" to="/login" exact />
          <Redirect to="/login" />
        </Switch>
      </AuthProvider>
    </Router>
  )
}
export default App;