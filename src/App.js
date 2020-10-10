import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


import ShowView from './components/show-view/ShowView';
import ShowFavourites from './components/show-view/ShowFavourites';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <header className="App-header">
            <Route exact path='/' component={ShowView}/>
            <Route exact path='/favourites' component={ShowFavourites}/>
          </header>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
