import React, { Component } from 'react';
import Header from './components/header/Header'
import Home from './views/Home'
import Articles from './views/Articles'
import SearchResults from './views/SearchResults'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div style={style.appContainer}>
        <Header />
        
        <div>
          <Switch>
            <Route path="/search/:query/:page" component={ SearchResults } /> 
            <Route path="/article/:url" component={ Articles } />
            <Route exact path="/" component= {Home } />
            <Route path="/:section" component={ Home } />
            <Route path="/bookmarks" component={ Bookmarks } />
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
