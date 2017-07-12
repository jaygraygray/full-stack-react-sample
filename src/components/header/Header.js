import React, { Component } from 'react';

import HeaderNav from './HeaderNav'
import Search from './Search'

class Header extends Component {
 render() {
  const {container, aligner, h1} = style
  return (
   <div style={container}>
    <div style={aligner}>
     <h1 style={h1}>The Times</h1>
     <Search />
    </div>
    

   <HeaderNav />

   </div>
  );
 }
}

const style = {
 container : {
  width: '760px',
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
// 3a434a -- search box
// c1c7d4 -- top story BG
// 009bde -- nav item border hover/active
export default Header;