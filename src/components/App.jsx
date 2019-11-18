import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import TapList from './TapList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <div className="row">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/tap' component={TapList} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
