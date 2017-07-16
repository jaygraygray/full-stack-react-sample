import React, { Component } from 'react';
import HeaderNav from './HeaderNav'
import Search from './Search'

class Header extends Component {

  render() {

  const { container, aligner, h1 } = style
 
  return (
    <div style={ container }>

      <div style={ aligner }>
        <h1 style={ h1 }>The Times</h1>
        <Search />
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