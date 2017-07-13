import React, { Component } from 'react';
import axios from 'axios'

import Header from './components/header/Header'
import Home from './views/Home'
// import Article from './views/Article'
import SearchResults from './views/SearchResults'

import { Switch, Route } from 'react-router-dom'
class App extends Component {

  render() {
    return (
      <div style={style.appContainer}>
        <Header />
        
        <div>
          <Switch>
            <Route path="/search/:query/:page" component={SearchResults} /> 
            <Route exact path="/" component={Home} />
            <Route path="/:section" component={Home} />
            {/* <Route exact path="/article/:title" component={Article} />*/}
            
          </Switch>
        </div>
      </div>
    );
  }
}

const style = {
  appContainer : {
    width: '100%'
  }
}

export default App;
