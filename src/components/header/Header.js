import React, { Component } from 'react';
import HeaderNav from './HeaderNav'
import Search from './Search'
import axios from 'axios'

class Header extends Component {

  constructor(){
    super()
    this.state = {
      displayName: null
    }

    //this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get('/auth/me').then( (r) => {
      console.log(r)
      this.setState({
        displayName: r.data.displayName
      })
    })
  }


  render() {

  const { container, aligner, h1 } = style
    let display 

    console.log(this.state.displayName)
  return (
    <div style={ container }>

      <div style={ aligner }>
        <h1 style={ h1 }>The Times</h1>
        <Search />
    { this.state.displayName ? 
      display = <a href="http://localhost:9999/auth/logout">Log Out</a> :
      display = <a href="http://localhost:9999/auth"><h3>Login</h3></a> }
      
      </div>

      <HeaderNav />

    </div>
    );
  }
}

const style = {
  container : {
    margin: 'auto',
    width: '100%',
    height: '64px',
    background: '#242f36',
    color: '#fff',
},
  aligner : {
    display: 'flex',
    height: '64px',
    justifyContent: 'space-around',
    alignItems: 'center'
},
  h1 : {
    fontSize: '2rem',
  }
}
export default Header;