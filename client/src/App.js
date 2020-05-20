import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/login/login';
import CreateAccount from './components/createAccount/createAccount';
import MemberProfile from './components/memberProfile/memberProfile';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Signin} />
        <Route path='/create-account' component={CreateAccount} />
        <Route path='/member-profile' component={(props) => <MemberProfile {...props} /> } />
        <Route exact path='/' component={CreateAccount}/>
      </Switch>
    </div>
  );
}

export default App;
