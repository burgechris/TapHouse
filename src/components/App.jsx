import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import TapList from './TapList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainTapList: {},
    };
    this.handleAddingNewTap = this.handleAddingNewTap.bind(this);
  }

  handleAddingNewTap(newTap) {
    var newTapId = v1();
    var newMainTapList = Object.assign({}, this.state.mainTapList, {[newTapId]: newTap});
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/tap' render={() => <TapList tapList={this.state.mainTapList} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
