import React, { Component } from 'react';
import Header from './components/header/Header'
import Home from './views/Home'
import Articles from './views/Articles'
import SearchResults from './views/SearchResults'
import Bookmarks from './views/Bookmarks'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div style={style.appContainer}>
        <Header />
        
        <div>
          <Switch>
            <Route path="/bookmarks/:uid" component={ Bookmarks } />
            <Route path="/searchresults/:query/:page" component={ SearchResults } /> 
            <Route path="/article/:url" component={ Articles } />
            <Route exact path="/" component= {Home } />
            <Route path="/:section" component={ Home } />
            {/* <Route path="/articles" component={ Articles } /> */}
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
