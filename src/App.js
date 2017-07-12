import React, { Component } from 'react';
import axios from 'axios'

import Header from './components/header/Header'
class App extends Component {
  constructor() {
    super()
    this.state = {
      apiData: null
    }
  }

  // componentDidMount() {
  //    axios.get('http://localhost:9999/view/world').then( r => this.setState({ apiData: r.data }))
  // }
  render() {
    console.log(this.state.apiData)
    return (
      <div style={style.appContainer}>
        <Header />
        <p className="App-intro">
        
        </p>
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
