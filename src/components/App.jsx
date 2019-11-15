import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import TapList from './TapList';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>
      {/* <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/tap' component={TapList}/>
        </Switch>
      </div> */}
    </div>
  );
}

export default App;
