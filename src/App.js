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
            <Route exact path='/involvio-shows' component={ShowView}/>
            <Route path='/favourites' component={ShowFavourites}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
