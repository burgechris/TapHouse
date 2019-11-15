import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          {/* <Route exact path='/' component={HomePage} />
          <Route exact path='/profile' component={ProfilePage} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
