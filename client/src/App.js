import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/login/login';
import CreateAccount from './components/createAccount/createAccount';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Signin} />
        <Route path='/create-account' component={CreateAccount} />
        <Route exact path='/' component={CreateAccount}/>
      </Switch>
    </div>
  );
}

export default App;
