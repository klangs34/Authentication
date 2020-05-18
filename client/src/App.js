import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/login/login';
import CreateAccount from './components/createAccount/createAccount';

function App() {
  return (
    <div>
      <Switch>
        <Route to='/' component={CreateAccount}/>
        <Route to='/login' component={Signin} />
        <Route to='/create-account' component={CreateAccount} />
      </Switch>
    </div>
  );
}

export default App;
